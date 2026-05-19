import AppShell from '@/components/AppShell'
import ProjectTable from '@/components/ProjectTable'
import StatCard from '@/components/StatCard'
import { projects } from '@/lib/data'

export default function OrdersPage() {
  return (
    <AppShell title="Order Master" subtitle="One project ID controls quotation, invoice, printing, stitching, execution, reporting and payment close.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <StatCard title="Orders" value={projects.length} />
        <StatCard title="Total Quantity" value={projects.reduce((s, p) => s + p.qty, 0)} />
        <StatCard title="Average Progress" value={`${Math.round(projects.reduce((s, p) => s + p.progress, 0) / projects.length)}%`} />
      </div>
      <ProjectTable projects={projects} showFinance />
    </AppShell>
  )
}
