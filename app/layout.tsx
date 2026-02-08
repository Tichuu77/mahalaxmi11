import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

 

export const metadata: Metadata = {
  title: "Mahalaxmi Infra",
  description: "Mahalaxmi  Infra - NMRDA & RL Residential Plotted Project",
  generator: "v0.app",
  icons: "/Mahalaxmi Infra new Logo.png"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
