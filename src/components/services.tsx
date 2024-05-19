import { FaPhoneVolume, FaShippingFast, FaSync } from "react-icons/fa";
const Services = () => {

  const serviceData = [
    {
      icon: <FaShippingFast />,
      title: ' Free Shipping',
      desc: 'When order over Rs.15000'
    },
    {
      icon: <FaPhoneVolume />,
      title: '24/7 Support',
      desc: 'Get support all day'
    },
    {
      icon: <FaSync />,
      title: 'Refund',
      desc: 'Get Refund Within 3 days'
    },
  ]

  return (
    <div className="bg-[#f5f5f5] py-[80px]">
      <div className="container flex justify-between ">
        {serviceData.map((el, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="h-[65px] w-[65px] border-2 border-dotted border-primary rounded-full flex items-center justify-center ">
              <span className="text-primary text-2xl ">{el.icon}</span>
            </div>
            <div className="text-secondary">
              <h3 className=" text-lg font-bold">{el.title}</h3>
              <p className="text-[14px]">{el.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Services
