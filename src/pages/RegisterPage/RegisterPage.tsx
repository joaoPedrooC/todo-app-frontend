import aceImage from '../../assets/ace.png'
import { RegisterForm } from '../../components/Forms/RegisterForm/RegisterForm'

import styles from './styles.module.scss'

export const RegisterPage = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <img src={aceImage} alt="Ace from one piece" />
        <RegisterForm />
      </div>
    </main>
  )
}