import { IoClose } from "react-icons/io5"
import Button from "../display/Button"
import { useContext, useState } from "react"
import { GeneralContext } from "../../context";
import { v4 as uuidv4 } from 'uuid';
import toast from "react-hot-toast";
const AddTask = ({ setShowAddTask, listId }: { setShowAddTask: any, listId: string }) => {
    const { addTask } = useContext(GeneralContext);
    const [taskTitle, setTaskTitle] = useState('');
    const handleAddTask = () => {
        if (taskTitle.trim() === '') {
            toast.error('Required')
            return
        }
        addTask && addTask(listId, { id: uuidv4(), title: taskTitle });
        setTaskTitle('')
    }
    return (
        <div className="shadow p-3 rounded-md bg-gray-300">
            <form onSubmit={(e) => e.preventDefault()}>
                <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} className="h-9 w-full mb-3 p-3 bg-slate-100 rounded-md" type="text" placeholder="Enter a title " />
                <div className="flex justify-between items-center">
                    <Button onClick={handleAddTask} size='small' type="submit" label="Add card" bgColor="bg-red-500" />
                    <button className="cursor-pointer" onClick={() => setShowAddTask(false)}><IoClose color="black" /></button>
                </div>
            </form>
        </div>
    )
}

export default AddTask