import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import Swal from 'sweetalert2';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log(coffees);
  // https://i.ibb.co.com/gjPDtNM/1.png
  // https://i.ibb.co.com/PZQcH9g/2.png
  // https://i.ibb.co.com/nkTvXmd/3.png
  // https://i.ibb.co.com/gZKzv68/4.png
  // https://i.ibb.co.com/NCQ9q1P/5.png
  // https://i.ibb.co.com/4WbR3gN/6.png
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log("delete successful", data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              // coffees in collection now
              const newCoffees = coffees.filter(coffee => coffee._id != _id);
              setCoffees(newCoffees);
            }
          })
      }
    });

  }

  return (
    <div className='max-w-screen-xl mx-auto'>
      <div>
        <Link className='btn' to="/addCoffee">Add Coffee</Link>
      </div>
      <h1 className='text-5xl btn btn-warning text-center'>hot hot cold coffees {coffees.length}</h1>
      <div className="grid grid-cols-3 gap-4 ">
        {
          coffees.map(coffee => <div key={coffee._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={coffee.photo}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {coffee.name}
                <div className="badge badge-secondary">{coffee.supplier}</div>
              </h2>
              <p>{coffee.chef}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{coffee.taste}</div>
                <div className="badge badge-outline">{coffee.category}</div>
              </div>
              <div className="flex justify-center items-center gap-5">
                <button className="btn">Eye</button>
                <Link className="btn" to={`updateCoffee/${coffee._id}`}>Edit</Link>
                <button className="btn" onClick={() => { handleDelete(coffee._id) }}>Delete</button>
              </div>
            </div>

          </div>)
        }
      </div>
    </div>
  )
}

export default App
