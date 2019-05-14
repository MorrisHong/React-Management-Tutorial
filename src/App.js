import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customer ={
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name':'홍은모',
  'birthday':'910628',
  'gender':'남자',
  'job':'student'
}
function App() {
  return (
    <Customer
      id={customer.id}
      image = {customer.image}
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}
export default App;
