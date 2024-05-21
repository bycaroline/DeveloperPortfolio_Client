// import React from 'react';
// import styles from '../css/styles.module.css';
// import ProjectCards from './ProjectCards'; // Adjust the import to your actual ProjectCards component

// const projects = [
//     { nrInRow: 'a', name: "garn galore", description: "Java webshop project...", functionalities: [...], process: [...] },
//     { nrInRow: 'b', name: "another project", description: "Another project description...", functionalities: [...], process: [...] },
//     { nrInRow: 'c', name: "third project", description: "Third project description...", functionalities: [...], process: [...] },
//     // Add more projects here
// ];

// const ProjectsSection = () => {
//     // Sort projects by nrInRow
//     const sortedProjects = projects.sort((a, b) => a.nrInRow.localeCompare(b.nrInRow));

//     return (
//         <section className={styles.wrapperProjects}>
//             {sortedProjects.map((project, index) => (
//                 (index % 3 === 0) && (
//                     <div key={index} className={styles.projectRow}>
//                         <ProjectCards project={sortedProjects[index]} />
//                         {(index + 1 < sortedProjects.length) && <ProjectCards project={sortedProjects[index + 1]} />}
//                         {(index + 2 < sortedProjects.length) && <ProjectCards project={sortedProjects[index + 2]} />}
//                     </div>
//                 )
//             ))}
//         </section>
//     );
// };

// export default ProjectsSection;

// ProjectsSection.js

import React from 'react';
import ProjectCards from './ProjectCards'; // Adjust the import to your actual ProjectCards component
import styles from '../css/styles.module.css'; // Adjust the import to your actual styles file

const ProjectsSection = ({ projects }) => {
    // Sort projects by nrInRow
    const sortedProjects = projects.sort((a, b) => a.nrInRow.localeCompare(b.nrInRow));

    return (
        <section className={styles.wrapperProjects}>
            {sortedProjects.map((project, index) => (
                (index % 3 === 0) && (
                    <div key={index} className={styles.projectRow}>
                        <ProjectCards project={sortedProjects[index]} />
                        {(index + 1 < sortedProjects.length) && <ProjectCards project={sortedProjects[index + 1]} />}
                        {(index + 2 < sortedProjects.length) && <ProjectCards project={sortedProjects[index + 2]} />}
                    </div>
                )
            ))}
        </section>
    );
};

export default ProjectsSection;
