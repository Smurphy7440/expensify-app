import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should set remove expense action object', () => {
  const action = removeExpense({ id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Should set edit expense action object', () => {
  const action = editExpense('123abc', { note: 'an edit note'});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:'123abc',
    updates:{
      note:'an edit note'
    }
  });
});

test('Should set up add expense object with given values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 60000,
    createdAt: 1000,
    note: 'The last rent'
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      ...expenseData,
      id:expect.any(String)
    }
  });
});

test('Should set up add expense object with default value', () => {
  const action = addExpense();

  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      description:"",
      note:"",
      amount: 0,
      createdAt:0,
      id: expect.any(String)

    }
  });
});
