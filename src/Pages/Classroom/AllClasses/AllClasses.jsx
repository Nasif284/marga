import React from 'react'
import './allClasses.css'
import { Header, Sidebar } from '../../../Components'
import Menu from '../Menu'
import { card_img } from '../../../Assets'
import Tags from '../Tags'
const AllClasses = () => {
    return (
        <div>
            <Sidebar />
            <Header heading='My Classroom' />
            <div className="classroom-container">
                <Menu />
                <div className="all-classes-table">
                    <table className="fl-table">
                        <thead>
                            <tr>
                                <th>Classroom name</th>
                                <th>Description</th>
                                <th>Tags</th>
                                <th>Total Attendies</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='img-td'><div style={{ backgroundImage: `url(${card_img})` }} className="thump"></div>Basics of hardware installations</td>
                                <td className='td-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</td>
                                <td><Tags /></td>
                                <td >
                                    <p>150</p>
                                </td>
                            </tr>

                            <tr>
                                <td className='img-td'><div style={{ backgroundImage: `url(${card_img})` }} className="thump"></div>Basics of hardware installations</td>
                                <td className='td-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</td>
                                <td><Tags /></td>
                                <td >
                                    <p>150</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllClasses
