import React from 'react';
import './city-side-bar.style.css';
import SideBarItem from './side-bar-item/side-bar-item.component';
import {getAllProvinces} from '../../api/province.api';
import {connect} from 'react-redux';
import { FETCH_PROVINCE, STOP_FETCH_PROVINCE } from '../../reducer/action.type';
import {hideLoading, showLoading} from './../../provider/show.loading';

class CitySideBar extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        provinces: []
      };
   }

   componentDidUpdate() {
      if (this.props.fetchProvince === true) {
         showLoading();
      } else {
         hideLoading();
      }
   }

   render() {
      let sideBarItems = this.state.provinces.map((province) => {
         return <SideBarItem key={province.provinceId} provinceId={province.provinceId} provinceName={province.provinceNameKH} />
      });
      return (
         <aside className="shadow disable-text-selection">
            {sideBarItems}
         </aside>
      );
   }

   componentDidMount() {
      this.props.startFetchingProvince();
      getAllProvinces().then((responseJSON) => {
         this.setState({provinces: responseJSON});
         this.props.stopFetchingProvince();
      });
   }

}

const mapStateToProps = (state) => {
   return {
      fetchProvince: state.fetchProvince
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      startFetchingProvince: () => dispatch({type: FETCH_PROVINCE}),
      stopFetchingProvince: () => dispatch({type: STOP_FETCH_PROVINCE})
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CitySideBar);