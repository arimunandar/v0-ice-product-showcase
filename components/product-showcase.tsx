"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Snowflake, CuboidIcon as Cube, Droplets } from "lucide-react"

export default function ProductShowcase() {

  const products = [
    {
      id: "ice-tube",
      name: "Tube Ice",
      description:
        "Es tabung silindris kami sempurna untuk mendinginkan minuman tanpa mengencerkannya terlalu cepat. Ideal untuk wiski, koktail, dan minuman premium lainnya.",
      icon: <Snowflake className="h-5 w-5" />,
      features: [
        "Tampilan jernih kristal",
        "Tingkat pencairan lambat",
        "Bentuk silindris sempurna",
        "Terbuat dari air murni",
        "Ideal untuk minuman premium",
      ],
      image: "/ice-tube.jpeg",
    },
    {
      id: "ice-cube",
      name: "Cube Ice",
      description:
        "Es berbentuk kubus klasik, sempurna untuk segala jenis minuman. Kubus es kami jernih kristal dan mencair pada tingkat yang tepat untuk menjaga minuman Anda tetap dingin tanpa mengencerkannya.",
      icon: <Cube className="h-5 w-5" />,
      features: [
        "Bentuk kubus sempurna",
        "Tampilan jernih kristal",
        "Ukuran konsisten",
        "Terbuat dari air murni",
        "Serbaguna untuk semua minuman",
      ],
      image: "/ice-cube.jpeg",
    },
    {
      id: "crushed-ice",
      name: "Crushed Ice",
      description:
        "Es serut halus sempurna untuk koktail, smoothie, dan tampilan makanan. Es serut kami mempertahankan teksturnya lebih lama dan memberikan pendinginan cepat.",
      icon: <Droplets className="h-5 w-5" />,
      features: [
        "Tekstur konsisten",
        "Sifat pendinginan cepat",
        "Sempurna untuk minuman blender",
        "Terbuat dari air murni",
        "Ideal untuk tampilan makanan",
      ],
      image: "/ice-crushed.jpeg",
    },
  ]

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Produk</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
                  {product.icon}
                  <span className="ml-2">Kualitas Premium</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                
                {/* <div className="pt-4">
                  <Button size="lg" className="w-full" asChild>
                    <a 
                      href={`https://wa.me/6281222264990?text=Halo,%20saya%20ingin%20memesan%20es%20kristal%20jenis%20${product.name}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Pesan Sekarang
                    </a>
                  </Button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
