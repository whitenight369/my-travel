import styles from  './MainLayout.module.css';
import { Footer,Header } from "../../components";

export const MainLayout:React.FC=({children})=>{
    return (
        <>
        <Header />
        <div className={styles['page-content']}>
            {children}
        </div>
        <Footer />
        </>
    )
}