import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./tablePage.scss";

const TablePage = ({
  array,
  numAscending,
  numDescending,
  textAscending,
  textDescending,
}) => {
  const sortTextDataAscending = (name) => {
    textAscending(name);
  };
  const sortTextDataDescending = (name) => {
    textDescending(name);
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
                    onClick={() => {
                      textAscending("pl_name");
                    }}
                  />
                  <ArrowDropUpIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                    onClick={() => {
                      textDescending("pl_name");
                    }}
                  />
                </th>
                <th>
                  HOST NAME
                  <br />
                  <ArrowDropDownIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                    onClick={() => {
                      textAscending("hostname");
                    }}
                  />
                  <ArrowDropUpIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                    onClick={() => {
                      textDescending("hostname");
                    }}
                  />
                </th>
                <th>
                  DISCOVERY METHOD
                  <br />
                  <ArrowDropDownIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                    onClick={() => {
                      textAscending("discoverymethod");
                    }}
                  />
                  <ArrowDropUpIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                    onClick={() => {
                      textDescending("discoverymethod");
                    }}
                  />
                </th>
                <th>
                  DISCOVERY YEAR
                  <br />
                  <ArrowDropDownIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                    onClick={() => {
                      numAscending();
                    }}
                  />
                  <ArrowDropUpIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                    onClick={() => {
                      numDescending();
                    }}
                  />
                </th>
                <th>
                  DISCOVERY FACILITY
                  <br />
                  <ArrowDropDownIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                    onClick={() => {
                      textAscending("disc_facility");
                    }}
                  />
                  <ArrowDropUpIcon
                    style={{ fontSize: "xx-large", cursor: "pointer" }}
                    onClick={() => {
                      textDescending("disc_facility");
                    }}
                  />
                </th>
              </tr>
              {array.map((data, index) => {
                return (
                  <>
                    <tr>
                      <th>
                        <a href="" target="_blank">
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
    return (
      <>
        <div className="tempLineOutterBody">
          <div className="tempLineInnerBady">
            <div className="tempLineText">
              <p>Exoplanets are planets outside the Solar System.</p>
              <p>
                Here you can query{" "}
                <a href="#" target="_blank" style={{ textDecoration: "none" }}>
                  NASA's Exoplanet Archive
                </a>{" "}
                and find the one you love the most.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default TablePage;
