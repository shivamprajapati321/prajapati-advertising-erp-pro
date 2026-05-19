export default function StatCard({ title, value, note }) {
  return (
    <div className="card p-6">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="text-3xl font-extrabold text-slate-950 mt-2">{value}</div>
      {note && <div className="text-sm text-slate-400 mt-2">{note}</div>}
    </div>
  )
}
