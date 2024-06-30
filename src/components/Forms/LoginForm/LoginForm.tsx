import { Link } from "react-router-dom"
import { Input } from "../../Inputs/Input/Input"
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormSchema } from "./LoginFormSchema"
import { useAppDispatch } from "../../../app/hooks"
import { loginThunk } from "../../../features/user/userThunk"
import { UserLoginInterface } from "../../../interfaces/user"

import styles from './style.module.scss'
import { useState } from "react"
import { Loader } from "../../Loader/Loader"

export const LoginForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<UserLoginInterface>({
    resolver: zodResolver(LoginFormSchema)
  })

  const [Loading, setLoading] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const submitForm = (data: UserLoginInterface) => {
    dispatch(loginThunk(data, setLoading))
  }

  return (
    <>
      <form className={styles.login__form} onSubmit={handleSubmit(submitForm)}>
        <h1 className="title__primary">Login</h1>
        <div>
          <Input {...register('email')} errors={errors.email?.message} label="E-mail" type="email" />
          <Input {...register('password')} errors={errors.password?.message} label="Senha" type="password" />
          <button type="submit" className="title__secondary">Entrar</button>
        </div>
        <span className="font__small--inter">OU</span>
        <p className="font__regular">Não tem uma conta? <Link to={'/sign-up'} className="label">Cadastre-se</Link></p>
      </form>
      {Loading ? <Loader /> : null}
    </>
  )
}