import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./tablePage.scss";

const TablePage = ({ array, ascending, descending }) => {
  const hello = array;
  const [jsonData, setJsonData] = useState(hello);

  useEffect(() => {
    setJsonData(hello);
  }, []);

  const sortDataAscending = () => {
    // const sortedData = [...array].sort((a, b) => a.disc_year - b.disc_year);
    // setJsonData(sortedData);
    ascending(true);
  };
  const sortDataDescending = () => {
    // const sortedData = [...array].sort((a, b) => b.disc_year - a.disc_year);
    // setJsonData(sortedData);
    descending(true);
  };
  if (array.length > 0) {
    return (
      <>
        <div className="tablePageOutterBody">
          <div className="tablePageInnerBody">
            <table>
              <tr className="tableTitle">
                <th>
                  PLANET NAME
                  <br />
                  <ArrowDropDownIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                  />
                  <ArrowDropUpIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                  />
                </th>
                <th>
                  HOST NAME
                  <br />
                  <ArrowDropDownIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                  />
                  <ArrowDropUpIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                  />
                </th>
                <th>
                  DISCOVERY METHOD
                  <br />
                  <ArrowDropDownIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                  />
                  <ArrowDropUpIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                  />
                </th>
                <th>
                  DISCOVERY YEAR
                  <br />
                  <ArrowDropDownIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                    onClick={sortDataDescending}
                  />
                  <ArrowDropUpIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                    onClick={sortDataAscending}
                  />
                </th>
                <th>
                  DISCOVERY FACILITY
                  <br />
                  <ArrowDropDownIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                  />
                  <ArrowDropUpIcon style={{ fontSize: "xx-large" }} />
                </th>
              </tr>
              {jsonData.map((data, index) => {
                return (
                  <>
                    <tr>
                      <th>
                        <a href="">
                          {data.pl_name}
                          <OpenInNewIcon style={{ fontSize: "small" }} />
                        </a>
                      </th>
                      <th>{data.hostname}</th>
                      <th>{data.discoverymethod}</th>
                      <th>{data.disc_year}</th>
                      <th>{data.disc_facility}</th>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>data is not</h1>;
  }
};

export default TablePage;
