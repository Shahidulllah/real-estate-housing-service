import Card from "./Card";

const CardContainer = () => {
    return (
        <div className="mt-16 text-center mb-10">
            {/* header */}
            <div className="flex flex-col items-center">
                <h1 className="text-3xl lg:text-5xl font-bold font-serif p-4">Our Featured Exclusives</h1>
                <p className="text-xl px-5 w-7/12">See how much your propertys worth whether you own it or want to buy it. Your choice should be considered as your demand.
                </p>
            </div>
           
           <Card></Card>
           
        </div>
    );
};

export default CardContainer;