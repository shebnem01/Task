import { memo, useCallback, useContext, useState } from "react"
import { IoClose } from "react-icons/io5"
import { GeneralContext } from "../../context"
import { ListTaskProps } from "../../types";
import { CiEdit } from "react-icons/ci";
import EditTask from "../EditTask";

const ListTask = memo(({ title, id, listId }: ListTaskProps) => {
    const [showEdit, setShowEdit] = useState(false);
    const { removeTask, } = useContext(GeneralContext);

    const handleRemoveTask = useCallback(() => {
        if (removeTask) {
            removeTask(listId, id);
        }
    }, [removeTask, listId, id]);
    return (
        <>
            <li className="bg-lime-100 rounded-md p-3 mb-3 flex justify-between items-center">
                {showEdit ? (
                    <EditTask setShowEdit={setShowEdit} listId={listId} id={id} title={title} />
                ) : (
                    <div className="flex justify-between w-full">
                        <span>  {title}</span>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setShowEdit(true)}><CiEdit color="blue" />
                            </button>
                            <button onClick={handleRemoveTask} className="cursor-pointer"><IoClose color="red" />
                            </button>

                        </div></div>
                )}



            </li>

        </>

    )
}

)
export default ListTask