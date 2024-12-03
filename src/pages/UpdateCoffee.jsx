import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const loadedCoffee=useLoaderData()
    const [coffee,setCoffee] = useState(loadedCoffee);
    const { name, supplier, category, photo, chef, taste, details, _id } = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const supplier = event.target.supplier.value;
        const category = event.target.category.value;
        const photo = event.target.photo.value;
        const chef = event.target.chef.value;
        const taste = event.target.taste.value;
        const details = event.target.details.value;
        // console.log(name, supplier,category,photo,chef,taste,details);
        const updatedCoffee = { name, supplier, category, photo, chef, taste, details };
        console.log(updatedCoffee);
        Swal.fire({
            title: "Are you sure?",
            text: "You can revert it any time!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updatedCoffee)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your file has been updated.",
                                icon: "success"
                            });
                            setCoffee(updatedCoffee);
                            // event.target.clear();
                            console.log(event.target);
                        }
                    })
            }
        });

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold">Update Coffee:{name}!</h1>
                <form onSubmit={handleUpdateCoffee} className="card-body">
                    {/* coffee name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={name} placeholder="Enter coffee name" name="name" className="input input-bordered" required />
                    </div>
                    {/* supplier name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" defaultValue={supplier} placeholder="Enter supplier name" name="supplier" className="input input-bordered" required />
                    </div>
                    {/* Category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" defaultValue={category} placeholder="Enter coffee category" name="category" className="input input-bordered" required />
                    </div>
                    {/* Photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" defaultValue={photo} placeholder="Enter coffee photo url" name="photo" className="input input-bordered" required />
                    </div>
                    {/* chef */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">chef</span>
                        </label>
                        <input type="text" defaultValue={chef} placeholder="Enter coffee chef" name="chef" className="input input-bordered" required />
                    </div>
                    {/* taste */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" defaultValue={taste} placeholder="Enter coffee taste" name="taste" className="input input-bordered" required />
                    </div>
                    {/* details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" defaultValue={details} placeholder="Enter coffee details" name="details" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Update Coffee" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;