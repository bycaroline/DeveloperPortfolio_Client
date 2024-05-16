import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import { useLocation } from 'react-router-dom'
import styles from '../css/styles.module.css'
import GarnGalore from '../assets/GarnGalore.jpg';
import ProjectCards from './ProjectCards';
import React, { useState, useEffect } from 'react';
import profilePhoto from '../assets/profilePhoto.png';
import { sendRequest } from './HttpHandler';
import Paragraph2 from './Paragraph2';


const LayoutStart = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:8080/projects`,
                    'GET',
                    null,
                );
                // Set the fetched projects in state
                setProjects(responseData);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);


    return (
        <>
            <div className={styles.wrapper}>
                <DashHeader />
                <div className={styles.wrapperTextIntro}>
                    <div className={styles.wrapperParagraph1}>
                        <div>
                            <img className={styles.imgHeader} src={profilePhoto} alt="" />
                        </div>
                        <div>
                            <h1>Hi,</h1><h1>I am a developer</h1>
                        </div>
                    </div>
                    <Paragraph2 />
                </div>

                <section className={styles.wrapperProjects}>
                    {projects.map((project, index) => (
                        index % 2 === 0 ? (
                            <div key={index} className={styles.projectRow}>
                                <ProjectCards project={projects[index]} />
                                {index + 1 < projects.length && <ProjectCards project={projects[index + 1]} />}
                            </div>
                        ) : null
                    ))}
                </section>
                <p>eklund.caroline@gmail.com</p>
            </div >
        </>
    )
}
export default LayoutStart