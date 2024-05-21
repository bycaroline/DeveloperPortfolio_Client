import React from 'react';
import ProjectCards from './ProjectCards';
import styles from '../css/styles.module.css';
import cs from '../assets/cs.png';
import gi from '../assets/gi.png';
import html from '../assets/html.png';
import nod from '../assets/nod.png';
import jav from '../assets/jav.png';
import mong from '../assets/mong.png';


const Skills = ({ projects }) => {


    return (
        <section className={styles.wrapperSkills}>
            <h3>my skills</h3>
            <div>
                <img src={cs} alt="" />
                <p>CSS</p>
                <img src={gi} alt="" />
                <p>Github</p>
                <img src={html} alt="" />
                <p>HTML</p>
                <img src={jav} alt="" />
                <p>Javascript</p>
                <img src={nod} alt="" />
                <p>Node</p>
                <img src={mong} alt="" />
                <p>Mongo DB</p>

            </div>
        </section>
    );
};

export default Skills;
