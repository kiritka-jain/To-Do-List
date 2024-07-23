import Row from "./row";

const List = (props) => {
  const { list, handleCheck } = props;

  const renderList = () => {
    return list.map((task) => (
      <Row key={task.id} value={task.text} onClick={handleCheck} />
    ));
  };

  return (
    <div className="taskRow">
      {list.length === 0 ? "To do list has no task." : renderList()}
    </div>
  );
};
export default List;
