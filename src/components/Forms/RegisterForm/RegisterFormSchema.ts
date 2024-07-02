import { z } from "zod";

export const RegisterFormSchema = z.object({
  name: z.string().max(200, 'Máximo de 200 caracteres atingido').min(3, 'Tamanho mínimo de 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(4, 'Senha muito pequena')
})