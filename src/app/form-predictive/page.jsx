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

                    {/* GRID - Desktop tetap 2 kolom | Mobile jadi 1 kolom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* LEFT COLUMN */}
                        <div className="space-y-4">

                            <div>
                                <label className="text-sm font-medium text-gray-900 mb-1 block">
                                    Tugas
                                </label>
                                <div className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900">
                                    Sosialisasi
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

                        {/* RIGHT COLUMN */}
                        <div className="space-y-4">

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">
                                    Deadline
                                </label>
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 text-gray-900"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">
                                    Target Kartu Keluarga
                                </label>

                                {/* Mobile: turun kebawah | Desktop: sejajar */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3">

                                    {/* AUTO VALUE - BUKAN INPUT USER */}
                                    <div className="w-full sm:w-24 bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 text-center">
                                        12
                                    </div>

                                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 accent-green-600 cursor-pointer"
                                        />

                                    </label>

                                </div>

                            </div>

                            <div className="flex items-start gap-2 bg-yellow-50 border border-yellow-300 text-yellow-800 p-3 rounded-md text-xs">
                                <span>⚠️</span>
                                <p>
                                    Lakukan sosialisasi kepada 12 target Kartu Keluarga,
                                    <br /> Centang checkbox untuk mengirim laporan sosialisasi
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* BUTTON */}
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
