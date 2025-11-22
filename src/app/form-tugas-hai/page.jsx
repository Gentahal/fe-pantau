import Sidebar from "@/components/Sidebar";

export default function HealthIndexFormPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />

            <main className="flex-1 lg:ml-64 p-6 space-y-6">
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-base font-semibold mb-2 text-gray-900">Pengerjaan Tugas (Langkah 1 dari 2)</h2>
                    <h3 className="text-sm font-medium text-gray-900 mb-6">Langkah 1 : Survei Lapangan</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                        <div className="space-y-4">

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">Provinsi</label>
                                <div className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 h-10 flex items-center text-sm text-gray-900">
                                    Jawa Barat
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">Kabupaten/Kota</label>
                                <div className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 h-10 flex items-center text-sm text-gray-900">
                                    Bandung
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">Kecamatan</label>
                                <div className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 h-10 flex items-center text-sm text-gray-900">
                                    Bojongsoang
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">Desa</label>
                                <div className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 h-10 flex items-center text-sm text-gray-900">
                                    Bojongsoang
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">Nama Fasilitas Kesehatan</label>
                                <input
                                    className="w-full border border-gray-300 rounded-md px-3 h-10 text-sm bg-white text-gray-900"
                                    defaultValue=""
                                />
                            </div>

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">Jenis Fasilitas Kesehatan</label>

                                <div className="relative w-full">
                                    <select
                                        className="w-full appearance-none border border-gray-300 rounded-md 
                                            px-3 h-10 pr-12 text-sm text-gray-900 bg-white focus:outline-none"
                                    >
                                        <option>Puskesmas</option>
                                        <option>Klinik</option>
                                        <option>Rumah Sakit</option>
                                    </select>

                                    <div className="absolute top-0 right-0 h-10 w-12 bg-gray-300 flex items-center justify-center rounded-r-md pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="space-y-4">

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">Nama Pegawai Faskes Yang Ditemui</label>
                                <input
                                    className="w-full border border-gray-300 rounded-md px-3 h-10 text-sm bg-white text-gray-900"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">Nomor Induk Pegawai</label>
                                <input
                                    className="w-full border border-gray-300 rounded-md px-3 h-10 text-sm bg-white text-gray-900"
                                    defaultValue="123456789"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">Tanggal Dikunjungi</label>
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 rounded-md px-3 h-10 text-sm bg-white text-gray-900"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">Upload Bukti Kunjungan</label>

                                <div className="relative w-full">
                                    <input
                                        readOnly
                                        placeholder="Pilih file..."
                                        className="w-full border border-gray-300 rounded-md px-3 h-10 text-sm pr-12 bg-white text-gray-900"
                                    />

                                    <input id="file-upload" type="file" className="hidden" />

                                    <label
                                        htmlFor="file-upload"
                                        className="absolute top-0 right-0 h-10 w-12 bg-gray-300 flex items-center justify-center rounded-r-md cursor-pointer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V3m0 0l-4 4m4-4 4 4" />
                                        </svg>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">Jumlah Tenaga Medis Saat Ini</label>
                                <input
                                    className="w-full border border-gray-300 rounded-md px-3 h-10 text-sm bg-white text-gray-900"
                                    defaultValue="9"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">Jumlah Tenaga Medis Tidak Hadir</label>
                                <input
                                    className="w-full border border-gray-300 rounded-md px-3 h-10 text-sm bg-white text-gray-900"
                                    defaultValue="3"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-base font-semibold mb-2 text-gray-900">
                        Pengerjaan Tugas (Langkah 2 dari 2)
                    </h2>
                    <h3 className="text-sm font-medium text-gray-900 mb-6">
                        Langkah 2 : Pelaksanaan Tindak Lanjut
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">
                                    Status Proses Rekrutmen
                                </label>
                                <div className="relative w-full">
                                    <select className="w-full appearance-none border border-gray-300 rounded-md px-3 py-2 pr-12 text-sm bg-white text-gray-900 focus:outline-none">
                                        <option>Belum</option>
                                        <option>Sedang Berjalan</option>
                                        <option>Selesai</option>
                                    </select>
                                    <div className="absolute top-0 right-0 h-full w-12 bg-gray-300 flex items-center justify-center rounded-r-md pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4 text-gray-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">
                                    Nomor Induk Karyawan
                                </label>

                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm pr-12 bg-white text-gray-900 focus:outline-none"
                                        placeholder="Masukkan NIK"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium text-gray-900 mb-1 block">
                                    Nama Karyawan
                                </label>
                                <input
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm pr-12 bg-white text-gray-900 focus:outline-none"
                                    defaultValue=""
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-900 mb-1 block">
                                Konfirmasi Rekrutmen Tenaga Medis
                            </label>
                            <div className="relative w-full">

                                <input
                                    readOnly
                                    placeholder="Pilih file..."
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm pr-12 bg-white text-gray-900"
                                />

                                <input id="file-upload" type="file" className="hidden" />

                                <label
                                    htmlFor="file-upload"
                                    className="absolute top-0 right-0 h-full w-12 bg-gray-300 flex items-center justify-center rounded-r-md cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V3m0 0l-4 4m4-4 4 4"
                                        />
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex justify-end mt-6">
                    <button className="bg-[#2E7D32] hover:bg-green-700 text-white px-10 py-2 rounded-full text-sm font-medium">
                        Kirim Laporan
                    </button>
                </div>
            </main>
        </div>
    );
}
