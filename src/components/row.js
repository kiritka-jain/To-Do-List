const Row = (props)=> {
    const {id,value, onClick } = props;
    return(
        <div className="row">
            <label> 
            <input 
            type="checkbox" 
            className="chkboxitem" 
            value = {value}
            id = {id}
            onClick={(onClick)}/>
            {value}
            </label>

        </div>
        
   
    );
    
}
export default Row;