/* eslint-disable react/prop-types */


const Coffee = ({ coffee }) => {
    console.log(coffee);
    const { name, photo, supplier, category, chef, taste, details, _id } = coffee;

    const handleDelete = () => {
        console.log("delete ", _id);
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log("delete successful", data);
                if(data.deletedCount>0)
                {
                    console.log("deleted");
                    
                }
            })
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{supplier}</div>
                </h2>
                <p>{chef}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{taste}</div>
                    <div className="badge badge-outline">{category}</div>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <button className="btn">Eye</button>
                    <button className="btn">Edit</button>
                    <button className="btn" onClick={handleDelete}>Delete</button>
                </div>
            </div>

        </div>
    );
};

export default Coffee;