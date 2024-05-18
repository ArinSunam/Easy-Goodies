

const Banner = () => {
  return (
    <div className="h-screen w-f bg-cover bg-no-repeat" style={{
      backgroundImage: "linear-gradient(rgba(0,20,30, 0.55), rgba(0,20,30,0.55)),url('https://i.pinimg.com/564x/c3/2b/09/c32b09c242df09b22a5537d8b5094389.jpg')"
    }}>

      <div className=" h-full flex flex-col items-center justify-center gap-6">
        <p className="text-primary text-[15px] font-bold tracking-[7px] leading-[180%] uppercase">Fresh & Organic</p>
        <h1 className="text-[64px] font-bold leading-[130%] ">Delicious Veggies</h1>
        <div className="space-x-4">
          <button className="bg-primary py-[7px] px-[20px] rounded-[50px]">Fruit Collection</button>
          <button className="bg-transparent border-2 border-primary py-[7px] px-[20px] rounded-[50px]">Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
