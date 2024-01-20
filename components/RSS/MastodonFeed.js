import { useEffect, useState } from "react";

function MastodonFeed() {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    const instanceUrl = "https://mastodon.social/api/v1/";
    const accessToken = "IUS2LSS33Wg49V4FiZlMliQVvmgZfpwl8VGzBn9MbMo";

    fetch(`${instanceUrl}accounts/RSOConsulting/statuses`, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFeedData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching Mastodon feed:", error);
      });
  }, []);

  return (
    <div>
      {/* {feedData && feedData.map((status) => (
        <div key={status.id}>
          <p>{status.content}</p>
        </div>
      ))} */}
    </div>
  );
}

export default MastodonFeed;
