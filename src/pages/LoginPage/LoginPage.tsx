import { LoginForm } from '../../components/Forms/LoginForm/LoginForm';
import LuffyImg from '../../assets/luffy.png'

import styles from './style.module.scss';

export const LoginPage = () => {
	return (
		<main className={styles.main}>
			<div className='container'>
        <LoginForm />
        <img src={LuffyImg} alt="Luffy from One Piece Holding a To-do Notebook" />
      </div>
		</main>
	);
};
