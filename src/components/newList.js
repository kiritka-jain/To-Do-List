import Row from "./row";
import"./newList.css";

const NewList = (props) => {
  const { list, handleCheck, message, style } = props;

  const renderList = () => {
    return (
      <span style={style} className="NewList">
        {list.map((task) => (
          <Row
            key={task.id}
            id={task.id}
            value={task.title}
            completed={task.completed}
            onClick={handleCheck}
          />
        ))}
      </span>
    );
  };

  return (
    <div className="taskRow">{list.length === 0 ? message : renderList()}</div>
  );
};
export default NewList;
