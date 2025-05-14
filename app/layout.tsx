import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Snowflake, Menu, Phone, ShoppingCart, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Es Kristal Bangjon Payakumbuh",
  description: "Es Kristal Bangjon Payakumbuh merupakan produsen Es Kristal terbesar di kota Payakumbuh",
  generator: 'v0.dev',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-white">
              <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                  <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Es Kristal Bangjon" width={40} height={40} className="h-10 w-auto" />
                    <span className="text-xl font-bold">Es Kristal Bangjon</span>
                  </Link>
                </div>
                <nav className="hidden md:flex gap-6">
                  <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                  <Link href="#about-factory" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    About
                  </Link>
                  <Link href="#products" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Product
                  </Link>
                  <Link href="#gallery" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Gallery
                  </Link>
                  <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://wa.me/6281222264990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors"
                  >
                    0812-2226-4990
                  </Link>
                  <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2" asChild>
                    <Link href="https://wa.me/6281222264990?text=Halo,%20saya%20ingin%20memesan%20es%20kristal" target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="h-4 w-4" />
                      Pesan Sekarang
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t bg-gray-50">
              <div className="container px-4 py-12 md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-2">
                      <Image src="/logo.png" alt="Es Kristal Bangjon" width={40} height={40} className="h-10 w-auto" />
                      <span className="text-xl font-bold">Es Kristal Bangjon</span>
                    </Link>
                    <p className="text-sm text-gray-600">
                      Es Kristal Bangjon Payakumbuh merupakan produsen Es Kristal terbesar di kota Payakumbuh. Es Kristal kami di produksi secara higienis dengan melewati proses filtrasi dan sterilisasi.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Navigation</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        <Link href="/" className="hover:text-blue-600 transition-colors">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="#about-factory" className="hover:text-blue-600 transition-colors">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="#products" className="hover:text-blue-600 transition-colors">
                          Product
                        </Link>
                      </li>
                      <li>
                        <Link href="#gallery" className="hover:text-blue-600 transition-colors">
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link href="#contact" className="hover:text-blue-600 transition-colors">
                          Contact
                        </Link>
                      </li>

                    </ul>
                  </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-gray-600">
                  <p>© 2025 ProdukEs. Hak Cipta Dilindungi.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
