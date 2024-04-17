import { CiLocationOn } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";
import { IoMdPricetags } from "react-icons/io";
import { AiOutlineSplitCells } from "react-icons/ai";
import { AiOutlineBug } from "react-icons/ai";
import { IoBedOutline } from "react-icons/io5";
import { GiShower } from "react-icons/gi";
import { TbArrowsRandom } from "react-icons/tb";


const Details = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const detailsData = data.find(detailsData => detailsData.id == id);
    const { image, facilities, location, area, status, price, description, segment_name, estate_title } = detailsData;
    return (
        <div className="flex justify-center mt-12 bg-gray-100 p-10 rounded-xl">
            <div className=" lg:w-8/12">
                {/* title */}
                <div className="mb-8 md:flex lg:flex items-center justify-between">
                    {/* left */}
                    <div className="space-y-3 mb-12 ">
                        <p className="font-serif text-4xl">{estate_title}</p>
                        <button className="px-6 py-1 bg-green-500 text-sm font-thin mr-1 text-white rounded">Status</button>
                        <button className="px-6 py-1 bg-slate-500 text-sm font-thin text-white rounded">{status}</button>
                        <p className="flex gap-1 items-center "><CiLocationOn className="text-2xl"></CiLocationOn> <span>{location}</span> </p>
                    </div>
                    {/* right */}
                    <div className="space-y-3">
                        <h1 className="text-4xl font-mono flex items-center gap-3"><IoMdPricetags></IoMdPricetags> {price}</h1>
                        <button className="px-6 py-1 bg-green-500 text-sm font-thin mr-1 text-white rounded">Segment</button>
                        <button className="px-6 py-1 bg-slate-500 text-sm font-thin text-white rounded">{segment_name}</button>
                        <p className="flex gap-1 items-center "><AiOutlineSplitCells className="text-2xl"></AiOutlineSplitCells>  <span>{area}</span> </p>
                    </div>
                </div>
                {/* image */}
                <div className=""><img className=" w-screen rounded-lg" src={image} alt="" />
                    {/* facilities */}
                    <div className=" gap-7 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-7">
                        <div className="border-l-2 text-center">
                            <p className="font-bold">{segment_name}</p>
                            <p>Property Type</p>
                        </div>
                        <div className="border-l-2 text-center">
                            <p className="flex justify-center"><IoBedOutline></IoBedOutline></p>
                            <p>{facilities[0]}</p>
                        </div>
                        <div className="border-l-2 text-center">
                            <p className="flex justify-center"><GiShower></GiShower></p>
                            <p>{facilities[1]}</p>
                        </div>
                        <div className="border-l-2 text-center">
                            <p className="flex justify-center"><TbArrowsRandom></TbArrowsRandom></p>
                            <p>{facilities[2]}</p>
                        </div>
                        <div className="border-x-2 text-center">
                            <p className="flex justify-center"><AiOutlineBug></AiOutlineBug></p>
                            <p>{facilities[3]}</p>
                        </div>
                    </div>

                    {/* deatails */}
                    <div className="bg-white p-5 rounded-xl">
                        <h1 className="text-center font-bold text-xl"><u>Description</u></h1>
                            <p className="text-center">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;