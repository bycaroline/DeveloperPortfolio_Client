import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import { useLocation } from 'react-router-dom'
import styles from '../css/styles.module.css'

const DashLayout = () => {

    const location = useLocation()

    return (
        <>
            <div className={styles.wrapper}>
                {/* header for all the protected routes */}
                <DashHeader />

                {/* {location.pathname !== '/' && <DashFooter />} */}
            </div>
        </>
    )
}
export default DashLayout