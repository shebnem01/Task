import { createContext, ReactNode, useState } from "react";
import { TaskProps } from "../types";
interface List {
    id: string;
    title: string;
    tasks: TaskProps[];
}
interface GeneralContextProps {
    allList?: List[];
    addList?: (list: List) => void;
    removeList?: (id: string) => void;
    addTask?: (listId: string, task: TaskProps) => void;
    removeTask?: (listId: string, id: string) => void;
    editTask?: (listId: string, taskId: string, editedTitle: string) => void;
    searchByTaskTitle?: (searchText: string) => void;
    searchResult?:List[];
}

export const GeneralContext = createContext<GeneralContextProps>({
    allList: [],
});

export const GeneralProvider = ({ children }: { children: ReactNode }) => {
    const storedAllList = JSON.parse(localStorage.getItem('allList') || '[]');
    const [allList, setAllList] = useState<List[]>(storedAllList);
    const [searchResult, setSearchResult] = useState<List[]>([]);

    const addList = (list: List) => {
        const updatedList = [...allList, { ...list, tasks: [] }];
        setAllList(updatedList);
        localStorage.setItem('allList', JSON.stringify(updatedList));

    };
    const removeList = (id: string) => {
        const updatedList = allList.filter((item) => item.id != id);
        setAllList(updatedList);
        localStorage.setItem('allList', JSON.stringify(updatedList));
    }

    const addTask = (listId: string, task: TaskProps) => {
        const updatedList = allList.map((list) => {
            if (list.id === listId) {
                return { ...list, tasks: [...(list.tasks || []), task] };
            }
            return list;
        });

        setAllList(updatedList);
        localStorage.setItem('allList', JSON.stringify(updatedList));
    };

    const removeTask = (listId: string, taskId: string) => {
        const updatedList = allList.map((list) => {
            if (list.id === listId) {
                return { ...list, tasks: list.tasks.filter(task => task.id !== taskId) };
            }
            return list;
        });

        setAllList(updatedList);
        localStorage.setItem('allList', JSON.stringify(updatedList));
    };



    const editTask = (listId: string, taskId: string, editedTitle: string) => {
        const updatedList = allList.map((list) => {
            if (list.id === listId) {
                const updatedTasks = list.tasks.map((task) => {
                    if (task.id === taskId) {
                        return { ...task, title: editedTitle };
                    }
                    return task;
                });
                return { ...list, tasks: updatedTasks };
            }
            return list;
        });

        setAllList(updatedList);
        localStorage.setItem('allList', JSON.stringify(updatedList));
    };

    const searchByTaskTitle = (searchText: string) => {
        console.log(searchText,'ss')
        if (searchText.trim() === '') {
            return
        }
        const filteredList = allList.map((list) => ({
            ...list,
            tasks: list.tasks.filter((task) => (
                task.title.toLowerCase().includes(searchText.toLowerCase())
            )
            )
        })).filter((list)=>list.tasks.length>0)
        setSearchResult(filteredList);

    }

    return (
        <GeneralContext.Provider value={{ allList, addList, removeList, addTask, removeTask, editTask, searchByTaskTitle, searchResult }}>
            {children}
        </GeneralContext.Provider>
    );
};

