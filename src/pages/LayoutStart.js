// import DashHeader from '../components/DashHeader'
// import { useLocation } from 'react-router-dom'
// import styles from '../css/styles.module.css'
// import GarnGalore from '../assets/GarnGalore.jpg';
// import ProjectCards from '../components/ProjectCards';
// import React, { useState, useEffect } from 'react';
// import profilePhoto from '../assets/profilePhoto.png';
// import { sendRequest } from '../services/HttpHandler';
// import Paragraph2 from '../components/Paragraph2';
// import ProjectsSection from '../components/ProjectSection';


// const LayoutStart = () => {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const responseData = await sendRequest(
//                     `http://localhost:8080/projects`,
//                     'GET',
//                     null,
//                 );
//                 // Set the fetched projects in state
//                 setProjects(responseData);
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//             }
//         };
//         fetchProjects();
//     }, []);


//     return (
//         <>
//             <div className={styles.wrapper}>
//                 <DashHeader />
//                 <div className={styles.wrapperTextIntro}>
//                     <div className={styles.wrapperParagraph1}>
//                         <div>
//                             <img className={styles.imgHeader} src={profilePhoto} alt="" />
//                         </div>
//                         <div>
//                             <h1>Hi,</h1><h1>I am a developer</h1>
//                         </div>
//                     </div>
//                     <Paragraph2 />
//                 </div>

//                 {/* <section className={styles.wrapperProjects}>
//                     {projects.map((project, index) => (
//                         index % 2 === 0 ? (
//                             <div key={index} className={styles.projectRow}>
//                                 <ProjectCards project={projects[index]} />
//                                 {index + 1 < projects.length && <ProjectCards project={projects[index + 1]} />}
//                             </div>
//                         ) : null
//                     ))}
//                 </section> */}
//                 {/* <section className={styles.wrapperProjects}>
//                     {projects.filter((_, index) => index % 3 === 0).map((project, index) => (
//                         <div key={index} className={styles.projectRow}>
//                             <ProjectCards project={projects[index * 2]} />
//                             {index * 2 + 1 < projects.length && <ProjectCards project={projects[index * 2 + 1]} />}
//                         </div>
//                     ))}
//                 </section> */}
//                 {/* <section className={styles.wrapperProjects}>
//                     {projects.map((project, index) => (
//                         (index % 3 === 0) && (
//                             <div key={index} className={styles.projectRow}>
//                                 <ProjectCards project={projects[index]} />
//                                 {(index + 1 < projects.length) && <ProjectCards project={projects[index + 1]} />}
//                                 {(index + 2 < projects.length) && <ProjectCards project={projects[index + 2]} />}
//                             </div>
//                         )
//                     ))}
//                 </section> */}
//                 <ProjectsSection projects={projects} />
//                 <p>eklund.caroline@gmail.com</p>
//             </div >
//         </>
//     )
// }
// export default LayoutStart

// LayoutStart.js

import React, { useState, useEffect } from 'react';
import DashHeader from '../components/DashHeader';
import { useLocation } from 'react-router-dom';
import styles from '../css/styles.module.css';
import profilePhoto from '../assets/profilePhoto.png';
import Paragraph2 from '../components/Paragraph2';
import ProjectsSection from '../components/ProjectSection'; // Adjust the import to your actual path
import { sendRequest } from '../services/HttpHandler';
import { SiGithub } from "react-icons/si";
import Skills from '../components/Skills';

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
            <Skills />
            <div className={styles.footer}>
                <p>eklund.caroline@gmail.com</p>
                <SiGithub />
            </div>

        </div>
    );
};

export default LayoutStart;
