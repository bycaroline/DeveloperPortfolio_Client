import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sendRequest } from './HttpHandler'; // Assuming you have a function to send HTTP requests

const ProjectPage = () => {
    const { projectId } = useParams(); // Get projectId from URL params

    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProjectById = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:8080/projects/${projectId}`, // Corrected URL
                    'GET'
                );
                setProject(responseData);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };

        fetchProjectById();
    }, [projectId]); // Fetch project whenever projectId changes

    if (!project) {
        return <div>Loading...</div>; // Add loading indicator while fetching project data
    }

    return (
        <div>
            <h2>This is a project page</h2>
            <h1>{project.name}</h1>
            {/* Display other project details */}
            <p>Description: {project.description}</p>
            <p>Functtionality</p>
            <ul>
                {project.functionalities.map((functionality, index) => (
                    <li key={index}>{functionality}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectPage;