import { Todo } from '@/types/todo'
import ky from 'ky'

const BASE_URL = 'http://localhost:8000'

export const api = ky.create({
  prefixUrl: BASE_URL,
  timeout: 10000,
})

export const getTodos = async () => await api.get<Todo[]>('todos').json()
