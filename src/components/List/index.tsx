import { IoClose } from "react-icons/io5";
import Button from "../display/Button";
import { memo, useCallback, useContext, useState } from "react";
import { GeneralContext } from "../../context";
import AddTask from "../addTask";
import ListTask from "../ListTask";
import { ListProps } from "../../types";

type ListType = {
  list: ListProps;
};
const List = memo(({ list }: ListType) => {
  const { removeList } = useContext(GeneralContext);
  const [showAddTask, setShowAddTask] = useState(false);


  const handleRemoveList = useCallback(() => {
    removeList && removeList(list.id);
  }, [removeList, list.id]);
  
  return (
    <div className='bg-white shadow rounded-md w-[300px] p-4'>
      <div className="flex items-center justify-between mb-5">
        <h2 className="uppercase font-medium">{list.title}</h2>
        <button className="cursor-pointer"
          onClick={handleRemoveList}>
          <IoClose color="red" />
        </button>

      </div>
      <ul>
        {list.tasks?.map((task: any) => (
          <ListTask listId={list.id} title={task.title} id={task.id} key={task.id} />
        ))}
      </ul>

      {showAddTask ? <AddTask listId={list.id} setShowAddTask={setShowAddTask} />
        : <Button label="Add Card" bgColor="bg-green-600 " onClick={() => setShowAddTask(true)} />}

    </div>
  )
}
)

export default List