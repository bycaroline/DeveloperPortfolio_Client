import React from 'react'
import styles from '../css/styles.module.css'
import { Link } from 'react-router-dom';


// const ProjectCards = ({ project }) => {
//     // Assuming your backend server is running on localhost:8080
//     const backendUrl = 'http://localhost:8080';

//     const MAX_DESCRIPTION_LENGTH = 41;

//     // Truncate description text if it exceeds the maximum length
//     const truncatedDescription = project.description.length > MAX_DESCRIPTION_LENGTH
//         ? project.description.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
//         : project.description;

//     return (
//         <div className={styles.projectCard}>
//             {/* Prepend the backend URL to the image name */}
//             <h2>{project.name}</h2>
//             <Link to={`/projects/${project.id}`}>
//                 <img src={`${backendUrl}${project.image}`} alt={`Image ${project.name}`} />
//             </Link>
//             <div className={styles.textProjectCard}>
//                 <p>{truncatedDescription}</p>
//                 <Link to={`/projects/${project.id}`}>Read more</Link>
//             </div>
//         </div>
//     );
// };

// export default ProjectCards;




const ProjectCards = ({ project }) => {
    // Assuming your backend server is running on localhost:8080
    const backendUrl = 'http://localhost:8080';

    const MAX_DESCRIPTION_LENGTH = 45;

    // Truncate description text if it exceeds the maximum length
    const truncatedDescription = project.description.length > MAX_DESCRIPTION_LENGTH
        ? project.description.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
        : project.description;

    return (
        <div className={styles.projectCard}>
            {/* Prepend the backend URL to the image name */}
            <h2>{project.name}</h2>
            <Link to={`/projects/${project.id}`}>
                <img src={`${backendUrl}${project.image}`} alt={`Image ${project.name}`} />
            </Link>
            <div className={styles.textProjectCard}>
                <p>{truncatedDescription}</p>
                <Link to={`/projects/${project.id}`}>Read more</Link>
            </div>
        </div>
    );
};

export default ProjectCards;