import { useState } from "react"
import { TaskList } from "./components/TaskList"
export type Task = {
  id: number,
  title: string,
  done: boolean
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'uno', done: false }
  ])
  const addTask = (task: string) => {
    setTasks((tasks) => [...tasks, { id: Math.random() * 1000, title: task, done: false }])
  }
  const toggleDone = (task: Task) => {
    // const task = tasks.find(task => (task.id === taskId))
    setTasks((tasks)=>{
      return tasks.map((t)=>{
        return t.id===task.id ? {...task, done: !task.done} : t
      })
    })
  }
  return (
    <>
      <TaskList tasks={tasks} addTask={addTask} toggleDone={toggleDone}/>
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </>
  )
}

export default App
