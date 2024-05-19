import Banner from "@/components/common/Banner";
import ProductList from "@/components/common/ProductList";
import Services from "@/components/services";


export default function Home() {
  return (
    <main>
      <Banner />
      <Services />

      <div className="mt-[80px] container space-y-[45px]">
        {/* Product Section Title */}
        <div className="text-center">
          <div className="text-[40px] font-bold leading-[111%] underline-after ">
            <span className="text-primary">Our</span> <span className="text-secondary">Products</span>
          </div>

          <p className="mt-[10px] text-[15px] mx-auto leading-[180%] text-[#555] w-[530px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. A consequatur dolorem eum eveniet aperiam? Ea!</p>
        </div>

        <div>
          <ProductList />
        </div>
      </div>
    </main>
  );
}
