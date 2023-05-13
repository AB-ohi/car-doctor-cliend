import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [service,setService] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
  return (
    <div>
      <div className="text-center text-white">
        <p className="text-xl text-orange-600 font-semibold">Service</p>
        <h1 className="text-7xl font-bold">Our Service Area</h1>
        <p className="text-slate-400 w-[717px] mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 justify-center md:grid-cols-3 gap-5">
        {
            service.map(service => <ServiceCard
            key={service._id}
            service ={service}
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
