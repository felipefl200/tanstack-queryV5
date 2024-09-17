import { Button } from './ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from './ui/sheet'

const checkIcon = (
  <svg
    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
  </svg>
)
export function MakeWith({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      <Sheet>
        <SheetTrigger asChild>
          <Button>Informações</Button>
        </SheetTrigger>
        <SheetContent className="bg-slate-700 w-full h-screen flex flex-col justify-center items-center">
          <SheetHeader>
            <SheetDescription className="">
              <div className="w-full gap-2 flex flex-col justify-center items-center">
                <h1 className="text-slate-700 text-xl">
                  Vite + React and Tanstack Query
                </h1>
                <h2 className="text-3xl text-slate-300">Tecnologias usadas:</h2>

                <ul className=" text-slate-300 text-lg">
                  <li className="flex items-center">
                    {checkIcon}
                    TypeScript
                  </li>
                  <li className="flex items-center">
                    {checkIcon}
                    Vite
                  </li>
                  <li className="flex items-center">
                    {checkIcon}
                    TailwindCSS
                  </li>
                  <li className="flex items-center">
                    {checkIcon}
                    ESLint
                  </li>
                  <li className="flex items-center">
                    {checkIcon}
                    Prettier
                  </li>
                  <li className="flex items-center">
                    {checkIcon}
                    Ky
                  </li>
                  <li className="flex items-center">
                    {checkIcon}
                    React Query
                  </li>
                </ul>
              </div>
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose asChild>
              <Button className="text-slate-300" variant="ghost">
                Fechar
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
