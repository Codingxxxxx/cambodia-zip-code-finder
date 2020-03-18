import React from 'react';

export default class Loader extends React.Component {

   render() {
      return (
         <div id="loader" className="bg-light border border-primary shadow d-none" style={loaderContainerStyle}>
            <div className="spinner-border text-primary" role="status" style={loaderStyle}>
               <span className="sr-only">Loading...</span>
            </div>
         </div>
      );
   }

}

const loaderStyle = {
   zIndex: '4',
   width: '5em',
   height: '5em',
   borderWidth: '0.5em',
}

const loaderContainerStyle = {
   backgroundColor: 'black',
   position: 'absolute',
   left: 'calc(50% - 18em)',
   top: 'calc(50% - 8em)',
   padding: '2em 15em',
   borderRadius: '0.2em'
}