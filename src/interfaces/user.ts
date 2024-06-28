import { DraftType } from "./drafts"
import { TodoInterface } from "./todo"

export interface UserInterface {
  id: string
  name: string
  email: string
  todos: Array<TodoInterface>
  drafts: Array<DraftType>
}

export interface UserLoginInterface {
  email: string
  password: string
}