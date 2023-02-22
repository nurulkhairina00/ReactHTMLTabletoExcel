import React, { useEffect, useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import axios from "axios";
export default function index() {
  let [data, setData] = useState([]);

  const dataExcel = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    dataExcel();
  }, []);

  return (
    <div className="my-3">
      <h2 className="m-3">React HTML Table To Excel</h2>
      <ReactHTMLTableToExcel id="test-table-xls-button" className="download-table-xls-button" table="table-to-xls" filename="tablexls" sheet="tablexls" buttonText="Print Excel" />
      <div style={{ display: "none" }}>
        <table style={{ width: "100%" }} id="table-to-xls">
          <tr>
            <th colSpan={6} style={{ fontSize: "14pt", textAlign: "center" }}>
              COMPANY CIPTA ADIL
            </th>
          </tr>
          <tr>
            <th colSpan={6} style={{ fontSize: "12pt", textAlign: "center" }}>
              EMPLOYEE DATA
            </th>
          </tr>
          <tr>
            <td colSpan={6}></td>
          </tr>
          <tr>
            <td colSpan={6}></td>
          </tr>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          {data.map((item, index) => (
            <>
              <tr>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td style={{ textAlign: "left" }}>{item.name}</td>
                <td style={{ textAlign: "left" }}>{item.username}</td>
                <td style={{ textAlign: "left" }}>{item.email}</td>
                <td style={{ textAlign: "left" }}>{item.phone}</td>
                <td style={{ textAlign: "left" }}>{item.website}</td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </div>
  );
}
