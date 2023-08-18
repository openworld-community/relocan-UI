import Marquee from "react-fast-marquee";
import {ALink} from "@/app/components/ui/link";
import styles from './styles.module.css'

export const Projects = () => (
    <Marquee autoFill={true} className={styles.wrapper}>
            <div className={styles.items}>
                    <ALink>Peredelano Marketing</ALink>
                    <ALink>Peredelano Startups</ALink>
                    <ALink>Peredelano Data</ALink>
                    <ALink>Peredelano DevOps Platform</ALink>
                    <ALink>Peredelano Afisha</ALink>
            </div>
    </Marquee>
)