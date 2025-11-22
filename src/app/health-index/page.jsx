"use client";

import CardStat from "@/components/CardStat";
Breadcrumb;
import {
  ChartBarIcon,
  BuildingOfficeIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "@/components/Sidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Breadcrumb from "../../components/Breadcrumb";

export default function HealthIndexPage() {
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

  const distributionData = [
    { name: "Jakarta", value: 56 },
    { name: "Jawa Barat", value: 64 },
    { name: "Manado", value: 76 },
    { name: "Sulbar", value: 78 },
    { name: "Papua", value: 70 },
    { name: "Bali", value: 37 },
  ];

  const barData = [
    { name: "Jakarta", value: 56 },
    { name: "Jawa Barat", value: 64 },
    { name: "Manado", value: 76 },
    { name: "Sulbar", value: 78 },
    { name: "Papua", value: 70 },
    { name: "Bali", value: 37 },
  ];

  const pieData = [
    { name: "Rendah", value: 30 },
    { name: "Tinggi", value: 55 },
    { name: "Sedang", value: 20 },
  ];

  const COLORS = ["#6A9FF7", "#60D394", "#FFB64D"];
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-6 space-y-6 mb-8">
        <Breadcrumb homeText="Health Accessibility Index" isDashboard={true} />
        <div className="">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            Filter Data Daerah
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Provinsi
              </label>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent w-full">
                <option>Pilih Provinsi</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Kota
              </label>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent w-full">
                <option>Pilih Kota</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Desa
              </label>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent w-full">
                <option>Pilih Desa</option>
              </select>
            </div>
            <div className="flex flex-row gap-3 mt-auto md:mt-0 col-span-1 md:col-span-2 lg:col-span-2">
              <button className="bg-[#E8F5E9] text-green-700 border border-[#A5D6A7] hover:bg-green-100 px-6 py-2 rounded-lg font-medium transition-colors w-full md:w-auto">
                Terapkan Filter
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors w-full md:w-auto">
                Reset Filter
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          Satuan Data Daerah
        </h2>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border-1 border-gray-200 lg:col-span-2">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Peringkat Aksesibilitas Kesehatan
              </h2>
              <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                Lihat Semua →
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                      No
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                      Nama Desa
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                      Indeks Aksesibilitas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rankingData.map((item) => (
                    <tr
                      key={item.no}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {item.no}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {item.desa}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {item.indeks}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border-1 border-gray-200 flex flex-col items-center">
            <div className="w-full flex justify-center py-4">
              <img
                src="/images/kdpdt.png"
                alt="Logo Kementerian/Daerah"
                className="max-w-xs w-4/5 h-auto mx-auto"
              />
            </div>

            <h2 className="text-xl font-extrabold mb-8 text-gray-800 text-center">
              Desa Bojongsoang
            </h2>
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="bg-white p-4 rounded-xl border-1 border-gray-200 hover:border-[#2E7D32] transition-all">
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-2xl font-extrabold text-[#2E7D32]">
                      10
                    </div>
                    <BuildingOfficeIcon className="w-10 h-10 text-[#2E7D32]" />
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    Total Fasilitas
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border-1 border-gray-200 hover:border-[#2E7D32] transition-all">
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-2xl font-extrabold text-[#2E7D32]">
                      10
                    </div>
                    <BuildingOfficeIcon className="w-10 h-10 text-[#2E7D32]" />
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    Indeks Aksesibilitas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-xl border-1 border-gray-200 lg:p-6">
            <h2 className="font-semibold mb-4 text-gray-800 text-lg">
              Peserta Terancam Penonaktifan
            </h2>

            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                >
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    fontSize={12}
                  />
                  <YAxis fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="value" fill="#2E7D32" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border-1 border-gray-200 lg:p-6">
            <h2 className="font-semibold mb-4 text-gray-800 text-lg">
              Kategori Indeks Aksesibilitas
            </h2>

            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs lg:text-sm">
              {pieData.map((entry, index) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  ></span>
                  <span className="text-gray-700">{entry.name}</span>
                  <span className="text-gray-500">({entry.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 p-4 left-0 right-0 lg:ml-64 bg-[#58975B] text-white  py-2 text-md">
        © Design By PANTAU Team
      </div>
    </div>
  );
}
