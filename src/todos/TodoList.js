import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { removeTodo, completedTodo } from "./actions";

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(completedTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
