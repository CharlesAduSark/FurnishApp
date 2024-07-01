import { logoImg } from "../assets";
import K from "../constants";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-32 py-10 fixed w-full left-0 top-0">
      <div className="size-28">
        <img src={logoImg} alt="Logo" />
      </div>
      <div className="flex gap-x-12 text-black text-xl font-bold">
        {
          K.NAVLINKS.map(
            (item,index) => {
            return <Link key={index} to={item.path}>{item.name}</Link>
          }
        )
        }
      </div>
    </div>
  )
}

export default Navbar;