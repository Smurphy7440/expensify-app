import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      props.expenses.map((expense) => (
        <ExpenseListItem
          key = {expense.id}
          {...expense}
          // description = {expense.description}
          // amount = {expense.amount}
          // createdAt = {expense.createdAt}
        />
      ))
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
