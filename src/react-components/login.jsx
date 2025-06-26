import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";
import ErrorAlert from "../lib-components/error";

const Login = () => {
    const [emailId, setEmail] = useState("Anjali@gmail.com");
    const [password, setPassword] = useState("Anjali@123");
    const [errorMsg, setErrorMsg] = useState(null); // 1️⃣ Error state
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clickLoginButton = async () => {
        try {
            const res = await axios.post(
                BASE_URL + "/login",
                { emailId, password },
                { withCredentials: true }
            );
            dispatch(addUser(res.data.user));
            return navigate("/feed");
        } catch (e) {
            console.log(e.message);
            setErrorMsg("Invalid credentials or server error!"); // 2️⃣ Set error
            setTimeout(() => setErrorMsg(null), 3000); // 3️⃣ Auto-hide after 3 sec
        }
    };

    return (
        <>
        
        <div
            className="min-h-screen flex items-center justify-center bg-base-100 relative"
            style={{
                backgroundImage:
                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
        >
            {errorMsg && (
                <div className="absolute top-4 w-full flex justify-center">
                    <ErrorAlert message={errorMsg} />
                </div>
            )}

            <fieldset className="bg-base-300 border border-base-300 rounded-box p-6 w-80">
                <legend className="text-lg font-semibold mb-4"></legend>

                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="Email"
                    value={emailId}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="label mt-4">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    className="input input-bordered w-full"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="btn btn-neutral mt-6 w-full"
                    onClick={clickLoginButton}
                >
                    Login
                </button>
            </fieldset>
        </div>
        </>
    );
};

export default Login;
