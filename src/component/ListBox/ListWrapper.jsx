import { ItemList } from "./ItemList";
export const ListWrapper = ({items,removeItemHandler,updateTaskDoneState}) => {
        
    return (
        <ul className="list">
            {items?.map((item,index)=>{
                return  <ItemList value={item} key={index} index={index} removeItemHandler={removeItemHandler} updateTaskDoneState={updateTaskDoneState}/>;
            })}
        </ul>
    )

}
