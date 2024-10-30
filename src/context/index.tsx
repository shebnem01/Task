import { createContext, ReactNode, useState } from "react";
interface List {
    id: string;
    title: string;
    tasks: any[];
}
interface GeneralContextProps {
    allList?: List[];
    addList?: (list: List) => void;
    removeList?: (id: string) => void;
    addTask?: (listId: string, task: any) => void;
    removeTask?: (listId: string, task: any) => void;
}

export const GeneralContext = createContext<GeneralContextProps>({
    allList: [],
});

export const GeneralProvider = ({ children }: { children: ReactNode }) => {
    const storedAllList = JSON.parse(localStorage.getItem('allList') || '[]');
    const [allList, setAllList] = useState<List[]>(storedAllList);


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

    const addTask = (listId: string, task: any) => {
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

    return (
        <GeneralContext.Provider value={{ allList, addList, removeList, addTask, removeTask }}>
            {children}
        </GeneralContext.Provider>
    );
};

