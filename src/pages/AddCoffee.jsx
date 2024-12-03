
const AddCoffee = () => {
    const handleAddNewCoffee = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const supplier = event.target.supplier.value;
        const category = event.target.category.value;
        const photo = event.target.photo.value;
        const chef = event.target.chef.value;
        const taste = event.target.taste.value;
        const details = event.target.details.value;
        // console.log(name, supplier,category,photo,chef,taste,details);
        const newCoffee={name, supplier,category,photo,chef,taste,details};

        fetch("http://localhost:5000/coffee",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("client received response:",data);
            if(data.insertedId){
                alert("Add Coffee Successful");
            }
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold">Add New Coffee!</h1>
                <form onSubmit={handleAddNewCoffee} className="card-body">
                    {/* coffee name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter coffee name" name="name" className="input input-bordered" required />
                    </div>
                    {/* supplier name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" placeholder="Enter supplier name" name="supplier" className="input input-bordered" required />
                    </div>
                    {/* Category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="Enter coffee category" name="category" className="input input-bordered" required />
                    </div>
                    {/* Photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Enter coffee photo url" name="photo" className="input input-bordered" required />
                    </div>
                    {/* chef */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">chef</span>
                        </label>
                        <input type="text" placeholder="Enter coffee chef" name="chef" className="input input-bordered" required />
                    </div>
                    {/* taste */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" placeholder="Enter coffee taste" name="taste" className="input input-bordered" required />
                    </div>
                    {/* details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Enter coffee details" name="details" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Add Coffee" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddCoffee;