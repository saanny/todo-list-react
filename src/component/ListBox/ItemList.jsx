export const ItemList = ({value,removeItemHandler,updateTaskDoneState,index})=>{
        return (   
        <li className="item" >
          {value.taskDone ? <i class="left-icon far fa-check-circle" onClick={()=>{
          updateTaskDoneState(index)
        }}></i>:<i className="left-icon far fa-circle" onClick={()=>{
          updateTaskDoneState(index)
        }}></i>}
        <div>{index +1}.{value?.title}</div>
        <i className="right-icon far fa-trash-alt" onClick={()=>{
          removeItemHandler(index)
        }}></i>
        </li>
      );
}