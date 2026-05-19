import AppShell from '@/components/AppShell'
import StatCard from '@/components/StatCard'
import ProjectTable from '@/components/ProjectTable'
import { projects, expenses, timeline } from '@/lib/data'

export default function DashboardPage() {
  const revenue = projects.reduce((sum, p) => sum + p.revenue, 0)
  const expenseTotal = projects.reduce((sum, p) => sum + p.expenses, 0)
  const profit = revenue - expenseTotal

  return (
    <AppShell title="Enterprise Dashboard" subtitle="Real-time control of orders, production, execution, expenses and profitability.">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
        <StatCard title="Total Revenue" value={`₹${revenue.toLocaleString('en-IN')}`} note="Demo business snapshot" />
        <StatCard title="Total Expenses" value={`₹${expenseTotal.toLocaleString('en-IN')}`} note="Project-wise expenses" />
        <StatCard title="Net Profit" value={`₹${profit.toLocaleString('en-IN')}`} note="Admin/accountant only" />
        <StatCard title="Active Projects" value={projects.length} note="Running campaigns" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <ProjectTable projects={projects} showFinance />
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-extrabold mb-5">Expense Control</h2>
            <div className="space-y-4">
              {expenses.map((e) => (
                <div key={e.id} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-none">
                  <div>
                    <div className="font-semibold">{e.category}</div>
                    <div className="text-xs text-slate-500">{e.project} · {e.team}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">₹{e.amount.toLocaleString('en-IN')}</div>
                    <div className="text-xs text-slate-500">{e.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-extrabold mb-5">Live Timeline</h2>
            <div className="space-y-4">
              {timeline.map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 mt-1.5" />
                  <div>
                    <div className="font-medium text-slate-800">{item}</div>
                    <div className="text-xs text-slate-500">Today</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
