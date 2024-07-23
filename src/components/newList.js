import Row from "./row";

const NewList = (props) => {
  const { id,list, handleCheck,message } = props;

  const renderList = () => {
    return list.map((task) => (
      <Row key={task.id} id={task.id} value={task.text} onClick={handleCheck} />
    ));
  };

  return (
    <div className="taskRow">
      {list.length === 0 ? message: renderList()}
    </div>
  );
};
export default NewList;
