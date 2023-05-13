import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import toast, { Toaster } from 'react-hot-toast';

const BookService = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext);
  const { title,_id, price, img } = service;
  const handelBookService = event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const email = form.email.value;
    const date = form.date.value;
    const description = form.description.value;
    const booking = {
      customer:name,
      price,
      email,
      date,
      service_id:_id,
      img,
      description,
      title
    }

    console.log(booking)
      fetch('http://localhost:4000/bookings',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
        
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // if(data.insertedId){
        //   toast.success('add service Successfully!')
        //   <Toaster
        //     position="top-center"
        //     reverseOrder={false}
        //   />
        // }
      })
  }
  return (
    <div>
      <h1>Book Service: {title}</h1>
      <form onSubmit={handelBookService}>
        <div className="card-body gap-y-6">
          <div className="md:flex gap-10 justify-between">
            <div className="form-control  md:w-1/2 w-full">
              <input
                type="text"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2 w-full">
              <input
                type="text"
                placeholder="Service Price"
                defaultValue={'$'+price}
                name="price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="md:flex gap-10  justify-between">
            <div className="form-control md:w-1/2 w-full">
              <input
                type="text"
                placeholder="email"
                defaultValue={user?.email}
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:w-1/2 w-full">
              <input
                type="date"
                placeholder="Date"
                name="date"
                className="input input-bordered"
              />
            
            </div>
          </div>
          <div className="form-control w-full">
              <input
                type="text"
                placeholder="Product Description"
                name="description"
                className="input input-bordered h-40"
              />
            </div>
          <div className="form-control mt-6">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookService;
