import useSWR from "swr";

function Profile() {
  const url =
    "https://data.grandpoitiers.fr/api/records/1.0/search/?dataset=mobilites-stationnement-des-parkings-en-temps-reel&facet=Places_restantes";
  const { data, error } = useSWR(url, fetch);
  console.log(data.clone().text());

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div className="App">{JSON.stringify(data.records)}</div>;
}

export default Profile;
