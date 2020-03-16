import React from 'react';
import  './side-bar-sub-item.style.css';
import {connect} from 'react-redux';
import {fetchCommunes} from './../../../reducer/action.creator';

class SideBarSubItem extends React.Component {

   render() {
      return (
         <div className="side-bar-sub-item" onClick={(evt) => this.onDistrictClick(evt)}>
            <p className="side-bar-sub-item-text">{this.props.districtName}</p>
         </div>
      );
   }

   onDistrictClick(evt) {
      this.props.searchCommunes(this.props.districtId);
   }

}

function mapDispachToProps(dispach) {
   return {
      searchCommunes: (districtId) => dispach(fetchCommunes(districtId))
   }
}

function mapStateToProps(state) {
   return {
      communes: state.communes
   }
}

export default connect(mapStateToProps, mapDispachToProps)(SideBarSubItem);