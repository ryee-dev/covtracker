import React, { useEffect } from "react";
import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import { sortData } from "./util.js";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";
import { prettyPrintStat } from "./util";
function App() {
  const [countries, setCountries] = React.useState([]);

  // "https://disease.sh​/v3​/covid-19​/countries"
  // USEEFFECT = runs a piece of code based on a given condition
  const [country, setCountry] = React.useState("worldwide");
  const [countryInfo, setCountryInfo] = React.useState({});
  const [tableData, setTableData] = React.useState([]);
  const [mapCenter, setMapCenter] = React.useState({
    lat: 34.80746,
    lng: -40.4796,
  });
  const [mapZoom, setMapZoom] = React.useState(3);
  const [mapCountries, setMapCountries] = React.useState([]);
  const [casesType, setCasesType] = React.useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);
  
  useEffect(() => {
    // the code here will run once when the component loads and not again after
    // async -> send a request, wait for it, do something with it

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // United States, United Kingdom
            value: country.countryInfo.iso2, // UK, USA, FR
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        countryCode === "worldwide"
          ? setMapCenter({ lat: 34.80746, lng: -40.4796 })
          : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}

              {/* <MenuItem value="worldwide">Worldwide</MenuItem>
              <MenuItem value="worldwide">Option2</MenuItem>
              <MenuItem value="worldwide">Option3</MenuItem>
              <MenuItem value="worldwide">Option4</MenuItem> */}
            </Select>
          </FormControl>
        </div>

        {/* Header */}
        {/* Title + select input dropdown field */}

        {/* infobox */}
        {/* infobox */}
        {/* infobox */}
        <div className="app__stats">
          {/* InfoBox title="Cases" */}
          <InfoBox
            isRed
            active={casesType === "cases"}
            onClick={(e) => setCasesType("cases")}
            title="Corona Virus Cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}
            country={country}
          />
          {/* InfoBox title ="Recoveries" */}
          <InfoBox
            active={casesType === "recovered"}
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={prettyPrintStat(countryInfo.recovered)}
            country={country}
          />
          {/* Infobox title ="Deaths" */}
          <InfoBox
            isRed
            active={casesType === "deaths"}
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={prettyPrintStat(countryInfo.deaths)}
            country={country}
          />
        </div>
        {/* Map */}

        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>

      {/* Table */}
      {/* Graph */}
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases By Country</h3>
          <Table countries={tableData} />
          <h3 className="app__graphTitle">Worldwide New {casesType}</h3>
          <LineGraph className="app__graph" casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
