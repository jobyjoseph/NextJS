export default ({ number }) => {
  return <h1>{number}</h1>;
};

export async function getStaticProps() {
  const res = await fetch(
    "http://www.randomnumberapi.com/api/v1.0/randomnumber"
  );
  const data = await res.json();

  return {
    props: {
      number: data[0],
    },
    revalidate: 1, // rewrites page json file every second
  };
}
