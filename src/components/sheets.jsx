import React, { useState, useEffect } from "react";

const GoogleSheetData = () => {
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbzEpaay49GyjPXG20UdBxQLGvlZ19tFTpF_pd83ww6RE_VzTbIVaQcT5Cmv35OBrNAg/exec"
        );
        const jsonData = await response.json();
        setSheetData(jsonData.data); // Access the 'data' array from the JSON object
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Google Sheet Data</h1>
      <ul>
        {sheetData.map((row, index) => (
          <li key={index}>
            <strong>Student ID:</strong> {row["Student ID"]}
            <br />
            <strong>Time In:</strong>{" "}
            {new Date(row["Time In"]).toLocaleString()}
            <br />
            <strong>Time Out:</strong>{" "}
            {new Date(row["Time Out"]).toLocaleString()}
            <br />
            <strong>Gate Number:</strong> {row["Gate Number"]}
            <br />
            <strong>Date:</strong> {new Date(row["Date"]).toLocaleDateString()}
            <br />
            <strong>First Name:</strong> {row["First Name"]}
            <br />
            <strong>Last Name:</strong> {row["Last Name"]}
            <br />
            <strong>Phone Number:</strong> {row["Phone Number"]}
            <br />
            <strong>Address:</strong> {row["Address"]}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleSheetData;
