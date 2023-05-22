import { useEffect, useState } from "react";
import { getRank, pyClient } from "./api/JobPortalAPIService";

function HomeComponent() {
  const [rank, setRank] = useState(0);
  const details = {
    jobDesc: "C++, java, kotlin, python, problem solving skills",
    resume: "kotlin",
  };

  useEffect(() => {
    getRank(details)
      .then((response) => {
        // console.log(response)
        setRank(response.data.match);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <h1>{rank}</h1>;
}

export default HomeComponent;
