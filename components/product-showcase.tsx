"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Snowflake, CuboidIcon as Cube, Droplets } from "lucide-react"

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("ice-tube")

  const products = [
    {
      id: "ice-tube",
      name: "Es Tabung",
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
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      id: "ice-cube",
      name: "Es Kubus",
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
      image: "/placeholder.svg?height=600&width=600",
    },
    {
      id: "crushed-ice",
      name: "Es Serut",
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
      image: "/placeholder.svg?height=600&width=600",
    },
  ]

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Produk</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan berbagai produk es berkualitas tinggi kami, dibuat dengan air murni dan teknologi mutakhir.
          </p>
        </div>

        <Tabs defaultValue="ice-tube" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="ice-tube" className="flex items-center gap-2">
                <Snowflake className="h-4 w-4" />
                <span className="hidden sm:inline">Es Tabung</span>
              </TabsTrigger>
              <TabsTrigger value="ice-cube" className="flex items-center gap-2">
                <Cube className="h-4 w-4" />
                <span className="hidden sm:inline">Es Kubus</span>
              </TabsTrigger>
              <TabsTrigger value="crushed-ice" className="flex items-center gap-2">
                <Droplets className="h-4 w-4" />
                <span className="hidden sm:inline">Es Serut</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {products.map((product) => (
            <TabsContent key={product.id} value={product.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
                    {product.icon}
                    <span className="ml-2">Kualitas Premium</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{product.name}</h3>
                  <p className="text-lg text-gray-600">{product.description}</p>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-semibold mb-4">Fitur Utama</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="pt-4">
                    <Button size="lg">Pesan Sekarang</Button>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
