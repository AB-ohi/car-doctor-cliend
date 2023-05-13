import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const { user } = useContext(AuthContext)

    const [bookings,setBookings] = useState([])

    const navigate = useNavigate()

    const url = `http://localhost:4000/bookings?email=${user?.email}`;
    console.log(url)
    useEffect(()=>{
        fetch(url,{
          method: 'GET',
          headers:{
            authorization:`bearer ${localStorage.getItem('car-assess-token')}`
          }
        })
        .then(res => res.json())
        .then(data => {
            if(!data.error){
              setBookings(data)
            }
            else{
              navigate('/')
            }
        })
    },[url,navigate])


    return (
        <div>
            <h1 className="text-2xl">List {bookings.length}</h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            bookings.map(booking =><BookingRow
            key={booking._id}
            booking={booking}
            >

            </BookingRow>

            )
        }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Bookings;