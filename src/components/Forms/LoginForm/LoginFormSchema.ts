import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(4, 'Senha muito pequena')
})