import { useEffect, useState } from "react";
const FetchData = () => {
  const [commentsData, setCommentsData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
      .then((rec) => rec.json())
      .then((rawData) => setCommentsData(rawData));
  }, []);
  console.log("xxx", commentsData);
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>PostId</th>
            <th>Id</th>
            <th>Name</th>
            <th>email</th>
            <th>Body</th>
          </tr>

          {commentsData?.map((ele) => {
            return (
              <tr>
                <td>{ele.postId}</td>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FetchData;
