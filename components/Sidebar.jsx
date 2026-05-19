import Link from 'next/link'
import { BarChart3, ClipboardList, Factory, IndianRupee, LayoutDashboard, Users, FileText } from 'lucide-react'

const menu = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Order Master', href: '/orders', icon: ClipboardList },
  { name: 'Operations', href: '/operations', icon: Factory },
  { name: 'Expenses', href: '/expenses', icon: IndianRupee },
  { name: 'Client Portal', href: '/client-portal', icon: Users },
  { name: 'Reports', href: '/reports', icon: BarChart3 },
  { name: 'Documents', href: '/documents', icon: FileText }
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-72 min-h-screen bg-slate-950 text-white p-6 flex-col">
      <div className="mb-8">
        <div className="text-2xl font-extrabold text-cyan-400">Prajapati ERP</div>
        <div className="text-sm text-slate-400 mt-1">Advertising Operations OS</div>
      </div>

      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon
          return (
            <Link key={item.name} href={item.href} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-200 hover:bg-slate-800 hover:text-white transition">
              <Icon size={19} />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto rounded-3xl bg-slate-900 p-4 border border-slate-800">
        <div className="text-sm text-slate-400">Logged in as</div>
        <div className="font-bold mt-1">Admin / Shivam</div>
      </div>
    </aside>
  )
}
