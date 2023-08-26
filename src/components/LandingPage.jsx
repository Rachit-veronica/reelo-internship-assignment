import React from "react";
import "./landingPage.scss";
import data from "../assets/data.json";
import { useState } from "react";
import TablePage from "./TablePage";

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

  // --------------

  // search button

  const searchBtn = () => {
    if (
      // here where test that user take and value from option
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

  // -----------------

  const sortNumDataAscending = () => {
    const sortedData = [...passJsonValues].sort(
      (a, b) => a.disc_year - b.disc_year
    );
    setPassJsonValues(sortedData);
  };
  const sortNumDataDescending = () => {
    const sortedData = [...passJsonValues].sort(
      (a, b) => b.disc_year - a.disc_year
    );
    setPassJsonValues(sortedData);
  };

  // --------------------
  const sortTextDataAscending = (name) => {
    const sortData = [...passJsonValues];
    const sorted = sortData.sort((a, b) => a[name].localeCompare(b[name]));
    setPassJsonValues(sorted);
  };
  const sortTextDataDescending = (name) => {
    const sortData = [...passJsonValues];
    const sorted = sortData.sort((a, b) => b[name].localeCompare(a[name]));
    setPassJsonValues(sorted);
  };

  // -----------------

  // filter the select option

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
  // ------------------

  const clearBtn = () => {
    setPassJsonValues([]);
    setSelectedValues({
      ...selectedValue,
      hostNameVal: "",
      discoveryMethodVal: "",
      discoveryYearVal: "",
      discoveryFacilityVal: "",
    });
  };

  return (
    <>
      <div className="landingPageOutterBody">
        <div className="landingPageInnerBody">
          <h1>NASA Exoplanet Query</h1>
          <div className="filterBarAndTablePage">
            <div className="filterBar">
              <div className="hostName">
                <select
                  name="hostNameVal"
                  value={selectedValue.hostNameVal}
                  onChange={handleSelectChange}
                >
                  <option value="">Host Name</option>
                  {hostNameFunc().map((info, index) => {
                    return (
                      <option value={info.hostname}>{info.hostname}</option>
                    );
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
              <span>
                <button onClick={searchBtn}>Search</button>
                <button onClick={clearBtn}>Clear</button>
              </span>
            </div>
            <TablePage
              array={passJsonValues}
              numAscending={sortNumDataAscending}
              numDescending={sortNumDataDescending}
              textAscending={sortTextDataAscending}
              textDescending={sortTextDataDescending}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
