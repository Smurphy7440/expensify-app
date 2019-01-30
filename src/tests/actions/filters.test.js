import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('Should generate set start date object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('Should generate set end date object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('Should generate sortBy date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type:'SORT_BY_DATE'
  });
});

test('Should generate sortBy amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type:'SORT_BY_AMOUNT'
  });
});


test('Should generate the default text filter', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ""
  });
});

test('Should generate the text filter using a value', () => {
  const action = setTextFilter("Bill");
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: "Bill"
  });
});
