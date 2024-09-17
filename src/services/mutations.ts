import { useMutation } from '@tanstack/react-query'
import { createTodo } from './api'
import { Todo } from '@/types/todo'

export function useCreateTodo() {
  return useMutation({
    mutationFn: (todo: Todo) => createTodo(todo),
    onMutate: () => {
      console.log('onMutate')
    },
    onSuccess: () => {
      console.log('onSuccess')
    },
    onError: () => {
      console.log('onError')
    },
  })
}
