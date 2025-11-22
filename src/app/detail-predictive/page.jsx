import Sidebar from "@/components/Sidebar";
import Breadcrumb from "../../components/Breadcrumb";

export default function HealthIndexPage() {
  const paymentData = [
    {
      no: 1,
      cardNumber: "350615291170138",
      headFamily: "Deformal Adrian",
      province: "DKI Jakarta",
      regencyCity: "Jakarta Selatan",
      village: "Surabaya",
    },
    {
      no: 2,
      cardNumber: "350615291170138",
      headFamily: "Muhammad Jakie",
      province: "Jawa Barat",
      regencyCity: "Jakarta Timur",
      village: "Bandung",
    },
    {
      no: 3,
      cardNumber: "350615291170138",
      headFamily: "Ihwanul Fajri",
      province: "Jawa Tengah",
      regencyCity: "Bandung",
      village: "Bandung",
    },
    {
      no: 4,
      cardNumber: "350615291170138",
      headFamily: "Dela Fajrianto",
      province: "Jawa Timur",
      regencyCity: "Malang",
      village: "Bandung",
    },
    {
      no: 5,
      cardNumber: "350615291170138",
      headFamily: "Arayya Mahmud",
      province: "Jawa Barat",
      regencyCity: "Bogor",
      village: "Bandung",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex relative pb-16">
      <Sidebar />
      <main className="flex-1 space-y-6 pt-4 px-4 lg:pl-72 lg:pr-4 mb-8 min-w-0">
        <Breadcrumb 
            homeText="Ai Predictive"
            currentPageText="Detail Ai Predictive"
        />
        {/* Bagian Atas: Informasi Desa & Pengingat Tunggakan */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Informasi Desa
            </h2>

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
          {/* <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Pengingat Tunggakan
            </h2>

            <div className="space-y-2 text-sm text-gray-700">

              <div className="flex justify-between">
                <span className="text-gray-900">Jatuh tempo:</span>
                <span className="font-bold text-gray-900">5 Mei 2026</span>
              </div>


              <div className="flex justify-between">
                <span className="text-gray-900">Status:</span>
                <span className="font-bold text-gray-900">Terkirim</span>
              </div>


              <div className="flex justify-between">
                <span className="text-gray-900">Keterangan:</span>
                <span className="font-bold text-gray-900">-</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Bagian Bawah: Daftar Keterlambatan Pembayaran H+5 */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Daftar Keterlambatan Pembayaran H+5
        </h2>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          {/* Tabel */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              {/* divide-y divide-gray-200* */}
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    No Kartu Keluarga
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Kepala Keluarga
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Provinsi
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Kabupaten/Kota
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Desa
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* divide-y divide-gray-200* */}
                {paymentData.map((item) => (
                  <tr
                    key={item.no}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.no}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.cardNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.headFamily}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.province}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.regencyCity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.village}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
        <div className="text-right mt-3">
              <button className="bg-[#2E7D32] text-white border border-[#A5D6A7] hover:bg-green-100 hover:text-gray-900 px-6 py-2 rounded-lg font-medium transition-colors w-full md:w-auto">
                Lakukan Observasi
              </button>
            </div>
      </main>
      {/* Footer "DESIGN BY PANTAU Team" */}
      <div className="fixed bottom-0 p-4 left-0 right-0 lg:ml-64 bg-[#58975B] text-white  py-2 text-md">
        © Design By PANTAU Team
      </div>
    </div>
  );
}
