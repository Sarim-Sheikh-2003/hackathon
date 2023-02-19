import React from 'react'
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import AfterMap from './components/Resources/AfterMap';
import ChartComponent from './components/Chart/ChartComponent';

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
