import React from 'react'
import { useContext, useState } from 'react'
import styles from '../css/styles.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const DashHeader = () => {

    return (
        <div className={styles.headerDash}>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/recipes/new'>Projects</Link></p>
            <p><Link to='/users/all'>Skills</Link></p>
            <p><Link to='/users/all'>About</Link></p>
        </div >

    )
}

export default DashHeader