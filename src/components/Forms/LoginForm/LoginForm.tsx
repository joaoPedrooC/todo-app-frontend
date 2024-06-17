import { Link } from "react-router-dom"
import { Input } from "../../Inputs/Input/Input"

import styles from './style.module.scss'

export const LoginForm = () => {
  return (
    <form className={styles.login__form}>
      <h1 className="title__primary">Login</h1>
      <div>
        <Input label="E-mail" type="email" />
        <Input label="Senha" type="password" />
        <button type="submit" className="title__secondary">Entrar</button>
      </div>
      <span className="font__small--inter">OU</span>
      <p className="font__regular">Não tem uma conta? <Link to={'/sign-up'} className="label">Cadastre-se</Link></p>
    </form>
  )
}