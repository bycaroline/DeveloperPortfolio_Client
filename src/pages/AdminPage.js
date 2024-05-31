

import React, { useState, useEffect } from 'react';
import DashHeader from '../components/DashHeader';
import styles from '../css/styles.module.css';
import profilePhoto from '../assets/profilePhoto.png';
import Paragraph2 from '../components/Paragraph2';
import ProjectsSection from '../components/ProjectSection'; // Adjust the import to your actual path
import { sendRequest } from '../services/HttpHandler';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import axios from 'axios';

function AdminPage() {
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [about, setAbout] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [titlePart1, setTitlePart1] = useState('');

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const response = await axios.get('http://localhost:8080/about');
                setAbout(response.data);
                setTitlePart1(response.data.length > 0 ? response.data[0].titlePart1 : '');
            } catch (error) {
                console.error('Error fetching about:', error);
            }
        };
        fetchAbout();
    }, []);


    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:8080/projects`,
                    'GET',
                    null,
                );
                setProjects(responseData);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

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

    //Updating the titlePart1
    const handleChange = (e) => {
        setTitlePart1(e.target.value);
    };

    const handleUpdate = async () => {
        try {
            const updates = { titlePart1 };
            await axios.patch('http://localhost:8080/about/titlePart1', updates, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (about.length > 0) {
                setAbout([{ ...about[0], titlePart1 }]);
            }
            console.log('Title updated successfully');
        } catch (error) {
            console.error('Error updating title:', error);
        }
    };

    return (
        <div className={styles.wrapper}>
            <DashHeader />
            <div className={styles.wrapperTextIntro}>
                <div className={styles.wrapperParagraph1}>
                    <div>
                        <img className={styles.imgHeader} src={profilePhoto} alt="Profile" />
                    </div>
                    <div>
                        <h1>{titlePart1}</h1>
                        <input
                            type="text"
                            value={titlePart1}
                            onChange={handleChange}
                        />
                        <button onClick={handleUpdate}>Update Title</button>
                    </div>
                </div>
                <Paragraph2 />
            </div>
            <ProjectsSection projects={projects} />
            <Skills skills={skills} />
            <Footer />
        </div>
    );
}

export default AdminPage;



// const AdminPage = () => {
//     const [about, setAbout] = useState([]);
//     const [titlePart1, setTitlePart1] = useState('');

//     useEffect(() => {
//         const fetchAbout = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/about');
//                 setAbout(response.data);
//                 setTitlePart1(response.data.length > 0 ? response.data[0].titlePart1 : '');
//             } catch (error) {
//                 console.error('Error fetching about:', error);
//             }
//         };
//         fetchAbout();
//     }, []);

//     const handleChange = (e) => {
//         setTitlePart1(e.target.value);
//     };

//     const handleUpdate = async () => {
//         try {
//             const updates = { titlePart1 };
//             await axios.patch('http://localhost:8080/about/titlePart1', updates, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             // Update the local state to reflect the change
//             if (about.length > 0) {
//                 setAbout([{ ...about[0], titlePart1 }]);
//             }
//             console.log('Title updated successfully');
//         } catch (error) {
//             console.error('Error updating title:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>{titlePart1}</h1>
//             <input
//                 type="text"
//                 value={titlePart1}
//                 onChange={handleChange}
//             />
//             <button onClick={handleUpdate}>Update Title</button>
//         </div>
//     );
// };
// export default AdminPage;