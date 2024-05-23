import React from 'react'
import styles from '../css/styles.module.css'

//About me section
//Text is retreived from the backend
function Paragraph2() {
    return (
        <div className={styles.wrapperParagraph2}>
            <div>
                {/* get text from backend */}
                <p>I am currently enrolled in a two-year Java program at Campus Mölndal in Gothenburg. I am entering my second year this fall. My portfolio showcases some of the projects I have worked on during my Java studies, as well as projects from my previous studies in frontend development.</p>
            </div>
            <div>
                <p>One of the projects is a webshop that I developed collaboratively with other students in my program. During this project, we implemented the Scrum methodology and utilized version control with Git. Another project featured in my portfolio is this website itself, which consists of a Java server in the backend and a React client in the frontend. </p>
            </div>
        </div>
    )
}

export default Paragraph2