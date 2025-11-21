"use client";

import Sidebar from "@/components/Sidebar";
Breadcrumb
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

export default function DashboardPage() {
  // Data grafik bar
  const barData = [
    { name: "Jakarta", value: 56 },
    { name: "Jawa Barat", value: 64 },
    { name: "Manado", value: 76 },
    { name: "Sulbar", value: 78 },
    { name: "Papua", value: 70 },
    { name: "Bali", value: 37 },
  ];

  // Data donut chart
  const pieData = [
    { name: "Rendah", value: 30 },
    { name: "Tinggi", value: 55 },
    { name: "Sedang", value: 20 },
  ];

  const COLORS = ["#6A9FF7", "#60D394", "#FFB64D"];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      {/* Content */}
      <main className="flex-1 lg:ml-64 p-6 mb-8">
        <Breadcrumb homeText="Beranda" isDashboard={true}/>
        {/* Header */}
        <div className="mb-6 lg:mb-8 mt-16 lg:mt-0">
          <h1 className="text-xl lg:text-3xl font-semibold text-gray-900">
            Selamat Datang, Admin1!
          </h1>
          <p className="text-gray-600 mt-2 text-sm lg:text-base">
            Selamat datang kembali ke dasbor kesehatan pribadi Anda. Tetap
            termotivasi dan lacak kemajuan Anda!
          </p>
        </div>

        {/* Charts Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Bar Chart */}
          <div className="bg-white p-4 rounded-xl border-1 border-gray-200 lg:p-6">
            <h2 className="font-semibold mb-4 text-gray-800 text-lg">
              Peserta Terancam Penonaktifan
            </h2>

            <div className="w-full h-[250px] lg:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{ top: 20, right: 10, left: 0, bottom: 40 }}
                >
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    fontSize={10}
                    interval={0}
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

          {/* Pie Chart */}
          <div className="bg-white p-4 rounded-xl border-1 border-gray-200 lg:p-6">
            <h2 className="font-semibold mb-4 text-gray-800 text-lg">
              Kategori Indeks Aksesibilitas
            </h2>

            <div className="w-full h-[250px] lg:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
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
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mt-4 text-xs">
              {pieData.map((entry, index) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  ></span>
                  <span className="text-gray-700 text-xs lg:text-sm">{entry.name}</span>
                  <span className="text-gray-500 text-xs lg:text-sm">({entry.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer "DESIGN BY PANTAU Team" */}
        <div className="fixed bottom-0 p-4 left-0 right-0 lg:ml-64 bg-[#58975B] text-white  py-2 text-md">
          © Design By PANTAU Team
        </div>
      </main>
    </div>
  );
}
