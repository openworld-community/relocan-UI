import styles from './styles.module.css'

import { Map } from '@/app/icons'
import {ButtonWithLabel} from "@/app/components/ui/button-with-label";
import {ALink} from "@/app/components/ui/link";
export const Hero = () => {
    return (
        <section>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.text} >
                        <h1 className={`title ${styles.title}`}>Привет, мир!<br /><br />
                            Мы создаём сервис для релокации и эмиграции
                        </h1>
                        <p className={`subtitle ${styles.subtitle}`}>
                            Готовы начать с Re:locan?
                            Присоединяйтесь к нам прямо сейчас
                            и откройте новые горизонты!
                        </p>
                        <ALink>Подробнее</ALink>
                    </div>
                    <div className={styles.buttons}>
                        <ButtonWithLabel
                            label={'Поддержать проект'}
                            variant={"dark"}>
                            2$+
                        </ButtonWithLabel>
                        <ButtonWithLabel
                            label={'Ранняя подписка'}
                            variant={"light"}>
                            2$/мес.
                        </ButtonWithLabel>
                    </div>
                </div>
                <Map className={styles.map} />
            </div>
        </section>
    )
}