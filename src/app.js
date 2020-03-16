import React from 'react'
import Topbar from './component/topbar/top-bar.component';
import CitySideBar from './component/city-side-bar/city-side-bar.component';
import { BrowserRouter } from 'react-router-dom';
import CommuneFinder from './component/commune-finder/commune-finder.component';

export default class App extends React.Component {

   render() {
      return (
         <BrowserRouter>
            <Topbar />
            <main style={mainStyle}>
               <CitySideBar />
               <CommuneFinder />
            </main>
         </BrowserRouter>
      );
   }
}

const mainStyle = {
   display: 'flex',
   width: '100%',
   height: 'calc(100% - 50px)'
};