import { Outlet } from "react-router-dom";
import NavBar from "../lib-components/navBar";
import Footer from "../lib-components/footer";

const Body = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Body;