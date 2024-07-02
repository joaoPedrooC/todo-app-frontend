import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../Inputs/Input/Input";
import { useForm } from "react-hook-form";
import { UserRegisterInterface } from "../../../interfaces/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema } from "./RegisterFormSchema";
import { useState } from "react";
import { Loader } from "../../Loader/Loader";
import { api } from "../../../services/api";
import { useSwal } from "../../../utils/useSwal";

import styles from './style.module.scss'

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserRegisterInterface>({
    resolver: zodResolver(RegisterFormSchema)
  })

	const [loading, setLoading] = useState<boolean>(false)
	const navigate = useNavigate()

  const submitForm = async (payload: UserRegisterInterface) => {
		try {
			setLoading(true)
			await api.post('/users', payload).finally(() => {setLoading(false)})
			useSwal('Seu usuário foi cadastrado com sucesso', 'Você será redirecionado para que possa efetuar o login!', 'info', 3000)
			navigate('/sign-in')
		} catch (error: any) {
			console.log(error);
			
			if(error.response.status === 409) {
				return useSwal('Ops, parece que este e-mail já existe', `Tente usar um e-mail diferente ou fazer login`, 'error')
			}

			return useSwal('Estamos com um problema interno!', 'Por favor, tente novamente em alguns minutos.', 'error')
		}
	}
	
  return (
		<>
			<form className={styles.register__form} onSubmit={handleSubmit(submitForm)}>
				<h1 className='title__primary'>Cadastre-se</h1>
				<div>
					<Input {...register('name')} errors={errors.name?.message} label='Nome' type='text' />
					<Input {...register('email')} errors={errors.email?.message} label='E-mail' type='email' />
					<Input {...register('password')} errors={errors.password?.message} label='Senha' type='password' />
					<button type='submit' className='title__secondary'>Entrar</button>
				</div>
				<span className='font__small--inter'>OU</span>
				<p className='font__regular'>Já tem uma conta? <Link to={'/sign-in'} className='label'>Entrar</Link>
				</p>
			</form>
			{ loading ? <Loader /> : null }
		</>
	);
};
