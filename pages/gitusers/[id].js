import Link from "next/link";

export default ({ user: { name, location, bio } }) => {
  return (
    <div>
      <h1>User Details</h1>
      <p>{name}</p>
      <p>{location}</p>
      <p>{bio}</p>
      <p>
        <Link href="/gitusers/list">
          <a>Back</a>
        </Link>
      </p>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://api.github.com/search/users?q=facebook");
  const users = await res.json();
  const usersList = users.items;

  // Get the paths we want to pre-render based on users
  const paths = usersList.map((user) => `/gitusers/${user.login}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://api.github.com/users/" + params.id);
  const user = await res.json();
  console.log(user);

  return {
    props: {
      user,
    },
  };
}
