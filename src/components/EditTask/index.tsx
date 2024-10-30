import { memo, useContext, useState } from "react";
import Button from "../display/Button";
import { GeneralContext } from "../../context";
type EditTaskProps={
    title: string; id: string; listId: string
    setShowEdit:(show:boolean)=>void
}
const EditTask = memo(({ title, id, listId,setShowEdit }:EditTaskProps) => {
  const [editTitle, setEditTitle] = useState(title);
  const { editTask } = useContext(GeneralContext);
  

  const handleEditTask = () => {
      if (editTask) {
          editTask(listId, id, editTitle);
      }
     setShowEdit(false);
  };

  return (
      <div className="flex">
          <input
              className="h-10 p-3 shadow"
              onChange={(e) => setEditTitle(e.target.value)}
              value={editTitle}
          />
          <Button size="small" onClick={handleEditTask} label="save" bgColor="bg-blue-500" />
      </div>
  );
});

export default EditTask;
