import { Todo } from '@/types/todo'
import ky from 'ky'

const BASE_URL = 'http://localhost:8000'

export const api = ky.create({
  prefixUrl: BASE_URL,
  timeout: 10000,
})

export const getTodos = async () =>
  await api.get<Todo[]>('todos?_limit=08&_sort=id&_order=desc').json()

export const getTodo = async (id: number) =>
  (await api.get(`todos/${id}`).json()) as Todo

export const createTodo = async (todo: Todo) =>
  await api.post<Todo>('todos', { json: todo }).json()

export const updateTodo = async (todo: Todo) =>
  await api.put<Todo>(`todos/${todo.id}`, { json: todo }).json()

export const deleteTodo = async (id: number) =>
  await api.delete(`todos/${id}`).json()
