"use client";
import React, { useEffect, useState } from "react";
import instance from "../service/api";

export function User() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await instance.get("auth/check", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setUser(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="pt-24 px-20">
      <h1 className="sm:text-3xl text-2xl text-[#FFFFFF] font-extrabold">
        Personal Info
      </h1>
      <p className="text-[#999999] text-[16px] pt-2.5">
        Your profile data, securely stored and managed.
      </p>

      <h1 className="pt-20">User: {user && user.full_name}</h1>
      <p>User: {user && user.email}</p>
    </div>
  );
}

export default User;
