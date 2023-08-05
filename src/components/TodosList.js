import PropTypes from 'prop-types';
import TodoItem from "@/components/TodoItem";

const TodosList = ({todosProps}) => {
    return (
        <ul>
            {todosProps.map((todo) => (
                <TodoItem key={todo.id} itemProp={todo} />
            ))}
        </ul>
    )
}

TodosList.propTypes = {
    todosProps: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
};

export default TodosList;
