import AppShell from '@/components/AppShell'
import ProgressBar from '@/components/ProgressBar'
import { projects } from '@/lib/data'

export default function OperationsPage() {
  return (
    <AppShell title="Operations Control" subtitle="Printing, stitching and execution progress without exposing client payment or profit to operation users.">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="card p-6">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h2 className="font-extrabold text-xl">{p.id}</h2>
                <p className="text-slate-500">{p.client} · {p.city}</p>
              </div>
              <span className="badge bg-cyan-50 text-cyan-700">{p.qty} Qty</span>
            </div>
            <div className="space-y-5">
              <div><div className="font-semibold mb-2">Printing</div><ProgressBar value={p.printing} /></div>
              <div><div className="font-semibold mb-2">Stitching</div><ProgressBar value={p.stitching} /></div>
              <div><div className="font-semibold mb-2">Execution</div><ProgressBar value={p.execution} /></div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  )
}
