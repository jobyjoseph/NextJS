const ServerSide = ({ user: { name, location, bio } }) => (
  <div>
    <h1>User Details</h1>
    <p>{name}</p>
    <p>{location}</p>
    <p>{bio}</p>
  </div>
);

// This gets called on every request
export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const res = await fetch("https://api.github.com/users/" + params.id);
  const user = await res.json();

  // Pass data to the page via props
  return { props: { user } };
}

export default ServerSide;
