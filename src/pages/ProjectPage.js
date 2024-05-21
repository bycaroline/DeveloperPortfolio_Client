import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sendRequest } from '../services/HttpHandler';
import styles from '../css/styles.module.css';

const ProjectPage = () => {
    const boldStyle = { fontWeight: '700' };
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const backendUrl = 'http://localhost:8080';

    useEffect(() => {
        const fetchProjectById = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:8080/projects/${projectId}`,
                    'GET'
                );
                setProject(responseData);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };

        fetchProjectById();
    }, [projectId]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.ProjectPageTopSection}>
                <div className={styles.ProjectPageWrapperTopSection}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <h4>technologies</h4>
                    <ul className={styles.listWithDots}>
                        {project.technologies.map((technology, index) => (
                            <li key={index}>{technology}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.ProjectPageWrapperTopSectionImg}>
                    <img src={`${backendUrl}${project.image}`} alt={`Image ${project.name}`} />
                </div>
            </div>
            <div className={styles.ProjectPageWrapperBottomSection}>
                <h4>features</h4>
                <ul className={styles.ulFunctionalitiesAndProcess}>
                    {project.functionalities.map((functionality, index) => {
                        const [boldText, regularText] = functionality.split(': ');
                        return (
                            <li key={index}>
                                <span style={boldStyle}>{boldText}:</span> {regularText}
                            </li>
                        );
                    })}
                </ul>
                {project.process && project.process.length > 0 && (
                    <div>
                        <h4>process</h4>
                        <ul className={styles.ulFunctionalitiesAndProcess}>
                            {project.process.map((process, index) => {
                                const [boldText, regularText] = process.split(': ');
                                return (
                                    <li key={index}>
                                        <span style={boldStyle}>{boldText}:</span> {regularText}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
                {project.demo && project.process.length > 0 && (
                    <div><h4>demo</h4>
                        <p>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">{project.demo}</a>
                        </p>
                    </div>)}

                <h4>code</h4>
                <p><a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a></p>

            </div>
            <div className={styles.footer}>
                <p>eklund.caroline@gmail.com</p>
            </div>

        </div>
    );
};

export default ProjectPage;