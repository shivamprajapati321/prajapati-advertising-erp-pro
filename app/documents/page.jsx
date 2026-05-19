import AppShell from '@/components/AppShell'

export default function DocumentsPage() {
  return (
    <AppShell title="Documents Center" subtitle="Quotation PDFs, invoice PDFs, client reports and expense bills.">
      <div className="card p-8">
        <h2 className="text-xl font-extrabold mb-2">Document Center</h2>
        <p className="text-slate-500">PDF generation and Supabase Storage upload will be connected in the next step.</p>
      </div>
    </AppShell>
  )
}
