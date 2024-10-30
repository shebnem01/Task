import { IoClose } from "react-icons/io5";
import Button from "../display/Button";
import { useContext, useState } from "react";
import { GeneralContext } from "../../context";
import AddTask from "../addTask";
import ListTask from "../ListTask";

type ListProps = {
  title: string
  id: string
  tasks?: any
}
const List = ({ title, id, tasks }: ListProps) => {
  const { removeList} = useContext(GeneralContext);
  const [showAddTask, setShowAddTask] = useState(false);


  return (
    <div className='bg-white shadow rounded-md w-[300px] p-4'>
      <div className="flex items-center justify-between mb-5">
        <h2 className="uppercase font-medium">{title}</h2>
        <button className="cursor-pointer"
          onClick={() => {
            if (removeList) {
              removeList(id);
            }
          }}>
          <IoClose color="red" />
        </button>

      </div>
      <ul>
        {tasks?.map((task: any) => (
          <ListTask listId={id} title={task.title} id={task.id} key={task.id} />
        ))}
      </ul>

      {showAddTask && <AddTask listId={id} setShowAddTask={setShowAddTask} />}
      {!showAddTask && (
        <Button label="Add Card" bgColor="bg-green-600 " onClick={() => setShowAddTask(true)} />
      )}
    </div>
  )
}

export default List