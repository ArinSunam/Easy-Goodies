import Image from "next/image"
import { FaShoppingCart } from "react-icons/fa"


const MonthlyDeal = () => {

  const MonthlyDealData = {
    product: 'Haiekn Strawberry',
    details: 'Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant',
    time: [
      {
        value: 0,
        format: 'Days'
      },
      {
        value: 0,
        format: 'Hours'
      },
      {
        value: 0,
        format: 'Mins'
      },
      {
        value: 0,
        format: 'Secs'
      },
    ]
  }



  return (
    <div className="text-secondary bg-[#f5f5f5] py-[100px]">
      <div className="container grid grid-cols-7 gap-9">

        {/* Deal img and percento */}
        <div className="col-span-3 relative z-10">

          <Image src="https://themewagon.github.io/fruitkha/assets/img/a.jpg" alt="deal product" height={412} width={540} className="" />

          <div className="bg-primary p-[10px] h-[110px] w-[110px] flex flex-col justify-center items-center rounded-full border-[6px] border-[#fda359] absolute bottom-64 left-4 ">
            <h2 className="text-2xl font-extrabold">30%</h2>
            <p>Off per Kg</p>
          </div>
        </div>

        {/* deal details */}
        <div className="col-span-4 space-y-8">
          <div className="space-y-4">

            <h1 className="text-[40px] font-bold leading-[75%]"><span className="text-primary">Deal</span> of the month</h1>

            <h3 className="text-[21px]">{MonthlyDealData.product}</h3>
          </div>
          <p className="text-[14px ]">{MonthlyDealData.details}</p>
          <ul className="flex items-center gap-1 text-primary ">
            {MonthlyDealData.time.map((time) => (
              <li className="h-[81px] w-[81px] border-2 border-primary ">

                <p className="w-full h-full text-[30px] font-bold flex flex-col items-center justify-center   ">

                  {time.value.toString().padStart(2, '0')} <span className="text-secondary text-[13px] font-normal ">{time.format}</span></p></li>

            ))}</ul>

          <button className="bg-primary text-body flex items-center gap-3 rounded-[50px] py-[10px] px-[30px] ">< FaShoppingCart /> Add to cart</button>





        </div>

      </div>
    </div >
  )
}

export default MonthlyDeal
