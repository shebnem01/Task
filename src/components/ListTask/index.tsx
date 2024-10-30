import { useContext } from "react"
import { IoClose } from "react-icons/io5"
import { GeneralContext } from "../../context"

const ListTask = ({ title, id, listId }: any) => {
    const { removeTask } = useContext(GeneralContext);

    const handleRemoveTask = (listId: string, id: string) => {
        removeTask && removeTask(listId, id);
    };
    return (
        <li className="bg-lime-100 rounded-md p-3 mb-3 flex justify-between items-center">
            <span>{title}</span>
            <button onClick={() => handleRemoveTask(listId,id )} className="cursor-pointer"><IoClose color="red" /></button>

        </li>

    )
}

export default ListTask