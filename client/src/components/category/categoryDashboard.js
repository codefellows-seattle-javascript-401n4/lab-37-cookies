import React from 'react';
import {connect} from 'react-redux';
import CatForm from './catForm.js';
import CatList from './catList.js';
import AuthDashboard from '../auth/dashboard.js';
import * as actions from './categoryActions.js';

class Category extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <AuthDashboard>
          <CatForm handler={this.props.categoryCreate}/>
          <CatList cats={this.props.categories} update={this.props.categoryUpdate} delete={this.props.categoryDelete}/>
        </AuthDashboard>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryCreate: category => dispatch(actions.categoryCreate(category)),
  categoryUpdate: category => dispatch(actions.categoryUpdate(category)),
  categoryDelete: category => dispatch(actions.categoryDelete(category)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Category);
