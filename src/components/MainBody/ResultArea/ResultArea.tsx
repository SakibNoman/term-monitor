import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./ResultArea.css";

interface IData {
  keyword: string;
  goal: string;
  id: number;
  matches: number;
  search_status: string;
}

const ResultArea = () => {
  const [tableData, setTableData] = useState<IData[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard"
    )
      .then((res) => res.json())
      .then((data) => setTableData(data.data));
  }, []);

  //   console.log(tableData);

  return (
    <div className="resultAreaContainer">
      <div className="tableHeading">
        <h3>The terms you are tracking</h3>
        <p>The data will refresh every 5 minutes</p>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Keywords</th>
              <th></th>
              <th>Goal</th>
              <th>Matches</th>
              <th>Search Status</th>
              <th>Delete keyword</th>
            </tr>
          </thead>
          <tbody>
            <div className={tableData.length === 0 ? "loader" : ""}></div>
            {tableData.map((each) => (
              <tr>
                <td className="keywordCell">
                  <p>{each.keyword}</p>
                </td>
                <td>
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </td>
                <td> {each.goal} </td>
                <td> {each.matches} </td> <td> {each.search_status} </td>
                <td>
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="resultBtnDiv">
        <button>VIEW RESULTS</button>
      </div>
    </div>
  );
};

export default ResultArea;
