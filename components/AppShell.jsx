import Sidebar from './Sidebar'

export default function AppShell({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 min-w-0">
        <header className="sticky top-0 z-10 bg-white/85 backdrop-blur border-b border-slate-200 px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-950">{title}</h1>
              <p className="text-slate-500 mt-1">{subtitle}</p>
            </div>
            <button className="btn-primary">Create Order</button>
          </div>
        </header>
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  )
}
