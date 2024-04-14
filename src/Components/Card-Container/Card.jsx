import { useEffect, useState } from "react";


const Card = () => {
    const [singleData, setSingleData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
                            <h2 className="card-title">{data.
                                estate_title
                            }</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary text-white font-bold w-full">View Property</button>
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