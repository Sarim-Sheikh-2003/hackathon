import React from 'react'
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import AfterMap from './components/Resources/AfterMap';
import ChartComponent from './components/Chart/ChartComponent';
import Searchbar from './components/Chart/Searchbar';

function App() {
  return (
    <>
      <Header/>
      <Map/>
      <ChartComponent/>
      <AfterMap/>
    </>
  );
}

export default App;
