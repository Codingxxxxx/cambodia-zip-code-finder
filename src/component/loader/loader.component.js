import React from 'react';

export default class Loader extends React.Component {

   render() {
      return (
         <div id="loader" className="bg-light border border-primary shadow d-none" style={loaderContainerStyle}>
            <div className="d-flex flex-column justify-content-center align-items-center">
               <div className="spinner-border text-primary" role="status" style={loaderStyle}>
                  <span className="sr-only">Loading...</span>
               </div>
               <h5 className="text-center mt-3" style={loadingTitleStyle}>កំពុងដំណើរការ​ សូមរង់ចាំ</h5>
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

const loadingTitleStyle = {
   fontFamily: 'hanuman',
   fontSize: '1.1em'
}

const loaderContainerStyle = {
   backgroundColor: 'black',
   position: 'absolute',
   left: 'calc(50% - 18em)',
   top: 'calc(50% - 8em)',
   padding: '2em 15em',
   borderRadius: '0.2em'
}