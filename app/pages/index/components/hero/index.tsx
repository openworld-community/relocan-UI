import { Map } from '@/app/icons'
import {ButtonWithLabel} from "@/app/components/ui/button-with-label";
import {ALink} from "@/app/components/ui/link";
import {Title} from "@/app/components/ui/title";
import {StyledWrapper} from "@/app/pages/index/components/hero/styles";
export const Hero = () => {
    return (
        <StyledWrapper>
            <div className="container">
                <div className="content">
                    <div className="text" >
                        <Title {...{as: 'h1'}}>Привет, мир!<br /><br />
                            Мы создаём сервис для релокации и эмиграции
                        </Title>
                        <p className="subtitle">
                            Готовы начать с Re:locan?
                            Присоединяйтесь к нам прямо сейчас
                            и откройте новые горизонты!
                        </p>
                        <ALink>Подробнее</ALink>
                    </div>
                    <div className="buttons">
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
                <Map className="map" />
            </div>
        </StyledWrapper>
    )
}