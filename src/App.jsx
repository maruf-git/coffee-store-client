
import { useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import Coffee from './components/Coffee';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees]=useState(loadedCoffees);
  console.log(coffees);
  // https://i.ibb.co.com/gjPDtNM/1.png
  // https://i.ibb.co.com/PZQcH9g/2.png
  // https://i.ibb.co.com/nkTvXmd/3.png
  // https://i.ibb.co.com/gZKzv68/4.png
  // https://i.ibb.co.com/NCQ9q1P/5.png
  // https://i.ibb.co.com/4WbR3gN/6.png
  return (
    <div className='max-w-screen-xl mx-auto'>
      <h1 className='text-5xl btn btn-warning'>hot hot cold coffees {coffees.length}</h1>
      <div className="grid grid-cols-3 gap-4 ">
        {
          coffees.map(coffee=><Coffee key={coffee._id} coffee={coffee}></Coffee>)
        }
      </div>
    </div>
  )
}

export default App
