"use client";

import CardStat from "@/components/CardStat";
import { ChartBarIcon, BuildingOfficeIcon, SignalIcon } from "@heroicons/react/24/outline";
import Sidebar from "@/components/Sidebar";

export default function HealthIndexPage() {
  // Data untuk tabel ranking
  const rankingData = [
    { no: 1, desa: "Bojongsani", indeks: 92.5 },
    { no: 2, desa: "Bojongsoang", indeks: 92.5 },
    { no: 3, desa: "Dapeshkokat", indeks: 92.5 },
    { no: 4, desa: "Rana Babak", indeks: 92.5 },
    { no: 5, desa: "Piumpang", indeks: 92.5 },
    { no: 6, desa: "Simpang Semper", indeks: 92.5 },
    { no: 7, desa: "Kapuas Hulu", indeks: 92.5 },
    { no: 8, desa: "Kapuas Hilir", indeks: 92.5 },
  ];

  // Data untuk chart distribusi
  const distributionData = [
    { name: "Jakarta", value: 56 },
    { name: "Jawa Barat", value: 64 },
    { name: "Manado", value: 76 },
    { name: "Sulbar", value: 78 },
    { name: "Papua", value: 70 },
    { name: "Bali", value: 37 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Health Accessibility Index</h1>
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
            icon={<BuildingOfficeIcon className="w-8 h-8 text-blue-600" />}
          />
          <CardStat
            title="Indeks Aksesibilitas Tertinggi"
            value="92.5"
            desc="Skor indeks tertinggi ditemukan"
            icon={<SignalIcon className="w-8 h-8 text-purple-600" />}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Ranking Table */}
          <div className="bg-white rounded-xl p-6 border shadow-sm lg:col-span-2">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Peringkat Aksesibilitas Kesehatan</h2>
              <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                Lihat Semua →
              </button>
            </div>
            
            {/* Tabel Ranking */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">No</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Nama Desa</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Indeks Aksesibilitas</th>
                  </tr>
                </thead>
                <tbody>
                  {rankingData.map((item) => (
                    <tr key={item.no} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">{item.no}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{item.desa}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{item.indeks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="space-y-6">
            {/* Desa Info Card */}
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Desa Bojongsoang</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">10</div>
                  <div className="text-sm text-gray-500 mt-1">Total Fasilitas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10</div>
                  <div className="text-sm text-gray-500 mt-1">Indeks Aksesibilitas</div>
                </div>
              </div>
            </div>

            {/* Distribution Chart */}
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <h2 className="text-lg font-semibold mb-6 text-gray-800">Distribusi Kesehatan per Wilayah</h2>
              <div className="space-y-3">
                {distributionData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${(item.value / 100) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 w-8 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Kategori Indeks */}
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <h2 className="text-lg font-semibold mb-6 text-gray-800">Kategori Indeks Aksesibilitas</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Rendah</span>
                  </div>
                  <span className="text-sm text-gray-500">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Tinggi</span>
                  </div>
                  <span className="text-sm text-gray-500">55%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Sedang</span>
                  </div>
                  <span className="text-sm text-gray-500">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-8">
          © Design By PANTAU Team
        </footer>
      </main>
    </div>
  );
}