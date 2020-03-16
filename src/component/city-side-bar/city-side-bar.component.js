import React from 'react';
import './city-side-bar.style.css';
import SideBarItem from './side-bar-item/side-bar-item.component';
import {getAllProvinces} from '../../api/province.api';

export default class CitySideBar extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        provinces: []
      };
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
      getAllProvinces().then((responseJSON) => {
         this.setState({provinces: responseJSON});
      });
   }

}