import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../lib-components/navBar";
import Footer from "../lib-components/footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { BASE_URL } from "../constants";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>

      <div className="flex-1 overflow-y-auto pt-[64px] pb-[80px]">
        <Outlet />
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
