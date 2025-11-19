import Sidebar from "@/components/Sidebar";
import { ChartBarIcon, BuildingOfficeIcon, SignalIcon } from "@heroicons/react/24/outline";
export default function HealthIndexPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />

            <main className="flex-1 lg:ml-64 p-6 space-y-6">
                {/* Detail Health Accessibility Index */}
                <section className="space-y-6">
                    {/* Header */}
                    <h2 className="text-xl font-semibold text-gray-900">Detail Health Accessibility Index</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Informasi Desa */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border">
                            <h3 className="font-semibold mb-4 text-gray-900">Informasi Desa</h3>
                            <div className="text-sm space-y-2">
                                <div className="flex justify-between font-medium text-gray-900">
                                    <span className="font-bold text-gray-900">Nama Desa:</span>
                                    <span className="font-bold text-gray-900">Bojongsong</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold text-gray-900">Data Kartu Keluarga:</span>
                                    <span className="font-bold text-gray-900">100</span>
                                </div>
                                <div className="flex justify-between font-medium text-gray-900">
                                    <span className="font-bold text-gray-900">Jumlah Faskes:</span>
                                    <span className="font-bold text-gray-900">2</span>
                                </div>
                            </div>
                        </div>
                        {/* Indeks Aksesibilitas */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border flex justify-between items-center">
                        <div className="flex flex-col justify-between">
                            <h3 className="font-semibold mb-2 text-[#2E7D32]">Indeks Aksesibilitas Kesehatan</h3>
                            <div>
                                {/* kurang icon */}
                                <p className="text-4xl font-bold text-[#2E7D32] mt-5">75.9</p>
                                <p className="text-sm text-gray-500 text-gray-900">Skor Aksesibilitas</p>
                            </div>
                        </div>
                       <ChartBarIcon className="w-10 h-10 text-[#2E7D32] " />
                    </div>
                    </div>
                </section>

                {/* Fasilitas Terdekat */}
                <section className="space-y-4">
                    <h3 className="font-semibold text-lg text-gray-900">Fasilitas Kesehatan Terdekat</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Klinik */}
                        <div className="bg-white p-6 rounded-2xl border shadow-sm">
                            <h4 className="font-semibold mb-3 text-gray-900">Klinik: Klinik Fikri Medika</h4>
                            <ul className="text-sm space-y-2 text-gray-900">
                                {/* belum ada icon */}
                                <li> Jl. Raya Terusan Buah Batu No 12</li>
                                <li> Kamar Tersedia: 4</li>
                                <li> 3 Dokter</li>
                            </ul>
                        </div>

                        {/* Puskesmas */}
                        <div className="bg-white p-6 rounded-2xl border shadow-sm">
                            <h4 className="font-semibold mb-3 text-gray-900">Puskesmas: Puskesmas Harapan Umat</h4>
                            <ul className="text-sm space-y-2 text-gray-900">
                                {/* belum ada icon */}
                                <li> Jl. Raya Terusan Buah Batu No 12</li>
                                <li> Kamar Tersedia: -</li>
                                <li> 3 Dokter</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    <section className="bg-[#E8F5E9] border border-green-200 p-6 rounded-2xl shadow-sm flex-1">
                        <h4 className="font-semibold mb-2 text-[#2E7D32]">Rekomendasi AI</h4>
                        <p className="text-[#2E7D32]">
                            Fokus pada Puskesmas karena transportasi ke fasilitas kesehatan cukup terbatas. Dan konsman layanan kamar perawatan jarak dan pengingatannya rendah, lebih baik mengalihkan rujukan ke layanan antara fasilitas kesehatan yang ada di desa ini.
                        </p>
                    </section>


                    <div className="flex flex-col gap-4 lg:w-64">
                        <button className="bg-[#2E7D32] hover:bg-green-700 text-white px-5 py-3 rounded-xl shadow w-full">
                            Lakukan Observasi
                        </button>
                        <button className="bg-[#FBC02D] hover:bg-yellow-600 text-black px-5 py-3 rounded-xl shadow w-full">
                             Edit Informasi Desa
                        </button>
                    </div>
                </div>
                {/* Footer "DESIGN BY PANTAU Team" */}
                <div className="absolute bottom-0 p-4 left-0 right-0 lg:ml-64 bg-[#58975B] text-white  py-2 text-md">
                    *DESIGN BY PANTAU Team
                </div>
            </main>
        </div>
    );
}
