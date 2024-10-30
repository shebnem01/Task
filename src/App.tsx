
import './App.css';
import AddList from './components/addList';
import AllList from './components/AllList';

function App() {
  return (
    <div className='bg-gray-500 p-6 overflow-x-auto h-screen'>
     <h1 className='text-center mb-5 text-white text-4xl'>Kanban Board</h1>
     {/* search */}
     {/* filter */}
    <div className="flex gap-5">
    <AllList/>
    <AddList/>
    </div>
    </div>
  );
}

export default App;
