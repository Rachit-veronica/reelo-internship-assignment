import React from "react";
import "./landingPage.scss";
import data from "../assets/data.json";
import { useState } from "react";

// ------------------

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./tablePage.scss";

function LandingPage() {
  const [selectedValue, setSelectedValues] = useState({
    hostNameVal: "",
    discoveryMethodVal: "",
    discoveryYearVal: "",
    discoveryFacilityVal: "",
  });
  const [passJsonValues, setPassJsonValues] = useState([]);

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const searchBtn = () => {
    console.log(selectedValue.discoveryYearVal);
    if (
      selectedValue.hostNameVal ||
      selectedValue.discoveryYearVal ||
      selectedValue.discoveryMethodVal ||
      selectedValue.discoveryFacilityVal
    ) {
      const filterResults = data.filter((item) => {
        const filterHostName =
          !selectedValue.hostNameVal ||
          item.hostname === selectedValue.hostNameVal;
        const filterDiscoveryMethod =
          !selectedValue.discoveryMethodVal ||
          item.discoverymethod === selectedValue.discoveryMethodVal;
        const filterDiscoveryYear =
          !selectedValue.discoveryYearVal ||
          item.disc_year == selectedValue.discoveryYearVal;
        const filterDiscoveryFacility =
          !selectedValue.discoveryFacilityVal ||
          item.disc_facility === selectedValue.discoveryFacilityVal;

        return (
          // filterName &&
          filterHostName &&
          filterDiscoveryMethod &&
          filterDiscoveryYear &&
          filterDiscoveryFacility
        );
      });
      setPassJsonValues(filterResults);
    } else {
      alert("Please Fill The filter Bar Data");
    }
  };

  const sortDataAscending = () => {
    const sortedData = [...passJsonValues].sort(
      (a, b) => a.disc_year - b.disc_year
    );
    setPassJsonValues(sortedData);
    console.log("ass");
  };
  const sortDataDescending = () => {
    const sortedData = [...passJsonValues].sort(
      (a, b) => b.disc_year - a.disc_year
    );
    setPassJsonValues(sortedData);
  };

  const hostNameFunc = () => {
    const unique = data.filter((obj, index) => {
      return index === data.findIndex((o) => obj.hostname === o.hostname);
    });
    return unique;
  };
  const discoverymethodFunc = () => {
    const unique = data.filter((obj, index) => {
      return (
        index ===
        data.findIndex((o) => obj.discoverymethod === o.discoverymethod)
      );
    });
    return unique;
  };
  const disc_yearFunc = () => {
    const unique = data.filter((obj, index) => {
      return index === data.findIndex((o) => obj.disc_year === o.disc_year);
    });
    return unique;
  };
  const disc_facilityFunc = () => {
    const unique = data.filter((obj, index) => {
      return (
        index === data.findIndex((o) => obj.disc_facility === o.disc_facility)
      );
    });
    return unique;
  };


  if(true){
    
  }

  return (
    <>
      <div className="landingPageOutterBody">
        <div className="landingPageInnerBody">
          <div className="filterBar">
            <div className="hostName">
              <select
                name="hostNameVal"
                value={selectedValue.hostNameVal}
                onChange={handleSelectChange}
              >
                <option value="">Host Name</option>
                {hostNameFunc().map((info, index) => {
                  return <option value={info.hostname}>{info.hostname}</option>;
                })}
              </select>
            </div>
            <div className="discoveryMethod">
              <select
                name="discoveryMethodVal"
                value={selectedValue.discoveryMethodVal}
                onChange={handleSelectChange}
              >
                <option value="">Discovery Method</option>
                {discoverymethodFunc(data).map((info, index) => {
                  return <option>{info.discoverymethod}</option>;
                })}
              </select>
            </div>
            <div className="discoveryYear">
              <select
                name="discoveryYearVal"
                value={selectedValue.discoveryYearVal}
                onChange={handleSelectChange}
              >
                <option value="">Discovery Year</option>
                {disc_yearFunc(data).map((info, index) => {
                  return <option>{info.disc_year}</option>;
                })}
              </select>
            </div>
            <div className="discoveryFacility">
              <select
                name="discoveryFacilityVal"
                value={selectedValue.discoveryFacilityVal}
                onChange={handleSelectChange}
              >
                <option value="">Discovery Facility</option>

                {disc_facilityFunc(data).map((info, index) => {
                  return <option>{info.disc_facility}</option>;
                })}
              </select>
            </div>
            <button onClick={searchBtn}>Search</button>
            <button>Clear</button>
          </div>
        </div>

        {/* ---------------- */}

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
              {passJsonValues.map((data, index) => {
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
      </div>
    </>
  );
}
export default LandingPage;
