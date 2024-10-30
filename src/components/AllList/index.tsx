import { useContext } from "react";
import { GeneralContext } from "../../context";
import List from "../List";

const AllList = () => {
  const { allList } = useContext(GeneralContext);
  return (
    <ul className="flex gap-5 ">
      {allList?.map((list)=>(
        <List key={list.id} list={list}/>
      ))}
    </ul>
  )
}

export default AllList