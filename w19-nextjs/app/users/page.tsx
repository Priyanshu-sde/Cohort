import axios from "axios";

export default async function Home() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  const userData = response.data;

  return (
    <div>
      {userData.email}
      {userData.name}
    </div>
  );
}
