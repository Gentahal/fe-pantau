import Sidebar from "@/components/Sidebar";

// --- Data untuk Tabel ---
const activeTasksData = [
  { no: 1, tugas: 'Sosialisasi', provinsi: 'Jawa Timur', kabupaten: 'Surabaya', kecamatan: '-', desa: 'Antapani', targetKK: 14, deadline: '12 November 2025' },
  { no: 2, tugas: 'Sosialisasi', provinsi: 'DKI Jakarta', kabupaten: 'Jakarta Selatan', kecamatan: '-', desa: 'Tenggilis', targetKK: 12, deadline: '12 November 2025' },
  { no: 3, tugas: 'Sosialisasi', provinsi: 'DKI Jakarta', kabupaten: 'Jakarta Timur', kecamatan: '-', desa: 'Cibiru', targetKK: 10, deadline: '12 November 2025' },
  { no: 4, tugas: 'Sosialisasi', provinsi: 'Jawa Barat', kabupaten: 'Bandung', kecamatan: '-', desa: 'Arjasari', targetKK: 3, deadline: '12 November 2025' },
  { no: 5, tugas: 'Sosialisasi', provinsi: 'Jawa Tengah', kabupaten: 'Semarang', kecamatan: '-', desa: 'Sukajaya', targetKK: 12, deadline: '12 November 2025' },
  { no: 6, tugas: 'Sosialisasi', provinsi: 'Jawa Timur', kabupaten: 'Malang', kecamatan: '-', desa: 'Jayagiri', targetKK: 11, deadline: '12 November 2025' },
  { no: 7, tugas: 'Sosialisasi', provinsi: 'Jawa Barat', kabupaten: 'Bogor', kecamatan: '-', desa: 'Mekarjaya', targetKK: 16, deadline: '12 November 2025' },
];

const completedVisitsData = [
  { no: 1, tugas: 'Sosialisasi', desa: 'Antapani', jumlahKK: 14, tanggalSelesai: '11 November 2025' },
  { no: 2, tugas: 'Sosialisasi', desa: 'Tenggilis', jumlahKK: 12, tanggalSelesai: '10 November 2025' },
  { no: 3, tugas: 'Sosialisasi', desa: 'Cibiru', jumlahKK: 10, tanggalSelesai: '9 November 2025' },
  { no: 4, tugas: 'Sosialisasi', desa: 'Arjasari', jumlahKK: 3, tanggalSelesai: '7 November 2025' },
  { no: 5, tugas : 'Sosialisasi', desa: 'Sukajaya', jumlahKK: 12, tanggalSelesai: '7 November 2025' },
  { no: 6, tugas: 'Sosialisasi', desa: 'Jayagiri', jumlahKK: 11, tanggalSelesai: '8 November 2025' },
  { no: 7, tugas: 'Sosialisasi', desa: 'Mekarjaya', jumlahKK: 16, tanggalSelesai: '8 November 2025' },
];
// ------------------------------------


// --- Komponen Kartu Ringkasan ---
const SummaryCard = ({ title, value, isPrimary = false }) => (
  <div className={`p-4 rounded-lg shadow-sm ${isPrimary ? 'bg-white border border-gray-200' : 'bg-white'}`}>
    <p className="text-sm font-medium text-gray-500">{title}</p>
    <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
  </div>
);
// ------------------------------------


// --- Komponen Tabel Tugas Aktif ---
const ActiveTasksTable = ({ data }) => (
  <div>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Daftar Tugas Lapangan</h3>
    
    {/* Ringkasan & Filter */}
    <div className="flex items-center justify-between mb-4">
      <div className="grid grid-cols-3 gap-4 w-full max-w-xl">
        <SummaryCard title="Total Tugas Aktif" value={data.length} isPrimary={true} />
        <SummaryCard title="Selesai Minggu Ini" value="0" isPrimary={true} /> {/* Data ini harusnya dinamis */}
      </div>
    </div>
    
    <div className="mb-4">
        <label htmlFor="filter" className="block text-sm font-medium text-gray-500">Filter</label>
        <select
            id="filter"
            name="filter"
            className="mt-1 block w-48 pl-3 pr-10 py-2 bg-white text-gray-500 border-gray-700 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            defaultValue="Belum Dikerjakan"
        >
            <option>Belum Dikerjakan</option>
            <option>Sedang Dikerjakan</option>
            <option>Semua Tugas</option>
        </select>
    </div>

    {/* Tabel */}
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-white">
          <tr>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">No</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Tugas</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Provinsi</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Kabupaten/Kota</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Kecamatan</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Desa</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Target KK</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Deadline</th>
            <th className="px-3 py-5 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-white ">
          {data.map((item) => (
            <tr key={item.no}>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.no}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">{item.tugas}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.provinsi}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.kabupaten}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.kecamatan}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.desa}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.targetKK}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.deadline}</td>
              <td className="px-3 py-4 whitespace-nowrap text-center text-sm font-medium">
                <button className="text-white bg-[#2E7D32] hover:bg-green-600 px-3 py-1 rounded text-xs ">
                  Lihat Tugas
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
// ------------------------------------


// --- Komponen Tabel Riwayat Kunjungan Selesai ---
const CompletedVisitsTable = ({ data }) => (
  <div >
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Riwayat Kunjungan Selesai</h3>
    
    {/* Tabel */}
    <div className="overflow-x-auto">
      <table className="min-w-full ">
        <thead className="bg-white ">
          <tr>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">No</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Tugas</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Desa</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Jumlah KK</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Tanggal Selesai Dikunjungi</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item) => (
            <tr key={item.no}>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.no}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">{item.tugas}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.desa}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.jumlahKK}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.tanggalSelesai}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
// ------------------------------------


// --- Komponen Halaman Utama ---
export default function HealthIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Asumsi komponen ini sudah menangani navigasi dan tata letak kiri */}
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 p-6 space-y-8"> 
        {/* Konten Halaman Admin */}
        
        {/* Mengubah Beranda menjadi aktif dengan mengubah style pada Sidebar (asumsi) */}
        
        {/* Daftar Tugas Lapangan */}
        <ActiveTasksTable data={activeTasksData} />
        
        {/* Riwayat Kunjungan Selesai */}
        <CompletedVisitsTable data={completedVisitsData} />

        
      </main>
      {/* Footer "DESIGN BY PANTAU Team" */}
                <div className="fixed bottom-0 p-4 left-0 right-0 lg:ml-64 bg-[#58975B] text-white  py-2 text-md">
                    *DESIGN BY PANTAU Team
                </div>
    </div>
    
  );
}
// ------------------------------------