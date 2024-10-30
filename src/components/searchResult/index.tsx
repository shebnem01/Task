import { useContext } from "react"
import { GeneralContext } from "../../context"


const SearchResult = () => {
    const { searchResult } = useContext(GeneralContext);
console.log(searchResult)
    return (
        <ul className="bg-slate-50 rounded-md p-2 mb-4 w-[500px] mx-auto">
            {searchResult?.map((list) => (
                <li className="bg-gray-30 p-2 mb-2 rounded-md " key={list.id}>
                    {list.tasks.map((task) => (
                        <div key={task.id}>{task.title}</div>
                    ))}
                </li>
            ))}
            {searchResult?.length===0&&<div>No result</div>}
        </ul>
    )
}

export default SearchResult