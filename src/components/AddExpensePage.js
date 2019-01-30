import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit = {(expense) => {
        props.dispatch(addExpense(expense)); // How did it know expense was an object?: That is defined inside of ExpenseForm
                                            // We passed in an object on this.props.onSubmit with all the details

        props.history.push('/'); // Will take us to the dashboard page after dispatching, the argument of push is the path
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
