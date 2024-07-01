import { heroBg } from "../../../assets"


const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#D4EAF5] place-content-center">
        <div className="mx-auto w-fit flex flex-col items-start gap-y-3">
          <div className="flex flex-col text-5xl">
            <span className="font-thin">Best Design of</span>
            <span className="font-bold">Furniture Collections</span>
          </div>
          <p className="w-96">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <button className="px-6 py-2 rounded-full drop-shadow-lg uppercase bg-[#28AC20] text-white ">Discover</button>
        </div>
      </div>
      <div className="w-1/2">
        <img src={heroBg} alt="HeroImage" className="w-full object-cover h-screen"/>
      </div>
    </div>
  )
}

export default Hero