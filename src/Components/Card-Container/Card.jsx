import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Card = () => {
    const [singleData, setSingleData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setSingleData(data)
            })
    }, []);

    return (
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
            {
                singleData.map(data =>
                   <div key={data.id} className="flex flex-grow">
                     <div className="card bg-base-100 shadow-xl">
                        <figure><img className="h-[300px]" src={data.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{data.
                                estate_title
                            }</h2>
                            <p className="text-start text-gray-500">{data.description}</p>

                            {/* Price section */}
                            <div className="text-start mt-3">
                            <h4><span className="font-bold mr-2">Price: </span>{data.price}</h4>
                            <h4><span className="font-bold mr-2">Facilities: </span>{data.facilities[0]}, {data.facilities[1]}, {data.facilities[2]}, {data.facilities[3]}</h4>
                            <h4><span className="font-bold mr-2">Area: </span>{data.area}</h4>

                            </div>

                            <div className="card-actions justify-center">
                               <Link to={`/details/${data.id}`}> <button className="btn btn-primary text-white font-bold w-full">View Property</button></Link>
                            </div>
                        </div>
                    </div>
                   </div>
                )
            }
        </div>
    );
};

export default Card;