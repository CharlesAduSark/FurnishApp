import { Outlet } from "react-router-dom";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";

const RootLayout = () => {
  return <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>;
}

export default RootLayout