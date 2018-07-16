import React from 'react';

import {connect} from 'react-redux';

import CostumeItem from './Costume-Item';

class CostumeList extends React.Component {

  render() {

    const costumes = this.props.costumes;
    console.log('costumes is ', costumes)
    return (
      <div id="kanban">
        {
            costumes.map(costume =>
            <CostumeItem handleDelete={this.props.handleDelete}
              handleUpdate={this.props.handleUpdate}
              key={costume.id} costume={costume} 
            />)
        }
      </div>
    )
  }
}

export default CostumeList;