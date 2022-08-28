export const ItemList = ({value})=>{
    // <i class="left-icon far fa-check-circle"></i>
        return (   
        <li className="item">
        <i className="left-icon far fa-check-circle"></i>
        <div>{value?.title}</div>
        <i className="right-icon far fa-trash-alt"></i>
        </li>
      );
}