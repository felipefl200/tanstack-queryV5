import { MakeWith } from './components/make-with'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './components/ui/form'
import { Checkbox } from './components/ui/checkbox'
import { useGetTodos } from '@/services/queries'
import { useForm } from 'react-hook-form'
import { useCreateTodo } from './services/mutations'
import { Todo } from './types/todo'

function App() {
  const { data, isLoading } = useGetTodos()
  const createTodo = useCreateTodo()

  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      checked: false,
    },
  })

  const onSubmit = (data: Pick<Todo, 'title' | 'description' | 'checked'>) => {
    createTodo.mutate(data)
    form.reset()
  }

  return (
    <div className="bg-slate-950 w-full h-screen flex flex-col justify-center items-center">
      <MakeWith className="fixed top-2 right-2" />
      <div className="mt-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full p-4 mx-auto space-y-6 border shadow-md shadow-slate-900 border-slate-700 rounded-md"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-400">
                    Nome da tarefa
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="text-slate-400" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-400">
                    Descrição da tarefa
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="text-slate-400" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="checked"
              render={({ field }) => (
                <FormItem className="flex items-end gap-2">
                  <FormControl>
                    <Checkbox
                      className="bg-slate-600 ring-slate-300 ring-1"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-slate-400">Concluído</FormLabel>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={createTodo.isPending}>
              {createTodo.isPending ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
          </form>
        </Form>

        <Table className="text-slate-300 max-w-lg w-[450px]">
          <TableCaption>
            {isLoading ? 'Carregando...' : 'Lista recente de tarefas'}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Concluido</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="">
            {data &&
              data.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell className="font-medium">{todo.id}</TableCell>
                  <TableCell>{todo.title}</TableCell>
                  <TableCell>{todo.description}</TableCell>
                  <TableCell>{todo.checked ? 'Sim' : 'Não'}</TableCell>
                </TableRow>
              ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total concluídos:</TableCell>
              <TableCell className="text-right">
                {data && data.filter((todo) => todo.checked).length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}

export default App
