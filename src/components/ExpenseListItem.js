import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>Description: {description}</h3>
    </Link>
    <br/>
    Amount: {amount}<br/>
    Created at: {createdAt}<br/>
    <hr/>
  </div>
);

export default ExpenseListItem;
