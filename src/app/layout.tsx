import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '[Nombre de la Empresa] - Soluciones Empresariales',
  description: 'Ofrecemos soluciones empresariales innovadoras y personalizadas para impulsar el éxito de tu negocio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

