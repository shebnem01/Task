export type TaskProps = {
    id: string;
    title: string;
  };
 export  type ListProps = {
    title: string
    id: string
    tasks?: TaskProps[]
  }
 export  type ListTaskProps = {
    title: string
    id: string
    listId: string
  }