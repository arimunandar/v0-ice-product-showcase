import Image from "next/image"
import { ChevronRight, Snowflake } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductShowcase from "@/components/product-showcase"
import AboutFactory from "@/components/about-factory"
import PhotoGallery from "@/components/photo-gallery"
import PackageSizes from "@/components/package-sizes"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-30" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Es Kristal Bangjon</span>
                <span className="block text-blue-600">Payakumbuh</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Keep it cool with excellence quality & services!
              </p>
              <div className="mt-8 flex gap-x-4">
                <Button size="lg">
                  Lihat Produk
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Es kubus jernih kristal"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Factory Section */}
      <AboutFactory />

      {/* Product Showcase Section */}
      <ProductShowcase />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* About Owner Section */}
      {/* <AboutOwner /> */}

      {/* Package Sizes */}
      {/* <PackageSizes /> */}

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
