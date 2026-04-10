import type { Task } from "../App"
type AddTask = {
    addTask: (task: string) => void
}
export const NewTask = ({ addTask }: AddTask) => {
    const task: Task = { id: -1, title: '', done: false }
    const submitHandler: React.SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        const value = event.currentTarget[0].value
        addTask(value)
        console.dir(event.currentTarget[0].value)

    }
    return <>
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input name='title' />
            Submit <input type="submit" />
        </form>
    </>
}