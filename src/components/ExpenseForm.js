import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      description: props.expense ? props.expense.description :'',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount/100).toString() :'',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };

  }



  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onTextAreaChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState(() => ({ createdAt }));
    }

  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error:'Please provide description and amount.' }));
    }else{
      this.setState(() => ({ error:'' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10)*100, //amount was a string we changed it to a number in cents
        createdAt: this.state.createdAt.valueOf(), //we also changed the date to miliseconds using a built in moment function
        note: this.state.note
      });
    }
  };

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />

          <input
            type="text"
            placeholder="Amount"
            value = {this.state.amount}
            onChange = {this.onAmountChange}
          />

          <SingleDatePicker
            date = {this.state.createdAt}
            onDateChange = {this.onDateChange}
            focused = {this.state.calendarFocused}
            onFocusChange ={this.onFocusChange}
            numberOfMonths = {1}
            isOutsideRange = {() => false } // makes all days available including past days
          />

          <textarea
            placeholder = "Add a note for your expense (optional)"
            value = {this.state.note}
            onChange = {this.onTextAreaChange}
          >
          </textarea>

          <button type="Submit">Add Expense</button>
        </form>
      </div>
    );
  }
};
