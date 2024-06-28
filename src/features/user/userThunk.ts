import { AppThunk } from "../../app/store";
import { UserLoginInterface } from "../../interfaces/user";
import { api } from "../../services/api";
import { login } from './userSlice'
import { useSwal } from "../../utils/useSwal";

export const loginThunk = (payload: UserLoginInterface): AppThunk => async dispatch => {
  try {
    await api.post('/session', payload).then(response => {
      localStorage.setItem('@todos:token', response.data.token)
      dispatch(login(response.data.data))
    })
  } catch (error: any) {
    if(error.response.status === 401) {
      return useSwal('Oops, e-mail ou senha invalidos!', 'Verifique se você digitou seu e-mail e senha corretamente, ou tente criar uma conta', 'error')
    }
    
    return useSwal('Estamos com um problema interno!', 'Por favor, tente novamente em alguns minutos.', 'error')
  }
}