import { useContext, useState } from "react"
import Button from "../display/Button"
import { GeneralContext } from "../../context";
import { v4 as uuidv4 } from 'uuid';
import toast from "react-hot-toast";


const AddList = () => {
  const { addList} = useContext(GeneralContext);
  const [text, setText] = useState('');


  const handleSubmit = (e: any) => {
    e.preventDefault();
  }
  const addHandle = () => {
    if(text.trim()===''){
      toast.error('Required')
      return
    }
    addList && addList({ id: uuidv4(), title: text,tasks:[] });
    setText('')
  }
  return (
    <div className="bg-blue-100 p-3 rounded-md w-[300px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input className="h-12 p-3 rounded-md" value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Add new list" />
        <Button type='submit'
          onClick={addHandle}

          label="Add list" bgColor="bg-blue-400" />
      </form>
    </div>
  )
}

export default AddList