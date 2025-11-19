import Sidebar from "@/components/Sidebar";

export default function HealthIndexPage() {
    // Data dummy untuk tabel
const paymentData = [
    {
        no: 1,
        cardNumber: "350615291170138",
        headFamily: "Deformal Adrian",
        province: "DKI Jakarta",
        regencyCity: "Jakarta Selatan",
        village: "Surabaya",
        status: "Terkirim",
    },
    {
        no: 2,
        cardNumber: "350615291170138",
        headFamily: "Muhammad Jakie",
        province: "Jawa Barat",
        regencyCity: "Jakarta Timur",
        village: "Bandung",
        status: "Belum Terkirim",
    },
    {
        no: 3,
        cardNumber: "350615291170138",
        headFamily: "Ihwanul Fajri",
        province: "Jawa Tengah",
        regencyCity: "Bandung",
        village: "Bandung",
        status: "Terkirim",
    },
    {
        no: 4,
        cardNumber: "350615291170138",
        headFamily: "Dela Fajrianto",
        province: "Jawa Timur",
        regencyCity: "Malang",
        village: "Bandung",
        status: "Terkirim",
    },
    {
        no: 5,
        cardNumber: "350615291170138",
        headFamily: "Arayya Mahmud",
        province: "Jawa Barat",
        regencyCity: "Bogor",
        village: "Bandung",
        status: "Terkirim",
    },
];
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />
            <main className="flex-1 lg:ml-64 p-6 space-y-6">

                {/* Bagian Atas: Informasi Desa & Pengingat Tunggakan */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    
    <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Informasi Desa</h2>
        
        <div className="space-y-2 text-sm text-gray-700">
            {/* Nama Desa */}
            <div className="flex justify-between">
                <span className="text-gray-900">Nama Desa:</span>
                <span className="font-bold text-gray-900">Bojongsoang</span>
            </div>
            
            {/* Data Kartu Keluarga */}
            <div className="flex justify-between">
                <span className="text-gray-900">Data Kartu Keluarga:</span>
                <span className="font-bold text-gray-900">5</span>
            </div>
            
            {/* Resiko Peserta Nonaktif */}
            <div className="flex justify-between">
                <span className="text-gray-900">Resiko Peserta Nonaktif:</span>
                <span className="font-bold text-gray-900">29 orang</span>
            </div>
        </div>
    </div>
    <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Pengingat Tunggakan</h2>
        
        <div className="space-y-2 text-sm text-gray-700">
            {/* Jatuh tempo */}
            <div className="flex justify-between">
                <span className="text-gray-900">Jatuh tempo:</span>
                <span className="font-bold text-gray-900">5 Mei 2026</span>
            </div>
            
            {/* Status */}
            <div className="flex justify-between">
                <span className="text-gray-900">Status:</span>
                <span className="font-bold text-gray-900">Terkirim</span>
            </div>
            
            {/* Keterangan */}
            <div className="flex justify-between">
                <span className="text-gray-900">Keterangan:</span>
                <span className="font-bold text-gray-900">-</span>
            </div>
        </div>
    </div>
</div>

                {/* Bagian Bawah: Daftar Keterlambatan Pembayaran H+5 */}
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Daftar Keterlambatan Pembayaran H+5</h2>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    {/* Tabel */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full"> 
                            {/* divide-y divide-gray-200* */}
                            <thead>
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No Kartu Keluarga</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kepala Keluarga</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provinsi</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kabupaten/Kota</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Desa</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white"> 
                                {/* divide-y divide-gray-200* */}
                                {paymentData.map((item) => (
                                    <tr key={item.no}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.no}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.cardNumber}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.headFamily}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.province}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.regencyCity}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.village}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                item.status === "Terkirim" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                            }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium ">
                                            <button className="text-gray-400 hover:text-gray-600">
                                                {/* SVG Icon untuk menu aksi */}
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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