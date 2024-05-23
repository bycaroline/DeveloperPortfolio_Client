import React from 'react';
import styles from '../css/styles.module.css';

//My skills
const Skills = ({ skills }) => {
    const backendUrl = 'http://localhost:8080';

    return (
        <section className={styles.wrapperSkills}>
            <div>
                <h3>my skills</h3>
            </div>
            <div className={styles.skillsContainer}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                        <img src={`${backendUrl}/${skill.image}`} alt={`${skill.name} icon`} className={styles.skillImage} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Skills;




