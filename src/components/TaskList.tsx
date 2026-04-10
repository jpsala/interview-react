import { useMemo } from "react"
import type { Task } from "../App"
import { NewTask } from "./NewTask"
type TaskListProps = {
    tasks: Task[],
    addTask: (task: string) => void,
    toggleDone: (task: Task) => void
}
export const TaskList = ({ tasks, addTask, toggleDone }: TaskListProps) => {
    const notDone = tasks.filter(t => (!t.done))
    const done = tasks.filter(t => (t.done))
    return (
        <>
            <NewTask addTask={addTask} />
            <div>Pending</div>
            <ul>{notDone.map(task => (
                <li key={task.id}>
                    <span>{task.title} {task.done ? 'done':''}</span>
                    <input type='checkbox' checked={task.done}
                        onChange={() => toggleDone(task)} />
                </li>
            ))}</ul>
            <div>Done</div>
                        <ul>{done.map(task => (
                <li key={task.id}>
                    <span>{task.title} {task.done ? 'done':''}</span>
                    <input type='checkbox' checked={task.done}
                        onChange={() => toggleDone(task)} />
                </li>
            ))}</ul>
        </>
    )
}