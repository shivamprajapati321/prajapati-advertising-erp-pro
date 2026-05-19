import AppShell from '@/components/AppShell'
import StatCard from '@/components/StatCard'
import { expenses, projects } from '@/lib/data'

export default function ExpensesPage() {
  const total = expenses.reduce((s, e) => s + e.amount, 0)

  return (
    <AppShell title="Expense & Profitability" subtitle="Track hotel, auto, food, bus, labour, material and other expenses project-wise.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <StatCard title="Submitted Expenses" value={`₹${total.toLocaleString('en-IN')}`} />
        <StatCard title="Pending Approval" value="₹62,000" />
        <StatCard title="Paid Expenses" value="₹12,700" />
      </div>

      <div className="card overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-extrabold">Expense Entries</h2>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4">Expense ID</th>
              <th className="text-left p-4">Project</th>
              <th className="text-left p-4">Category</th>
              <th className="text-left p-4">Team</th>
              <th className="text-right p-4">Amount</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={e.id} className="border-t border-slate-100">
                <td className="p-4 font-bold">{e.id}</td>
                <td className="p-4">{e.project}</td>
                <td className="p-4">{e.category}</td>
                <td className="p-4">{e.team}</td>
                <td className="p-4 text-right font-bold">₹{e.amount.toLocaleString('en-IN')}</td>
                <td className="p-4"><span className="badge bg-amber-50 text-amber-700">{e.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  )
}
