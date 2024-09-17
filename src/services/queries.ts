import { useQuery } from '@tanstack/react-query'
import { getTodos } from './api'

export function useGetTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    refetchOnWindowFocus: false,
  })
}
