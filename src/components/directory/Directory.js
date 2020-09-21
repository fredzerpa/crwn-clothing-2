import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selectors';
import './Directory.scss'


const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(section => (
                <MenuItem
                    key={section.id}
                    section={section}
                />
            ))
        }
    </div>
)

const mapstateToProps = createStructuredSelector({
    sections: selectSections
})

export default connect(mapstateToProps)(Directory);
