import React from 'react';
import ProjectCards from './ProjectCards';
import styles from '../css/styles.module.css';

//Sorting the projects and mapping over them
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
