import React from 'react';

export default class ServerErrorPrompt extends React.Component {


   render() {
      return (
         <div class="alert alert-danger" style={alertStyle} role="alert">
            Sorry! We could not connect to server :(
         </div>
      );
   }

}

const alertStyle = {
   position: 'relative',
   top: '50%',
   margin: 'auto auto',
   textAlign: 'center',
   transform: 'translateY(-50%)',
   padding: '1.5em 0',
   fontSize: '2em'
}