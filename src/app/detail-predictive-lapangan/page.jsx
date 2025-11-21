import Sidebar from "@/components/Sidebar";
import Breadcrumb from "../../components/Breadcrumb";
Breadcrumb

// Data untuk tabel
const targetKunjunganData = [
  {
    no: 1,
    noKartuKeluarga: "350615291110138",
    kepalaKeluarga: "Budi Santoso",
    dusunRT: "01/02",
    statusKunjungan: "Sudah Dikunjungi",
    hasilSosialisasi: "Berhasil Membantu",
    catatan: "Pembayaran dilakukan secara bertahap",
  },
  {
    no: 2,
    noKartuKeluarga: "350615291110138",
    kepalaKeluarga: "Budi Santoso",
    dusunRT: "03/04",
    statusKunjungan: "Belum Dikunjungi",
    hasilSosialisasi: "Menolak Bantuan",
    catatan: "Pembayaran dilakukan secara bertahap",
  },
  {
    no: 3,
    noKartuKeluarga: "350615291110138",
    kepalaKeluarga: "Budi Santoso",
    dusunRT: "01/02",
    statusKunjungan: "Sudah Dikunjungi",
    hasilSosialisasi: "Berhasil Membantu",
    catatan: "Pembayaran dilakukan secara bertahap",
  },
  {
    no: 4,
    noKartuKeluarga: "350615291110138",
    kepalaKeluarga: "Budi Santoso",
    dusunRT: "01/02",
    statusKunjungan: "Sudah Dikunjungi",
    hasilSosialisasi: "Berhasil Membantu",
    catatan: "Pembayaran dilakukan secara bertahap",
  },
  {
    no: 5,
    noKartuKeluarga: "350615291110138",
    kepalaKeluarga: "Budi Santoso",
    dusunRT: "01/02",
    statusKunjungan: "Sudah Dikunjungi",
    hasilSosialisasi: "Berhasil Membantu",
    catatan: "Pembayaran dilakukan secara bertahap",
  },
  {
    no: 6,
    noKartuKeluarga: "350615291110138",
    kepalaKeluarga: "Budi Santoso",
    dusunRT: "01/02",
    statusKunjungan: "Sudah Dikunjungi",
    hasilSosialisasi: "Berhasil Membantu",
    catatan: "Pembayaran dilakukan secara bertahap",
  },
  {
    no: 7,
    noKartuKeluarga: "350615291110138",
    kepalaKeluarga: "Budi Santoso",
    dusunRT: "01/02",
    statusKunjungan: "Sudah Dikunjungi",
    hasilSosialisasi: "Berhasil Membantu",
    catatan: "Pembayaran dilakukan secara bertahap",
  },
];

// Komponen untuk badge (seperti Status Kunjungan dan Hasil Sosialisasi)
const Badge = ({ children, type }) => {
  let bgColor = "";
  if (type === "success") {
    bgColor = "bg-green-100 text-green-800";
  } else if (type === "warning") {
    bgColor = "bg-yellow-100 text-yellow-800";
  } else if (type === "danger") {
    bgColor = "bg-red-100 text-red-800 ";
  } else {
    bgColor = "bg-gray-200 text-gray-800";
  }

  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${bgColor}`}>
      {children}
    </span>
  );
};

// Komponen untuk bagian Informasi Lokasi
const LocationInfo = () => (
  <div className="p-4 bg-white shadow rounded-lg w-full max-w-sm">
    {/* Baris Provinsi */}
    <div className="flex justify-between pb-2 mb-2">
      <span className="text-base font-bold text-gray-900">Provinsi</span>
      <span className="text-base text-gray-800">Jawa Tengah</span>
    </div>

    {/* Baris Kota */}
    <div className="flex justify-between pb-2 mb-2">
      <span className="text-base font-bold text-gray-900">Kota</span>
      <span className="text-base text-gray-800">Bandung</span>
    </div>

    {/* Baris Kecamatan */}
    <div className="flex justify-between pb-2 mb-2">
      <span className="text-base font-bold text-gray-900">Kecamatan</span>
      <span className="text-base text-gray-800">Antapani</span>
    </div>

    {/* Baris Desa (Tanpa border-b) */}
    <div className="flex justify-between">
      <span className="text-base font-bold text-gray-900">Desa</span>
      <span className="text-base text-gray-800">Antapani Tengah</span>
    </div>
  </div>
);

// Komponen untuk Tabel Target Kunjungan
const KunjunganTable = ({ data }) => (
  <div className="bg-white shadow overflow-x-auto sm:rounded-lg">
    <table className="min-w-full">
      <thead>
        <tr>
          {[
            "No",
            "No Kartu Keluarga",
            "Kepala Keluarga",
            "Dusun/RT",
            "Status Kunjungan",
            "Hasil Sosialisasi",
            "Catatan",
            "Aksi",
          ].map((header) => (
            <th
              key={header}
              scope="col"
              className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white">
        {data.map((row) => (
          <tr key={row.no}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {row.no}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {row.noKartuKeluarga}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {row.kepalaKeluarga}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {row.dusunRT}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              <Badge
                type={
                  row.statusKunjungan === "Sudah Dikunjungi"
                    ? "success"
                    : "warning"
                }
              >
                {row.statusKunjungan}
              </Badge>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              <Badge
                type={
                  row.hasilSosialisasi === "Berhasil Membantu"
                    ? "success"
                    : "danger"
                }
              >
                {row.hasilSosialisasi}
              </Badge>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <div className="bg-gray-200 text-gray-700 rounded p-1 text-center text-xs w-40 truncate">
                {row.catatan}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded text-xs">
                Buat Laporan
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function HealthIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex relative pb-16">
      {/* Sidebar - Pastikan styling di dalamnya cocok dengan gambar kedua */}
      <Sidebar currentPage="Beranda" />

      <main className="flex-1 space-y-6 pt-4 px-4 lg:pl-72 lg:pr-4 mb-8 min-w-0">
        <Breadcrumb 
                    homeText="Ai Predictive"
                    currentPageText="Detail Ai Predictive"
                />
        <h2 className="text-2xl font-bold text-gray-800">
          Daftar KK Target Kunjungan
        </h2>

        <LocationInfo />

        <KunjunganTable data={targetKunjunganData} />
      </main>
      {/* Footer "DESIGN BY PANTAU Team" */}
      <div className="fixed bottom-0 p-4 left-0 right-0 lg:ml-64 bg-[#58975B] text-white  py-2 text-md">
        © Design By PANTAU Team
      </div>
    </div>
  );
}
