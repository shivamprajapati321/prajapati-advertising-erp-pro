import './globals.css'

export const metadata = {
  title: 'Prajapati Advertising ERP Pro',
  description: 'Professional ERP for Prajapati Advertising operations'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
