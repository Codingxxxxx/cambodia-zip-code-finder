import React from 'react';
import './commune-card.style.css';

export default class CommuneCard extends React.Component {

   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="card commune-card shadow-sm m-2">
            <div className="card-body p-3 text-white">
               <h6 className="card-title text-center m-0">{this.props.commune}</h6>
            </div>
            <ul className="list-group list-group-flush commune-info">
               <li className="list-group-item province border-0 pl-2 pr-2 pt-1 pb-1">- {this.props.province}</li>
               <li className="list-group-item district border-0 pl-2 pr-2 pt-1 pb-1">​- {this.props.district}</li>
               <li className="list-group-item zip-code border-0 pl-2 pr-2 pt-1 pb-1">- លេខកូដតំបន់ : {this.props.zipCode}</li>
            </ul>
         </div>
      );
   }
}
