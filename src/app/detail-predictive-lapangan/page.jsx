"use client"; // <--- INI PENTING! Menandai komponen ini sebagai Client Component

import React, { useState } from "react"; // Import useState
import Sidebar from "@/components/Sidebar";
import Breadcrumb from "../../components/Breadcrumb";

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
  <div className="p-4 bg-white shadow rounded-lg w-full max-w-lg">
    {/* Baris Provinsi */}
    <div className="flex justify-between pb-2">
      <span className="text-base font-medium text-gray-900 w-1/2">
        Provinsi
      </span>
      <span className="text-base text-gray-800 w-1/2">Jawa Tengah</span>
    </div>

    {/* Baris Kota */}
    <div className="flex justify-between pb-2">
      <span className="text-base font-medium text-gray-900 w-1/2">Kota</span>
      <span className="text-base text-gray-800 w-1/2">Bandung</span>
    </div>

    {/* Baris Kecamatan */}
    <div className="flex justify-between pb-2">
      <span className="text-base font-medium text-gray-900 w-1/2">
        Kecamatan
      </span>
      <span className="text-base text-gray-800 w-1/2">Antapani</span>
    </div>

    {/* Baris Desa (Tanpa border-b) */}
    <div className="flex justify-between">
      <span className="text-base font-medium text-gray-900 w-1/2">Desa</span>
      <span className="text-base text-gray-800 w-1/2">Antapani Tengah</span>
    </div>
  </div>
);

// --- START: Komponen Modal Form Laporan ---
const ModalBuatLaporan = ({ isVisible, onClose }) => {
  // Hanya tampilkan modal jika isVisible adalah true
  if (!isVisible) return null;

  // Handler untuk menutup modal ketika mengklik di luar area modal
  const handleBackdropClick = (e) => {
    // Pastikan klik dilakukan pada backdrop (div paling luar)
    if (e.target.id === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full mx-auto transform transition-transform duration-300 scale-100">
        <div className="p-6">
          {/* Header Modal */}
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              Daftar KK Target Kunjungan
            </h3>
            {/* Tombol Close (X) */}
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors"
              onClick={onClose}
              aria-label="Tutup Modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {/* Form Konten */}
          <div className="py-4 max-h-[80vh] overflow-y-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Kolom Kiri: Status Kunjungan, Hasil Sosialisasi, Waktu, Catatan */}
              <div className="space-y-4">
                {/* Status Kunjungan */}
                <div>
                  <label
                    htmlFor="statusKunjungan"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Status Kunjungan*
                  </label>
                  <select
                    id="statusKunjungan"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md shadow-sm border"
                    defaultValue="Bersedia Membayar"
                  >
                    <option>Sudah Dikunjungi</option>
                    <option>Belum Dikunjungi</option>
                    <option>Bersedia Membayar</option>
                  </select>
                </div>

                {/* Hasil Sosialisasi */}
                <div>
                  <label
                    htmlFor="hasilSosialisasi"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Hasil Sosialisasi
                  </label>
                  <select
                    id="hasilSosialisasi"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md shadow-sm border"
                    defaultValue="Berhasil Membantu"
                  >
                    <option>Berhasil Membantu</option>
                    <option>Menolak Bantuan</option>
                    <option>Bersedia Membayar</option>
                  </select>
                </div>

                {/* Waktu (Tanggal) */}
                <div>
                  <label
                    htmlFor="waktu"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Waktu
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                      type="date"
                      id="waktu"
                      className="block w-full border-gray-300 focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md py-2 px-3 border"
                      placeholder="__/__/____"
                    />
                  </div>
                </div>

                {/* Catatan */}
                <div>
                  <label
                    htmlFor="catatan"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Catatan
                  </label>
                  <textarea
                    id="catatan"
                    rows="4"
                    className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                    placeholder="Masukkan Keterangan"
                  ></textarea>
                </div>
              </div>

              {/* Kolom Kanan: Upload Bukti Pembayaran */}
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="buktiPembayaran"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Upload Bukti Pembayaran
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    {/* Input file yang sebenarnya tersembunyi, di-trigger oleh ikon/div */}
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer h-full w-full"
                      id="file-upload"
                    />

                    <input
                      type="text" // Input tampilan
                      id="buktiPembayaran"
                      className="block w-full pr-10 border-gray-300 focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md py-2 px-3 border"
                      placeholder="Pilih file..."
                      readOnly // Hanya untuk tampilan, tidak bisa di-edit langsung
                    />
                    {/* Ikon Upload */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.5 13a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM10.5 13a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM15.5 13a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5z"></path>
                        <path
                          fillRule="evenodd"
                          d="M16 8a4 4 0 00-7.377-2.482A5.996 5.996 0 004 14.996a4 4 0 00.99 7.954l.011-.002A5 5 0 001 20.003V6.5a1.5 1.5 0 011.5-1.5h13A1.5 1.5 0 0116 6.5V8zm-1.5-1.5a.5.5 0 00-.5-.5H3a.5.5 0 00-.5.5V14a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V6.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Footer Modal (Simpan Button) */}
          <div className="pt-4 flex justify-end">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-700 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm transition duration-150"
              onClick={onClose} // Tombol Simpan (contoh: tutup modal setelah submit)
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// --- END: Komponen Modal Form Laporan ---

// Komponen untuk Tabel Target Kunjungan
const KunjunganTable = ({ data, onBuatLaporanClick }) => (
  <div className="bg-white shadow overflow-x-auto sm:rounded-lg">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
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
              className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row) => (
          <tr key={row.no} className="hover:bg-gray-50">
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
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded text-xs transition duration-150 ease-in-out"
                onClick={() => onBuatLaporanClick(row)} // Memicu fungsi di Parent Component
              >
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
  // Mengaktifkan state untuk mengontrol modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKunjungan, setSelectedKunjungan] = useState(null);

  const handleOpenModal = (kunjunganData) => {
    setSelectedKunjungan(kunjunganData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedKunjungan(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex relative pb-16">
      {/* Sidebar */}
      <Sidebar currentPage="AI Predictive" />

      <main className="flex-1 space-y-6 pt-4 px-4 lg:pl-72 lg:pr-4 mb-8 min-w-0">
        <Breadcrumb
          homeText="Ai Predictive"
          currentPageText="Detail Ai Predictive"
        />

        {/* Konten Utama */}
        <h2 className="text-2xl font-bold text-gray-800">
          Daftar KK Target Kunjungan
        </h2>

        <LocationInfo />

        {/* Meneruskan handler ke KunjunganTable */}
        <KunjunganTable
          data={targetKunjunganData}
          onBuatLaporanClick={handleOpenModal}
        />
      </main>

      {/* Modal - Diposisikan di akhir DOM untuk overlay yang benar */}
      <ModalBuatLaporan
        isVisible={isModalOpen}
        onClose={handleCloseModal}
        kunjunganData={selectedKunjungan}
      />

      {/* Footer "DESIGN BY PANTAU Team" */}
      <div className="fixed bottom-0 p-4 left-0 right-0 lg:ml-64 bg-[#58975B] text-white py-2 text-center text-md z-40">
        © Design By PANTAU Team
      </div>
    </div>
  );
}
