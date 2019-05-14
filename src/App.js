import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers =[
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name':'홍은모',
    'birthday':'910628',
    'gender':'남자',
    'job':'student'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/any',
    'name':'홍길동',
    'birthday':'801207',
    'gender':'남자',
    'job':'student'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/any',
    'name':'채미래',
    'birthday':'920311',
    'gender':'여자',
    'job':'student'
  },
]
function App() {
  return (
    <div>
      {
        customers.map(c =>{
          return(
            <Customer
              key={c.id}
              id={c.id} 
              image={c.image} 
              name={c.name} 
              job={c.job} 
              gender={c.gender} 
              birthday={c.birthday}
            />
          );
        })
      }
    </div>
  );
}
export default App;
