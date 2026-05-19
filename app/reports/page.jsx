import AppShell from '@/components/AppShell'
import StatCard from '@/components/StatCard'
import { projects } from '@/lib/data'

export default function ReportsPage() {
  return (
    <AppShell title="Reports & Analytics" subtitle="Business intelligence for sales, production, execution, expenses and profit.">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <StatCard title="City Performance" value="3 Cities" />
        <StatCard title="Best Client" value="Astral" />
        <StatCard title="Avg Margin" value="41%" />
        <StatCard title="Delayed Jobs" value="2" />
      </div>
      <div className="card p-8 mt-6">
        <h2 className="text-xl font-extrabold mb-2">Analytics Engine</h2>
        <p className="text-slate-500">Charts and live Supabase reports will be connected in the next step.</p>
      </div>
    </AppShell>
  )
}
