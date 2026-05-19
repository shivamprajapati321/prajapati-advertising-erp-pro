export default function ProgressBar({ value }) {
  return (
    <div>
      <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full rounded-full bg-cyan-500" style={{ width: `${value}%` }} />
      </div>
      <div className="text-xs text-slate-500 mt-1">{value}% completed</div>
    </div>
  )
}
