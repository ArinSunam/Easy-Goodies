import { ProductData } from "@/dummy/ProductData"

import Image from "next/image"
import { FaShoppingCart } from "react-icons/fa"


const ProductList = () => {
  return (
    <div className="flex items-center justify-between">
      {ProductData.map((el, index) => (
        <div key={index} className="px-[30px] py-[20px] text-secondary flex flex-col items-center gap-[10px] shadow-black/25 shadow-lg hover:shadow-none">
          <Image src={el.image} alt="" width={261} height={261} />
          <h2 className="text-[20px] font-semibold leading-[2.25rem]">{el.name}</h2>
          <p className="text-[#555] text-[15px]">Per Kg</p>
          <h1 className="text-[30px] font-bold leading-[180%]">{el.price}</h1>
          <button className="bg-primary text-body flex items-center gap-3 rounded-[50px] py-[10px] px-[30px] ">< FaShoppingCart /> Add to cart</button>

        </div>
      ))}
    </div>
  )
}

export default ProductList
