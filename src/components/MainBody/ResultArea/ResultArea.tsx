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
  // useState hook to keep table data
  const [tableData, setTableData] = useState<IData[]>([]);

  //useEffect hook to fetch data by calling api and keeping data in state
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard"
    )
      .then((res) => res.json())
      .then((data) => setTableData(data.data));
  }, []);

  return (
    <div className="resultAreaContainer">
      {/* heading result area */}
      <div className="tableHeading">
        <h3>The terms you are tracking</h3>
        <p>The data will refresh every 5 minutes</p>
      </div>
      <div>
        <table>
          {/* table heading */}
          <thead>
            <tr>
              <th>Keywords</th>
              <th> </th>
              <th>Goal</th>
              <th>Matches</th>
              <th>Search Status</th>
              <th>Delete keyword</th>
            </tr>
          </thead>

          {/* table body part */}
          <tbody>
            {/* loader will show at loading time */}
            <div className={tableData.length === 0 ? "loader" : ""}></div>

            {/* mapping through table data array */}
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
