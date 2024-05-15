import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import { useLocation } from 'react-router-dom'
import styles from '../css/styles.module.css'
import GarnGalore from '../assets/GarnGalore.jpg';
import ProjectCards from './ProjectCards';

const LayoutStart = () => {

    return (
        <>
            <div className={styles.wrapper}>
                <DashHeader />

                <div className={styles.wrapperTextIntro}>
                    <div className={styles.hello}>
                        <h1>Hi there!</h1>
                    </div>
                    <div className={styles.shortAbout}>
                        <div>
                            {/* get text from backend */}
                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries, but also</p>
                        </div>
                        <div>
                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also</p>
                        </div>
                    </div>

                </div>
                <main className={styles.publicRecipeItem}>
                    <div className={styles.row}>
                        {/* loop over 4 projects here */}
                        <ProjectCards />
                        <ProjectCards />
                    </div>
                    <div className={styles.row}>
                        <ProjectCards />
                        <ProjectCards />
                    </div>
                </main >
                <p>eklund.caroline@gmail.com</p>
            </div >
        </>
    )
}
export default LayoutStart