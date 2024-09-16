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
function App() {
  return (
    <div className="bg-slate-950 w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-red-700 text-xl">Hello Vite + React!</h1>
      <h2 className="text-lg text-red-900">Tecnologias usadas:</h2>

      <ul className=" text-slate-500">
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
  )
}

export default App
