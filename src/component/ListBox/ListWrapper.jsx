import { ItemList } from "./ItemList";
export const ListWrapper = ({items}) => {
        
    return (
        <ul className="list">
            {items?.map((item,index)=>{
                return  <ItemList value={item} key={index} />;
            })}
        </ul>
    )

}
