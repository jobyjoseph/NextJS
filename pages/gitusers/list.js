import Link from "next/link";

export default ({ users }) => {
  return (
    <ul>
      {users.map((ele) => (
        <li>
          <Link href={"/gitusers/" + ele.login}>
            <a>{ele.login}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/search/users?q=facebook");
  const users = await res.json();

  return {
    props: {
      users: users.items,
    },
  };
}
