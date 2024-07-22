const Row = (props)=> {
    const {value, onClick } = props;
    return(
        <div className="row">
            <label> 
            <input 
            type="checkbox" 
            className="chkboxitem" 
            onClick={(onClick)}/>
            {value}
            </label>

        </div>
        
   
    );
    
}
export default Row;