"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import AuthServise from "../service/auth";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === "/login") {
      const navbar = document.querySelector("nav");
      const footer = document.querySelector("footer");

      if (navbar) navbar.style.display = "none";
      if (footer) footer.style.display = "none";
    }

    return () => {
      const navbar = document.querySelector("nav");
      const footer = document.querySelector("footer");

      if (navbar) navbar.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Barcha maydonlarni to'ldiring!");
    }
    try {
      setLoading(true);

      const user = {
        email: email,
        password: password,
      };

      const req = await AuthServise.userLogin(user);

      localStorage.setItem(
        "access_token",
        JSON.stringify(req.data.access_token)
      );
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(req.data.refresh_token)
      );
      console.log(req.data);
      router.push("/");

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border border-[#262626] rounded-lg bg-[#0F0F0F] py-7 px-5">
        <h1 className="text-lg font-medium text-[#F1F1F3] text-center">
          Login
        </h1>
        <form className="flex flex-col w-72 gap-4">
          <label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full border border-gray-600 bg-[#262626] py-1.5 px-3 rounded-md placeholder:text-[#F1F1F3] mt-6"
            />
          </label>
          <label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full border border-gray-600 bg-[#262626] py-1.5 px-3 rounded-md placeholder:text-[#F1F1F3] mt-1"
            />
          </label>

          <button
            disabled={loading}
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-[#E50000] py-1.5 px-3 rounded-md text-[#F1F1F3] mt-3"
          >
            {loading ? "Login..." : "Login"}
          </button>

          <Link href={"/register"}>
            <h1 className="text-sm text-[#BFBFBF] hover:text-white">
              Create Your Account
            </h1>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
