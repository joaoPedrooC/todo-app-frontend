export interface TodoInterface {
  id: string
  title: string
  description: string | null
  status: boolean
  createdAt: Date
  dueDate: Date
  finishedAt: Date | null
  ownerId: string
}