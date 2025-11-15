"use client";
import React, { useEffect, useState } from "react";
import AuthServise, { RegisterUser } from "../service/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === "/register") {
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !email || !password) {
      return toast.error("Barcha maydonlarni to'ldiring!");
    }

    try {
      setLoading(true);

      const user:RegisterUser = {
        full_name: name,
        email: email,
        password: password,
      };

      const response = await AuthServise.userRegister(user);
      toast.success(response.data.message, { position: "top-center" });

      setTimeout(() => {
        router.push("/login");
      }, 900);

      setName("");
      setEmail("");
      setPassword("");
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        console.log(err.response?.data || err.message);
      } else {
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border border-[#262626] rounded-lg bg-[#0F0F0F] py-7 px-5">
        <h1 className="text-[20px] font-medium text-[#F1F1F3] text-center">
          Register
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-72 gap-4">
          <label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full name"
              className="w-full border border-gray-600 bg-[#262626] py-1.5 px-3 rounded-md mt-6 placeholder:text-[#F1F1F3]"
            />
          </label>
          <label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full border border-gray-600 bg-[#262626] py-1.5 px-3 rounded-md placeholder:text-[#F1F1F3] mt-1"
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

            type="submit"
            className="w-full bg-[#E50000] py-1.5 px-3 rounded-md text-[#F1F1F3] mt-3"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <h1 className="text-sm text-[#F1F1F3] select-none mb-1 ">
            Already have an account?
            <Link href={"/login"} className="text-red-500">
              {" "}
              Sign in
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}

export default Register;
