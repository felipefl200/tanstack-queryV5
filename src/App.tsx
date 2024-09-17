import { MakeWith } from './components/make-with'
import { useEffect, useState } from 'react'
import ky from 'ky'
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

function App() {
  const [data, setData] = useState<Todo[]>([])
  useEffect(() => {
    ky.get('http://localhost:8000/todos')
      .json()
      .then((res) => {
        setData(res as Todo[])
      })
  }, [])
  return (
    <div className="bg-slate-950 w-full h-screen flex flex-col justify-center items-center">
      <MakeWith className="fixed top-2 right-2" />
      <div>
        <Table className="text-slate-300 max-w-lg overflow-y-scroll">
          <TableCaption>Lista recente de tarefas</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Concluido</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell className="font-medium">{todo.title}</TableCell>
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
                {data.filter((todo) => todo.checked).length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}

export default App
