import styles from './styles.module.css'
import { IconLogo } from "@/app/icons";
import {Button} from "@/app/components/ui/button";
export const Header = () => (
    <header className={styles.wrapper}>
        <div className={`container ${styles.container}`}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <IconLogo className={styles.logoIcon}/>
                    <span>Peredelano re: locan</span>
                </div>
                <Button variant={"outlined"}>Вход</Button>
            </div>
            <div className={styles.bottom}>
                <div className={styles.quantity}>
                    c нами уже <span>248</span> человек
                </div>
            </div>
        </div>
    </header>
)