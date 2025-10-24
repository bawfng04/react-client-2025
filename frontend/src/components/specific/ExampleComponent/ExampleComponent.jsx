import { useState, useEffect } from "react";
import { exampleAPI } from "../../../apis";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import Notification from "../../common/Notification/Notification";

const ExampleComponent = () => {
  const [data, setData] = useState([]);

  async function FetchExample() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found (FE).");
        return;
      }

      const response = await fetch(exampleAPI, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          console.log("Unauthorized or forbidden access (FE).");
        } else {
          console.log(`Error: ${response.status} - ${response.statusText}`);
        }
        return;
      }

      const responseData = await response.json();

      if (Array.isArray(responseData)) {
        setData(responseData);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setData([]);
    }
  }

  useEffect(() => {
    FetchExample();
  }, []);

  return (
    <div className="example-component">
      <div className="example-component-content">
        <Notification
          message="This is an example notification
        message: ExampleComponent is rendered!

        "
        />
        <h1>Example Component</h1>
        <p>API URL: {exampleAPI}</p>
        <ul>
          {data.map((item, index) => (
            <div key={index}>
              <p>-----</p>
              <li>{item.ID}</li>
              <li>{item.NAME}</li>
              <li>{item.AGE}</li>
            </div>
          ))}
        </ul>
        <LoadingSpinner />
      </div>
    </div>
  );
};

export default ExampleComponent;
