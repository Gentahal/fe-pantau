import Sidebar from "@/components/Sidebar";

export default function HealthIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-4 md:p-6 space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Observasi Data
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-900 mb-1 block">
                  Tugas
                </label>

                <div className="relative w-full">
                  <select className="w-full appearance-none border border-gray-300 rounded-md px-3 py-2 pr-12 text-sm text-gray-900 bg-white focus:outline-none focus:ring-1 focus:ring-green-500">
                    <option>Pilih Tugas</option>
                    <option>Tambah Tenaga Medis</option>
                    <option>Tambah Puskesmas</option>
                  </select>
                  <div className="absolute top-0 right-0 h-full w-12 bg-gray-300 flex items-center justify-center pointer-events-none rounded-r-md">
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-900 mb-1 block">
                  Provinsi
                </label>
                <div className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900">
                  Jawa Barat
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-900 mb-1 block">
                  Kabupaten/Kota
                </label>
                <div className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900">
                  Bandung
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-900 mb-1 block">
                  Kecamatan
                </label>
                <div className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900">
                  Bojongsoang
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-900 mb-1 block">
                  Desa
                </label>
                <div className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900">
                  Bojongsoang
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-900 mb-1 block">
                  Prioritas
                </label>
                <div className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900">
                  Tinggi
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Target
                </label>
                <div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="number"
                      placeholder=""
                      className="w-full sm:w-32 border border-gray-300 rounded-md px-3 py-2 text-sm 
                                            focus:outline-none focus:ring-1 focus:ring-green-500 text-gray-900"
                    />
                    <div className="relative w-full">
                      <select
                        className="w-full appearance-none border border-gray-300 rounded-md px-3 py-2 pr-12 
                                                text-sm text-gray-900 bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
                      >
                        <option value="">Pilih target fasilitas</option>
                        <option value="pustu">Puskesmas Pembantu</option>
                        <option value="rumah-sakit">Rumah Sakit</option>
                        <option value="klinik">Klinik</option>
                      </select>
                      <div
                        className="absolute top-0 right-0 h-full w-12 bg-gray-300 
                                            flex items-center justify-center pointer-events-none rounded-r-md"
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
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Deadline
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-gray-900"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium transition">
              Kirim Laporan
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
