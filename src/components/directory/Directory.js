import React, { Component } from 'react';
import MenuItem from '../menu-item/MenuItem';
import { sections } from './sections';
import './Directory.scss'

class Directory extends Component {

    constructor() {
        super()
        this.state = {
            sections
        }
    }

    render() {

        const { sections } = this.state;

        return (
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
    }
}

export default Directory;
