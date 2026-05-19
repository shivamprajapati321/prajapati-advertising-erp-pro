import AppShell from '@/components/AppShell'
import ProgressBar from '@/components/ProgressBar'
import { projects } from '@/lib/data'

export default function ClientPortalPage() {
  return (
    <AppShell title="Client Portal" subtitle="Client sees project progress, reports and invoice status. Internal expenses and profit are hidden.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="card p-6">
            <div className="flex justify-between gap-4 mb-5">
              <div>
                <h2 className="text-xl font-extrabold">{p.client}</h2>
                <p className="text-slate-500">{p.id} · {p.city}</p>
              </div>
              <span className="badge bg-green-50 text-green-700">Client View</span>
            </div>
            <div className="space-y-5">
              <div><div className="font-semibold mb-2">Overall Progress</div><ProgressBar value={p.progress} /></div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-slate-50 p-4"><div className="font-bold">{p.printing}%</div><div className="text-xs text-slate-500">Printing</div></div>
                <div className="rounded-2xl bg-slate-50 p-4"><div className="font-bold">{p.stitching}%</div><div className="text-xs text-slate-500">Stitching</div></div>
                <div className="rounded-2xl bg-slate-50 p-4"><div className="font-bold">{p.execution}%</div><div className="text-xs text-slate-500">Execution</div></div>
              </div>
              <button className="w-full btn-primary">View Report</button>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  )
}
