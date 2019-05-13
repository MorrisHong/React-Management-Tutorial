import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customer ={
  'name':'홍은모',
  'birthday':'910628',
  'gender':'남자',
  'job':'student'
}
function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}
export default App;
