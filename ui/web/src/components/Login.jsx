import React from "react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { startsession } from "../session/Session";

export default function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  async function loginexp() {
    axios
      .get(
        "http://localhost/OMB/login.php?email=" +
          userName +
          "&password=" +
          password
      )
      .then((res) => {
        const message = res.data.message;
        const flag = res.data.flag;
        console.log(message);
        if (flag == 1) {
          startsession(userName, res.data.flag);
          window.location = "/user";
        }
      });
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 h-screen w-full">
      <div className="big-gray-100 flex flex-col justify-center bg-slate-400">
        <div className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">Login form</h2>

          <div className="flex flex-col py-2 ">
            <label>Email</label>
            <input
              className="border py-2"
              type="text"
              onChange={(e) => setuserName(e.target.value)}
            />
          </div>

          <div className="flex flex-col py-2 ">
            <label>Password</label>
            <input
              className="border py-2"
              type="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <button
            className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white"
            onClick={loginexp}
          >
            Sign In
          </button>
          <div className="flex justify-between">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
