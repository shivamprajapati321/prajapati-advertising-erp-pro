export const projects = [
  {
    id: 'PA-2026-001',
    client: 'Society Tea',
    city: 'Pune',
    qty: 500,
    status: 'Execution Running',
    progress: 72,
    revenue: 275000,
    expenses: 142000,
    profit: 133000,
    printing: 100,
    stitching: 100,
    execution: 72
  },
  {
    id: 'PA-2026-002',
    client: 'Astral Pipes',
    city: 'Nagpur',
    qty: 800,
    status: 'Printing',
    progress: 38,
    revenue: 440000,
    expenses: 121000,
    profit: 319000,
    printing: 38,
    stitching: 0,
    execution: 0
  },
  {
    id: 'PA-2026-003',
    client: 'Aakash Institute',
    city: 'Mumbai',
    qty: 300,
    status: 'Stitching',
    progress: 56,
    revenue: 165000,
    expenses: 68000,
    profit: 97000,
    printing: 100,
    stitching: 56,
    execution: 0
  }
]

export const expenses = [
  { id: 'EXP-001', project: 'PA-2026-001', category: 'Hotel', team: 'Execution Team A', amount: 8500, status: 'Approved' },
  { id: 'EXP-002', project: 'PA-2026-001', category: 'Food', team: 'Execution Team A', amount: 4200, status: 'Paid' },
  { id: 'EXP-003', project: 'PA-2026-002', category: 'Printing Material', team: 'Printing', amount: 62000, status: 'Pending' },
  { id: 'EXP-004', project: 'PA-2026-003', category: 'Stitching Labour', team: 'Stitching', amount: 4500, status: 'Approved' }
]

export const timeline = [
  'Order PA-2026-001 created by Sales Team',
  'Printing completed for Society Tea campaign',
  'Stitching assigned to Rekha team',
  'Execution team uploaded 186 vehicle photos',
  'Expense request submitted for Pune execution'
]
