export default function CardStat({ title, value, desc, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl border-1 border-gray-200 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-3xl font-bold mt-2">{value}</p>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>

      {/* icon */}
      <div>{icon}</div>
    </div>
  );
}
