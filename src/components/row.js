import "./row.css";

const Row = (props)=> {
    const {id,value, completed,  onClick } = props;
    return(
        <div className="row">
            <label> 
            <input 
            type="checkbox" 
            className="chkboxitem" 
            value = {value}
            id = {id}
            checked = {completed}
            onChange={(onClick)}/>
            {value}
            </label>

        </div>
        
   
    );
    
}
export default Row;