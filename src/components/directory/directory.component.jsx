import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-items/menu-items.component';
import { connect } from "react-redux";

const Directory = ({sections}) =>  {
        return (
        <div className="directory-menu"> 
            {sections.map(({id, ...otherSectionOptions}) => {
              return <MenuItem key={id} {...otherSectionOptions}/>
            })}
        </div>
        )
}

const mapStateToProps = (state) => {
  return {sections: state.directory.sections}
}


export default connect(mapStateToProps)(Directory);