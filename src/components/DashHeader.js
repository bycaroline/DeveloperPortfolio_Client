import React from 'react'
import { useContext, useState } from 'react'
import styles from '../css/styles.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import profilePhoto from '../assets/profilePhoto.png';


const DashHeader = () => {

    return (
        <div className={styles.headerDash}>
            <a href="">Admin</a>
        </div >

    )
}

export default DashHeader