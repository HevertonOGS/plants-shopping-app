import { SliderHome }  from '../components/Home/SliderHome'
import { ButtonLarge } from '../components/Global/ButtonLarge'
import { ButtonSlim }  from '../components/Global/ButtonSlim'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className="container">
        <div className="col12">
          <SliderHome />
        </div>

        <div className="col12">
          <div className={styles.contentText}>
            <h1>Encontrar o Natural</h1>

            <h2>Um destino moderno para os modernos amantes de plantas.</h2>
          </div>
        </div>
        
        <div className="col12">
          <div className={styles.contentButton}>
            <div className={styles.wrapperButton}>
              <ButtonLarge classes='btnWhite'>Login</ButtonLarge>
            </div>
            <div className={styles.wrapperButton}>
              <ButtonLarge classes='btnBlack'>Registrar</ButtonLarge>
            </div>
          </div>
        </div>

        <div className="col12">
          <div className={styles.redirect}>
            <ButtonSlim>Continuar sem Cadastro</ButtonSlim>
          </div>
        </div>
      </div>
    </div>
  )
}
