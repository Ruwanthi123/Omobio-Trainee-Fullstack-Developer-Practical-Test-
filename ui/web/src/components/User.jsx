import React, { useEffect, useState } from "react";
import { endsession, getuseremail } from "../session/Session";
import axios from "axios";

export default function User() {
  const [active, setactive] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    if (!getuseremail()) {
      window.location = "/";
    } else {
      setactive(true);
      axios
        .get("http://localhost/OMB/user.php?email=" + getuseremail())
        .then((res) => {
          setdata(res.data);
        });
    }
  }, []);
  function logoutexp() {
    endsession();
    window.location = "/";
  }
  return (
    <div class="grid grid-cols-1 mx-auto max-w-[800px] overflow-hidden justify-center mt-8 bg-white shadow sm:rounded-lg">
      {active ? (
        <div>
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Profile Details
            </h3>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500"> ID:</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data.id}
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Name</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data.name}
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">User Name:</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data.username}
                </dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  Email address :
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data.email}
                </dd>
              </div>
              <button
                className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white"
                onClick={logoutexp}
              >
                Logout
              </button>
            </dl>
          </div>
        </div>
      ) : null}
    </div>
  );
}
