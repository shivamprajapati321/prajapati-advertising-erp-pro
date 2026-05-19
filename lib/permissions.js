export const ROLES = {
  ADMIN: 'admin',
  SALES: 'sales',
  OPERATION: 'operation',
  PRINTING: 'printing',
  STITCHING: 'stitching',
  EXECUTION: 'execution',
  ACCOUNTANT: 'accountant',
  CLIENT: 'client'
}

export function canViewFinance(role) {
  return [ROLES.ADMIN, ROLES.ACCOUNTANT].includes(role)
}

export function canViewInternalExpense(role) {
  return [ROLES.ADMIN, ROLES.ACCOUNTANT, ROLES.OPERATION].includes(role)
}

export function getDemoRole() {
  if (typeof window === 'undefined') return ROLES.ADMIN
  return localStorage.getItem('prajapati_demo_role') || ROLES.ADMIN
}
