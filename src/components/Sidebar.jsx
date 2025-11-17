"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="w-64 bg-white border-r flex flex-col justify-between h-screen p-6 fixed left-0 top-0 overflow-y-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold mb-10 text-black">
          Halaman Admin
        </h1>

        {/* Menu */}
        <div>
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
              pathname === "/dashboard" 
                ? "bg-green-600 text-white" 
                : "text-gray-700 hover:bg-green-50 hover:text-green-600"
            }`}
          >
            <HomeIcon className="w-5" />
            Beranda
          </Link>

          <p className="text-sm text-gray-500 mb-3 mt-8">Kelola JKN</p>

          <div className="space-y-2">
            <Link
              href="/predictive"
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                pathname === "/predictive" 
                  ? "bg-green-600 text-white" 
                  : "text-gray-700 hover:bg-green-50 hover:text-green-600"
              }`}
            >
              <UserIcon className="w-5" />
              AI Predictive
            </Link>

            <Link
              href="/health-index"
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                pathname === "/health-index" 
                  ? "bg-green-600 text-white" 
                  : "text-gray-700 hover:bg-green-50 hover:text-green-600"
              }`}
            >
              <UserIcon className="w-5" />
              Health Accessibility Index
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom User Info */}
      <div className="border-t pt-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">Admin1</p>
            <p className="text-sm text-gray-500">Keluarkan akun</p>
          </div>
          <ArrowRightOnRectangleIcon
            onClick={handleLogout}
            className="w-6 cursor-pointer text-gray-600 hover:text-red-500 flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
}