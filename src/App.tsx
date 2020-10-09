import React, { useEffect } from 'react';
import './App.css';
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from '@material-ui/core';
import InfoBox from './components/InfoBox';
import Map from './components/Map';
import Table from './components/Table';
import { sortData } from './util';
import LineGraph from './components/LineGraph';
import 'leaflet/dist/leaflet.css';
import { prettyPrintStat } from './util';

// interface AppProps {
//   countries: [String];
//   country: string;
//   countryInfo: any;
//   tableData: any;
// }

type countryInfo = {
  todayCases: number;
  cases: number;
  todayRecovered: number;
  recovered: number;
  todayDeaths: number;
  deaths: number;
};

function App() {
  const [countries, setCountries] = React.useState<[]>([]);
  const [country, setCountry] = React.useState<string>('worldwide');
  const [countryInfo, setCountryInfo] = React.useState<countryInfo>({
    todayCases: 0,
    cases: 0,
    todayRecovered: 0,
    recovered: 0,
    todayDeaths: 0,
    deaths: 0,
  });
  const [tableData, setTableData] = React.useState<{}>([]);
  const [mapCenter, setMapCenter] = React.useState<{}>({
    lat: 34.80746,
    lng: -40.4796,
  });
  const [mapZoom, setMapZoom] = React.useState<number>(3);
  const [mapCountries, setMapCountries] = React.useState<[]>([]);
  const [casesType, setCasesType] = React.useState<string>('cases');

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });

    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            key: country.countryInfo.iso2,
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
      countryCode === 'worldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        countryCode === 'worldwide'
          ? setMapCenter({ lat: 34.80746, lng: -40.4796 })
          : // @ts-ignore
            setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
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
              {countries.map((country: any) => (
                <MenuItem key={country.value} value={country.value}>
                  {country.name}
                </MenuItem>
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
            active={casesType === 'cases'}
            onClick={(e) => setCasesType('cases')}
            title="Corona Virus Cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}
            country={country}
          />
          {/* InfoBox title ="Recoveries" */}
          <InfoBox
            isRed
            active={casesType === 'recovered'}
            onClick={(e) => setCasesType('recovered')}
            title="Recovered"
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={prettyPrintStat(countryInfo.recovered)}
            country={country}
          />
          {/* Infobox title ="Deaths" */}
          <InfoBox
            isRed
            active={casesType === 'deaths'}
            onClick={(e) => setCasesType('deaths')}
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
      <Card className="app__bottom">
        <CardContent>
          <div className="covid-table">
            <h3>Live Cases By Country</h3>
            <Table countries={tableData} />
          </div>
          <div>
            <h3 className="app__graphTitle">Worldwide New {casesType}</h3>
            <LineGraph className="app__graph" casesType={casesType} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
