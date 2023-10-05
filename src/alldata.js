import React, { useState, useEffect } from "react";

function AllData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch all accounts from API
    fetch(
      "https://serobabrahamfullstackbankapp-096547d76ef1.herokuapp.com/accounts"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData); // Set the parsed JSON data directly
        setIsLoading(false);
      })
      .catch((fetchError) => {
        console.error("Fetch error:", fetchError);
        setError(fetchError);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p style={{ color: "blue" }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error.message}</p>;
  }

  return (
    <>
      <table border="1" cellPadding="5" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: "#ccffcc" }}>ID</th>
            <th style={{ backgroundColor: "#ccffcc" }}>Name</th>
            <th style={{ backgroundColor: "#ccffcc" }}>Email</th>
            <th style={{ backgroundColor: "#ccffcc" }}>Password</th>
            <th style={{ backgroundColor: "#ccffcc" }}>Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
              }}
            >
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AllData;
