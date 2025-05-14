import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Link from "next/link"
import { Snowflake, Menu, Phone, ShoppingCart, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Produk Es Premium",
  description: "Produk es berkualitas tinggi untuk semua kebutuhan Anda - Es Tabung, Es Kubus, dan Es Serut",
    generator: 'v0.dev'
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
                    <Snowflake className="h-6 w-6 text-blue-600" />
                    <span className="text-xl font-bold">ProdukEs</span>
                  </Link>
                </div>
                <nav className="hidden md:flex gap-6">
                  <Link href="#products" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Produk
                  </Link>
                  <Link href="#about-factory" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Tentang Pabrik
                  </Link>
                  <Link href="#gallery" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Galeri
                  </Link>
                  <Link href="#about-owner" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Tentang Pemilik
                  </Link>
                  <Link href="#packages" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Ukuran Paket
                  </Link>
                  <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Kontak
                  </Link>
                </nav>
                <div className="flex items-center gap-4">
                  <Link
                    href="#contact"
                    className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    (555) 123-4567
                  </Link>
                  <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Pesan Sekarang
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
                      <Snowflake className="h-6 w-6 text-blue-600" />
                      <span className="text-xl font-bold">ProdukEs</span>
                    </Link>
                    <p className="text-sm text-gray-600">
                      Produk es berkualitas premium untuk semua kebutuhan Anda. Dibuat dengan air murni dan teknologi
                      mutakhir.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Produk</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        <Link href="#products" className="hover:text-blue-600 transition-colors">
                          Es Tabung
                        </Link>
                      </li>
                      <li>
                        <Link href="#products" className="hover:text-blue-600 transition-colors">
                          Es Kubus
                        </Link>
                      </li>
                      <li>
                        <Link href="#products" className="hover:text-blue-600 transition-colors">
                          Es Serut
                        </Link>
                      </li>
                      <li>
                        <Link href="#packages" className="hover:text-blue-600 transition-colors">
                          Ukuran Paket
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Perusahaan</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        <Link href="#about-factory" className="hover:text-blue-600 transition-colors">
                          Tentang Pabrik
                        </Link>
                      </li>
                      <li>
                        <Link href="#about-owner" className="hover:text-blue-600 transition-colors">
                          Tentang Pemilik
                        </Link>
                      </li>
                      <li>
                        <Link href="#gallery" className="hover:text-blue-600 transition-colors">
                          Galeri
                        </Link>
                      </li>
                      <li>
                        <Link href="#testimonials" className="hover:text-blue-600 transition-colors">
                          Testimoni
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <Phone className="h-5 w-5 mr-2 text-blue-600" />
                        <span>(555) 123-4567</span>
                      </li>
                      <li className="flex items-start">
                        <Mail className="h-5 w-5 mr-2 text-blue-600" />
                        <span>info@iceproducts.com</span>
                      </li>
                      <li className="flex items-start">
                        <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                        <span>123 Frost Avenue, Iceville, CA 90210</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-gray-600">
                  <p>© {new Date().getFullYear()} ProdukEs. Hak Cipta Dilindungi.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
