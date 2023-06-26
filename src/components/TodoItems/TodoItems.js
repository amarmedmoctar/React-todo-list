import React from 'react';
import './TodoItems.css';

const TodoItems = (props) => {
  const { items, deleteItem } = props;
  const length = items.length;

  const ListItems = length ? (
    items.map((item) => (
      <div key={item.id} className="list-item">
        <span className="name">{item.name}</span>
        <span className="age">{item.age}</span>
        <span className="action icon" onClick={() => deleteItem(item.id)}>
          &times;
        </span>
      </div>
    ))
  ) : (
    <p className="no-items">There are no items to show</p>
  );

  return (
    <div className="ListItems">
      <div className="list-header">
        <span className="name">Name</span>
        <span className="age">Age</span>
        <span className="action title">Action</span>
      </div>
      {ListItems}
    </div>
  );
};

export default TodoItems;
