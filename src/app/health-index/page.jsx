"use client";

import CardStat from "@/components/CardStat";
import { ChartBarIcon, BuildingOfficeIcon, SignalIcon } from "@heroicons/react/24/outline";
import Sidebar from "@/components/Sidebar";

export default function HealthIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Kesehatan</h1>
          <div className="text-sm text-gray-500">Last updated: Today</div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">Filter Data Daerah</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent w-full">
              <option>Pilih Provinsi</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent w-full">
              <option>Pilih Kota</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent w-full">
              <option>Pilih Desa</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Terapkan Filter
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors">
              Reset Filter
            </button>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardStat
            title="Rata-rata Indeks Aksesibilitas"
            value="63.65"
            desc="Indeks rata-rata seluruh wilayah"
            icon={<ChartBarIcon className="w-8 h-8 text-green-600" />}
            trend="up"
          />
          <CardStat
            title="Total Fasilitas Kesehatan"
            value="92.5"
            desc="Jumlah fasilitas yang terdata"
            icon={<BuildingOfficeIcon className="w-8 h-8 text-green-600" />}
          />
          <CardStat
            title="Indeks Aksesibilitas Tertinggi"
            value="92.5"
            desc="Skor indeks tertinggi ditemukan"
            icon={<SignalIcon className="w-8 h-8 text-green-600" />}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Ranking Table */}
          <div className="bg-white rounded-xl p-6 border shadow-sm lg:col-span-2">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Peringkat Aksesibilitas Kesehatan</h2>
              <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                Lihat Semua →
              </button>
            </div>
            <div className="text-center py-12 text-gray-400">
              <ChartBarIcon className="w-12 h-12 mx-auto mb-3" />
              <p>Tabel ranking desa akan ditampilkan di sini</p>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h2 className="text-lg font-semibold mb-6 text-gray-800">Distribusi Kesehatan per Wilayah</h2>
            <div className="text-center py-8 text-gray-400">
              <SignalIcon className="w-12 h-12 mx-auto mb-3" />
              <p>Chart distribusi akan ditampilkan di sini</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h2 className="text-lg font-semibold mb-6 text-gray-800">Informasi Tambahan</h2>
            <div className="text-center py-8 text-gray-400">
              <BuildingOfficeIcon className="w-12 h-12 mx-auto mb-3" />
              <p>Informasi tambahan wilayah</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}