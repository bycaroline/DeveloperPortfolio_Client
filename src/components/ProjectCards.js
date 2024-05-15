import React from 'react'
import styles from '../css/styles.module.css'
import GarnGalore from '../assets/GarnGalore.jpg';

function ProjectCard() {
    return (
        <div className={styles.projectCard}>
            <img src={GarnGalore} />
            <div className={styles.textProjectCard}>
                <p>Java team project to create a webshop using... </p>
                <a href="">Read more</a>
            </div>
        </div>
    )
}

export default ProjectCard