import React, {createRef} from 'react';
import './side-bar-item.style.css';
import SideBarSubItem from '../side-bar-sub-item/side-bar-sub-item.component';
import toggleClass from '../../../provider/class-toggler';
import {getAllDistrictsOfProvince} from './../../../api/province.api';

export default class SideBarItem extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        districts: []
      };
      this.subMenuElement = createRef();
   }

   render() {
      const sideBarSubItem = this.state.districts.map((district) => {
         return <SideBarSubItem key={district.districtNameEN} districtId={district.districtId} districtName={district.districtNameKH} provinceId={this.props.provinceId}  />
      });
      return (
         <div className="side-bar-item">
            <div className="item-title" onClick={(evt) => this.onSideBarItemClick(evt)}>{this.formatProvinceName(this.props.provinceName, 'kh')}</div>
            <div className="sub-menu d-none" ref={this.subMenuElement}>
               {sideBarSubItem}
            </div>
         </div>
      );
   }

   formatProvinceName(provinceName, language) {
      const prefixKh = 'ខេត្ត';
      const prefixEn = 'province';
      if (language === 'en') {

      } else if (language === 'kh') {
         if (provinceName.includes('ភ្នំពេញ'))
            return provinceName.substr('ភ្នំពេញ'.length, provinceName.length);
         return provinceName.substr(prefixKh.length, provinceName.length);
      }
   }

   async onSideBarItemClick(evt) {
      const subMenu = this.subMenuElement.current;
      // get data
      if (this.state.districts.length === 0) {
         try {
            const responseJson = await getAllDistrictsOfProvince(parseInt(this.props.provinceId));
            const districts = responseJson;
            this.setState({districts: districts});
         } catch (error) {
            console.log('Error');
            return;
         }
      }
      toggleClass(subMenu, 'd-none', 'auto');
   }

}