"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // 🟩 Auto redirect jika sudah login
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.replace("/dashboard");
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      // Simpan token
      localStorage.setItem("token", res.data.token);

      // Pindah ke dashboard
      router.push("/dashboard");
    } catch (err) {
      console.error(err.response?.data);
      alert("Login gagal, periksa email & password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex ">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-10 lg:px-20 bg-gray-50">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-semibold text-gray-800 leading-snug">
            Selamat Datang Di Website
            <br />
            <span className="text-green-600">PANTAU by JKN</span>
          </h1>

          <p className="text-gray-600 mt-3 mb-10">
            Masukan akun untuk melakukan pemantauan bersekala Nasional
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email*
              </label>
              <input
                type="text"
                placeholder="admin1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Kata Sandi Siswa*
              </label>
              <input
                type="password"
                placeholder="Masukan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                required
              />
            </div>

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="w-4 h-4 accent-green-600"
              />
              <span className="text-sm text-gray-700">Ingat Kata Sandi</span>
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium transition disabled:opacity-50"
            >
              {isLoading ? "Memproses..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-10 text-sm text-gray-400">
            Design by PANTAU Team
          </p>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2">
        <img
          src="/images/login/img-login.jpg"
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
