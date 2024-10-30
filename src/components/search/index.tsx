import { useContext, useState } from "react"
import Button from "../display/Button"
import { GeneralContext } from "../../context";
import SearchResult from "../searchResult";


const Search = () => {
    const [searchText, setSearchText] = useState('');
   
    const { searchByTaskTitle } = useContext(GeneralContext);
    const handleSearch = () => {
        console.log("salam")
        searchByTaskTitle&&searchByTaskTitle(searchText);
    }
    return (
      
        <>
          <div className="flex items-center justfy-between bg-white w-[500px] mx-auto h-12 rounded-md px-2 mb-4">
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="w-full outline-none pe-7" type="text" placeholder="Search" />
            <Button onClick={handleSearch} label="Search" bgColor="bg-blue-500" size="small" />
        </div>
        <SearchResult/>
        </>
    )
}

export default Search