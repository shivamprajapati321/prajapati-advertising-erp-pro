import ProgressBar from './ProgressBar'

export default function ProjectTable({ projects, showFinance = true }) {
  return (
    <div className="card overflow-hidden">
      <div className="p-6 border-b border-slate-200 flex items-center justify-between">
        <h2 className="text-xl font-extrabold">Project Workflow</h2>
        <span className="badge bg-cyan-50 text-cyan-700">Live</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4">Project</th>
              <th className="text-left p-4">Client</th>
              <th className="text-left p-4">City</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Progress</th>
              {showFinance && <th className="text-right p-4">Profit</th>}
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-900">{p.id}</td>
                <td className="p-4">{p.client}</td>
                <td className="p-4">{p.city}</td>
                <td className="p-4"><span className="badge bg-amber-50 text-amber-700">{p.status}</span></td>
                <td className="p-4 min-w-52"><ProgressBar value={p.progress} /></td>
                {showFinance && <td className="p-4 text-right font-bold text-green-600">₹{p.profit.toLocaleString('en-IN')}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
