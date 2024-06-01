

const Offer = () => {
  return (
    <div className="w-screen h-[500px] my-[100px]" style={{
      background: "url('/Images/strawField.jpg')"
    }}>
      <div className="h-full container flex flex-col justify-center gap-y-4">

        <h1 className="text-secondary text-[50px] leading-[120%] font-bold ">December Sale is On! <br /> with big <span className="text-primary">Discount...</span></h1>
        <p className="text-primary text-[60px]  font-bold "><span className="text-secondary text-[24px] inline-block">Sale! <br /> Upto </span>50% <span className="text-secondary text-[24px]">off</span></p>
        <button className="w-[130px] bg-primary px-[20px] py-[10px] rounded-[50px] cursor-pointer hover:bg-secondary hover:text-primary">Shop Now</button>

      </div>
    </div>
  )
}

export default Offer
