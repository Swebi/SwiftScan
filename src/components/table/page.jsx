import { useEffect, useState } from "react";
import { DataTable } from "./dataTable";
import { columns } from "./columns";

async function getData() {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzEpaay49GyjPXG20UdBxQLGvlZ19tFTpF_pd83ww6RE_VzTbIVaQcT5Cmv35OBrNAg/exec"
    );
    const jsonData = await response.json();
    return jsonData.data; // Access the 'data' array from the JSON object
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of error
  }
}

export default function DemoPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getData();
      console.log(fetchedData);
      setData(fetchedData); // Set the fetched data directly without wrapping in an array
    }
    fetchData();
  }, []);

  return (
    <div className="mx-auto">
      <DataTable
        columns={columns}
        data={data}
        stateData={data}
        setStateData={setData}
      />
    </div>
  );
}
