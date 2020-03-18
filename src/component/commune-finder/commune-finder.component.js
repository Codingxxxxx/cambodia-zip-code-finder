import React, { createRef } from 'react';
import CommuneCard from '../commune-card/commune-card.component';
import toggleClass from './../../provider/class-toggler';
import {connect} from 'react-redux';
import {searchCommuneByName} from './../../reducer/action.creator';
import './commune-finder.style.css';
import {hideLoading, showLoading} from './../../provider/show.loading';

class CommuneFinder extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         communeName: '',
      };
      this.alertResultElement = createRef();
   }

   componentDidUpdate(previousProps, previousState, snapshot) {
      if (previousState.communeName === this.state.communeName) {
         if (this.props.foundCommunes.length > 0) {
            toggleClass(this.alertResultElement.current, 'd-none', 'remove');
            toggleClass(this.alertResultElement.current, 'd-flex', 'add');
            toggleClass(this.alertResultElement.current, 'alert-success', 'add');
            toggleClass(this.alertResultElement.current, 'alert-danger', 'remove');
         } else {
            toggleClass(this.alertResultElement.current, 'd-none', 'remove');
            toggleClass(this.alertResultElement.current, 'd-flex', 'add');
            toggleClass(this.alertResultElement.current, 'alert-success', 'remove');
            toggleClass(this.alertResultElement.current, 'alert-danger', 'add');
         }
      }

      if (this.props.isFetching === true) {
         showLoading();
      } else {
         hideLoading();
      }
   }
   
   render() {
      const allCommunesCard = this.props.foundCommunes.map((commune) => {
         return <CommuneCard key={commune.zipCode} province={commune.provinceNameKH} district={commune.districtNameKH} commune={commune.communeNameKH} zipCode={commune.zipCode} />
      });
      const alertResultMessage = this.props.foundCommunes.length > 0 ? `បានរកឃើញលទ្ធផលចំនួន ${this.props.foundCommunes.length}` : `មិនមានលទ្ទផល`;

      return (
         <div className="flex-grow-1 h-100 p-5 overflow-auto result-box">
            <form id="form-search-commune" className="" onSubmit={(evt) => this.findCommune(evt)}>
               <div className="form-group">
                  <div className="input-group">
                     <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                     <input id="email" type="text" className="form-control" name="email" placeholder="វាយបញ្ចូលសង្កាត់ ឬ ឃុំ" value={this.state.communeName} onChange={(evt) => this.setState({communeName: evt.target.value})} />
                     <span className="input-group-addon ml-3">
                        <button className="btn btn-light btn-outline-primary" type="submit">ស្វែងរក</button>
                     </span>
                  </div>
               </div>
            </form>
            <div className="d-flex flex-wrap">
               <div className="d-none alert w-100 alert-success pl-2 pr-2 pt-1 pb-1" ref={this.alertResultElement} style={resultAlertStyle} role="alert">{alertResultMessage}</div>
               {allCommunesCard}
            </div>
         </div>
      );
   }

   findCommune(evt) {
      evt.preventDefault();
      if (!this.state.communeName) {
         return;
      }
      let communeName = this.state.communeName;
      if (communeName === 'សង្កាត់' || communeName === 'ឃុំ') {
         return;
      }
      if (communeName.startsWith('សង្កាត់')) {
         communeName = communeName.substr('សង្កាត់'.length, communeName.length);
      } else if (communeName.startsWith('ឃុំ')) {
         communeName = communeName.substr('ឃុំ'.length, communeName.length);
      }
      this.props.searchCommunes(communeName);
   }

}

const resultAlertStyle = {
   fontSize: '0.9em'
};

function mapStateToProps(state) {
   return {
      foundCommunes: state.communes,
      isFetching: state.isFetching
   }
}

function mapDispatchToProps(dispatch) {
   return {
      searchCommunes: (text) => dispatch(searchCommuneByName(text))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommuneFinder);