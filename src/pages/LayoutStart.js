import React, { useState, useEffect } from 'react';
import DashHeader from '../components/DashHeader';
import styles from '../css/styles.module.css';
import profilePhoto from '../assets/profilePhoto.png';
import Paragraph2 from '../components/Paragraph2';
import ProjectsSection from '../components/ProjectSection'; // Adjust the import to your actual path
import { sendRequest } from '../services/HttpHandler';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

//The startpage
const LayoutStart = () => {
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);

    //Fetching projects
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

    //Fetching skills
    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:8080/skills`,
                    'GET',
                    null,
                );
                setSkills(responseData);
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        };
        fetchSkills();
    }, []);

    return (
        <div className={styles.wrapper}>
            <DashHeader />
            <div className={styles.wrapperTextIntro}>
                <div className={styles.wrapperParagraph1}>
                    <div>
                        <img className={styles.imgHeader} src={profilePhoto} alt="" />
                    </div>
                    <div>
                        <h1>I´m Caroline,</h1><h1>and this is my developer portfolio</h1>
                    </div>
                </div>
                <Paragraph2 />
            </div>

            <ProjectsSection projects={projects} />
            <Skills skills={skills} />

            <Footer />


        </div>
    );
};

export default LayoutStart;
