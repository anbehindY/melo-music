import Image from "next/image";

const Payment = (
  { paymentInfo } = {
    paymentInfo: {
      type: "type",
      price: "price",
      description: "description",
      source: [],
    },
  }
) => {
  return (
    <div className="w-[300px] md:h-[300px] border-gradient flex flex-col gap-[10px] px-6 py-8">
      <div className="flex justify-between">
        <h4 className="font-[700] text-xl">{paymentInfo.type}</h4>
        <p>
          <span className="gradient font-[700] text-[20px]">
            {paymentInfo.price}
          </span>
          Ks
        </p>
      </div>
      <p className="font-[700] text-[15px] gradient lg:h-[70px]">
        {paymentInfo.description}
      </p>
      <p className="font-[400] text-sm">Available Payments:</p>
      <div className="flex gap-[4px]">
        {paymentInfo.source.map((source) => {
          return (
            <div
              key={source}
              className="flex justify-center items-center duration-100 w-[60px] h-[60px] border-[3px] border-transparent
							ease-in-out p-1 rounded-md hover:border-[#FF215076] relative"
            >
              <div className="relative w-[35px] h-[35px]">
                <Image
                  src={`/${source}.png`}
                  fill
                  quality={100}
                  style={{ objectFit: "contain" }}
                  alt={source}
                />
              </div>
            </div>
          );
        })}
      </div>
      {paymentInfo.source.includes("mptLogo") && (
        <span className="font-[400] text-[10px] ml-[60px]">(Auto Renewal)</span>
      )}
    </div>
  );
};

export default Payment;
