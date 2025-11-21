"use client";

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

// Data untuk Tabel (diletakkan di luar komponen atau di file terpisah jika perlu)
const dataWilayahBeresiko = [
  {
    no: 1,
    provinsi: "Jawa Barat",
    kabupaten: "Bandung",
    kecamatan: "Cimahi Utara",
    desa: "Setiamanah",
    prediksiNonAktif: "87%",
    keterangan: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-gray-500 hover:text-blue-500 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    no: 2,
    provinsi: "Jawa Tengah",
    kabupaten: "Semarang",
    kecamatan: "Gayamsari",
    desa: "Sambi",
    prediksiNonAktif: "78%",
    keterangan: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-gray-500 hover:text-blue-500 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    no: 3,
    provinsi: "DKI Jakarta",
    kabupaten: "Jakarta Pusat",
    kecamatan: "Tanah Abang",
    desa: "Petamburan",
    prediksiNonAktif: "55%",
    keterangan: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-gray-500 hover:text-blue-500 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    no: 4,
    provinsi: "Banten",
    kabupaten: "Tangerang",
    kecamatan: "Kelapa Dua",
    desa: "Curug",
    prediksiNonAktif: "82%",
    keterangan: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-gray-500 hover:text-blue-500 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    no: 5,
    provinsi: "Yogyakarta",
    kabupaten: "Sleman",
    kecamatan: "Depok",
    desa: "Caturtunggal",
    prediksiNonAktif: "61%",
    keterangan: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-gray-500 hover:text-blue-500 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
];

  const barData = [
    { name: "Peserta Aktif", value: 82.3 },
    { name: "Peserta NonAktif", value: 17.7 },
  ];

const pieData = [
  { name: "Rendah", value: 30 },
  { name: "Tinggi", value: 55 },
  { name: "Sedang", value: 20 },
];

const COLORS = ["#6A9FF7", "#60D394", "#FFB64D"];

export default function HealthIndexPage() {
  // Ganti nama jika file ini memang untuk Health Index
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 lg:ml-64 p-6 space-y-6 mb-8">
        {/* === Filter Data Daerah === */}
        <div className="bg-white p-6 rounded-xl border-1 border-gray-200">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            Filter Data Daerah
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end mb-8">
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

          {/* === Informasi Daerah, Status Kepesertaan, Wilayah Tunggakan === */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Informasi Daerah */}
            <div className="bg-white p-4 rounded-xl border-1 border-gray-200 transition-all space-y-2">
              <h2 className="text-xl font-semibold mb-4">Informasi Daerah</h2>
              <div className="flex justify-between py-1">
                <span className="font-medium">Provinsi</span>
                <span>Jawa Barat</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-medium">Kota</span>
                <span>Bandung</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-medium">Desa</span>
                <span>Bojongsoang</span>
              </div>
              <button className="text-sm text-green-600 hover:text-green-800 mt-2">
                Lihat detail Peserta NonAktif →
              </button>
            </div>

            {/* Status Kepesertaan Wilayah (Bar Chart Placeholder) */}
            {/* Bar Chart */}
            <div className="bg-white p-4 rounded-xl border-1 border-gray-200 transition-all">
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

            {/* Wilayah Tunggakan Meningkat (Donut Chart Placeholder) */}
            {/* Pie Chart */}
            <div className="bg-white p-4 rounded-xl border-1 border-gray-200 transition-all">
              <h2 className="text-xl font-semibold mb-2">
                Wilayah Tunggakan Meningkat
              </h2>
              <h3 className="font-medium mb-4">
                Kategori Indeks Aksesibilitas
              </h3>

              <div className="w-full h-[200px]">
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

              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs lg:text-sm">
                {pieData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index] }}
                    ></span>
                    <span className="text-gray-700">{entry.name}</span>
                    {/* <span className="text-gray-500">({entry.value}%)</span> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === Daftar Wilayah Beresiko Bulan Depan (Data Table) === */}
        <h2 className="text-xl font-semibold mb-4">
          Daftar Wilayah Beresiko Bulan Depan
        </h2>
        <div className="bg-white p-6 rounded-xl border-1 border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {[
                    "No",
                    "Provinsi",
                    "Kabupaten/Kota",
                    "Kecamatan",
                    "Desa",
                    "Prediksi NonAktif",
                    "Keterangan",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dataWilayahBeresiko.map((row) => (
                  <tr key={row.no} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.no}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.provinsi}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.kabupaten}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.kecamatan}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.desa}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                        row.prediksiNonAktif === "87%"
                          ? "text-red-500 font-bold"
                          : "text-gray-500"
                      }`}
                    >
                      {row.prediksiNonAktif}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm hover:text-[#23903E]">
                      {row.keterangan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      {/* Footer "DESIGN BY PANTAU Team" */}
                <div className="fixed bottom-0 p-4 left-0 right-0 lg:ml-64 bg-[#58975B] text-white  py-2 text-md">
                    © Design By PANTAU Team
                </div>
    </div>
  );
}
