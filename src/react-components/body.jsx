import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../lib-components/navBar";
import Footer from "../lib-components/footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import {BASE_URL} from "../constants"

const Body = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = useSelector((store)=> store.user)

    const fetchUser = async () => {
        try {
            const res = await axios.get(BASE_URL + "/profile/view", { withCredentials: true })
            dispatch(addUser(res.data))
        }
        catch (e) {
            if (e.status === 404) {
                navigate("/login")
            }
            console.error(e)
        }

    }

    useEffect(() => {
        if(!userData){fetchUser()}
        
    }, [])

    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Body;