import Sidebar from "@/components/Sidebar";

// Fungsi utilitas untuk style status
const getStatusBadge = (status) => {
  let colorClass = '';
  switch (status) {
    case 'Laporan Dikirim':
      colorClass = "bg-yellow-100 text-yellow-800"; // Oranye
      break;
    case 'Disetujui':
      colorClass = "bg-green-100 text-green-800"; // Hijau
      break;
    case 'Ditolak':
      colorClass = "bg-red-100 text-red-800 "; // Merah
      break;
    default:
      colorClass = "bg-gray-200 text-gray-800";
  }
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}>
      {status}
    </span>
  );
};

// --- Data untuk Tabel ---
const activeTasksData = [
  { no: 1, tugas: 'Tambah Tenaga Medis', provinsi: 'Jawa Timur', kabupaten: 'Surabaya', kecamatan: '-', desa: 'Antapani Selatan', prioritas: 'Tinggi', target: '1 lokasi' },
  { no: 2, tugas: 'Bangun Puskesmas', provinsi: 'DKI Jakarta', kabupaten: 'Jakarta Selatan', kecamatan: '-', desa: 'Tenggilis', prioritas: 'Sedang', target: '2 pusatu' },
  { no: 3, tugas: 'Survey Akses Jalan', provinsi: 'DKI Jakarta', kabupaten: 'Jakarta Timur', kecamatan: '-', desa: 'Cibiru', prioritas: 'Tinggi', target: '2 dusun' },
  { no: 4, tugas: 'Tambah Tenaga Medis', provinsi: 'Jawa Barat', kabupaten: 'Bandung', kecamatan: '-', desa: 'Arjasari', prioritas: 'Tinggi', target: '3 dusun' },
  { no: 5, tugas: 'Tambah Tenaga Medis', provinsi: 'Jawa Tengah', kabupaten: 'Semarang', kecamatan: '-', desa: 'Sukajaya', prioritas: 'Sedang', target: '2 dusun' },
  { no: 6, tugas: 'Tambah Tenaga Medis', provinsi: 'Jawa Timur', kabupaten: 'Malang', kecamatan: '-', desa: 'Jayagiri', prioritas: 'Sedang', target: '2 dusun' },
  { no: 7, tugas: 'Tambah Tenaga Medis', provinsi: 'Jawa Barat', kabupaten: 'Bogor', kecamatan: '-', desa: 'Mekarjaya', prioritas: 'Sedang', target: '2 dusun' },
];

const completedVisitsData = [
  { no: 1, tugas: 'Tambah Tenaga Medis', provinsi: 'Jawa Timur', kabupaten: 'Surabaya', desa: 'Antapani Selatan', tanggalSelesai: '11 November 2025', statusVerifikasi: 'Laporan Dikirim' },
  { no: 2, tugas: 'Bangun Puskesmas', provinsi: 'DKI Jakarta', kabupaten: 'Jakarta Selatan', desa: 'Tenggilis', tanggalSelesai: '10 November 2025', statusVerifikasi: 'Disetujui' },
  { no: 3, tugas: 'Survey Akses Jalan', provinsi: 'DKI Jakarta', kabupaten: 'Jakarta Timur', desa: 'Cibiru', tanggalSelesai: '9 November 2025', statusVerifikasi: 'Ditolak' },
  { no: 4, tugas: 'Tambah Tenaga Medis', provinsi: 'Jawa Barat', kabupaten: 'Bandung', desa: 'Arjasari', tanggalSelesai: '10 November 2025', statusVerifikasi: 'Disetujui' },
  { no: 5, tugas : 'Tambah Tenaga Medis', provinsi: 'Jawa Tengah', kabupaten: 'Semarang', desa: 'Sukajaya', tanggalSelesai: '7 November 2025', statusVerifikasi: 'Disetujui' },
  { no: 6, tugas: 'Tambah Tenaga Medis', provinsi: 'Jawa Timur', kabupaten: 'Malang', desa: 'Jayagiri', tanggalSelesai: '9 November 2025', statusVerifikasi: 'Disetujui' },
  { no: 7, tugas: 'Tambah Tenaga Medis', provinsi: 'Jawa Barat', kabupaten: 'Bogor', desa: 'Mekarjaya', tanggalSelesai: '8 November 2025', statusVerifikasi: 'Disetujui' },
];
// ------------------------------------


// --- Komponen Kartu Ringkasan ---
const SummaryCard = ({ title, value }) => (
  <div className={`p-4 rounded-lg bg-white border border-gray-200 shadow-sm`}>
    <p className="text-sm font-medium text-gray-500">{title}</p>
    <p className="text-2xl font-semibold text-gray-900 mt-1">{value !== undefined ? value : ''}</p>
  </div>
);
// ------------------------------------


// --- Komponen Tabel Tugas Aktif ---
const ActiveTasksTable = ({ data }) => (
  <div>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Daftar Tugas Lapangan</h3>

    <div className="flex items-center justify-between mb-4">
      <div className="grid grid-cols-3 gap-4 w-full max-w-xl">
        <SummaryCard title="Total Tugas Aktif" value={data.length}/>
        <SummaryCard title="Selesai Minggu Ini" value={data.length}/>
      </div>
    </div>
    
    {/* Filter */}
    <div className="mb-4">
        <label htmlFor="filter" className="block text-sm font-medium text-gray-500">Filter</label>
        <select
            id="filter"
            name="filter"
            // Mengubah style filter agar lebih minimalis dan sesuai gambar
            className="mt-1 block w-48 pl-3 pr-10 py-2 bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            defaultValue="Belum Dikerjakan"
        >
            <option>Belum Dikerjakan</option>
            <option>Sedang Dikerjakan</option>
            <option>Semua Tugas</option>
        </select>
    </div>

    {/* Tabel */}
    <div className="overflow-x-auto border-t border-gray-200">
      <table className="min-w-full">
        <thead className="bg-white">
          <tr>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">No</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Tugas</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Provinsi</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Kabupaten/Kota</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Kecamatan</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Desa</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Prioritas</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Target</th>
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
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.prioritas}</td> {/* Data Prioritas */}
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.target}</td>    {/* Data Target */}
              <td className="px-3 py-4 whitespace-nowrap text-center text-sm font-medium">
                {/* Mengubah style button agar sesuai gambar kedua (menggunakan warna hijau terang) */}
                <button className="text-white bg-[#58975B] hover:bg-[#4a844d] px-3 py-1 rounded text-xs ">
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
    <div className="overflow-x-auto border-t border-gray-200">
      <table className="min-w-full">
        <thead className="bg-white">
          <tr>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">No</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Tugas</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Provinsi</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Kabupaten/Kota</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Kecamatan</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Desa</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Tanggal Selesai Dikunjungi</th>
            <th className="px-3 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Status Verifikasi</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item) => (
            <tr key={item.no}>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.no}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">{item.tugas}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.provinsi}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.kabupaten}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.kecamatan || '-'}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.desa}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.tanggalSelesai}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                {getStatusBadge(item.statusVerifikasi)}
              </td>
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
      
      <main className="flex-1 lg:ml-64 p-6 space-y-8 mb-8"> 
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