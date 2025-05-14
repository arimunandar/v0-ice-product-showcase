"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { X } from "lucide-react"

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Lini produksi pabrik",
      category: "Pabrik",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Produksi es tabung",
      category: "Produksi",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Proses kontrol kualitas",
      category: "Kualitas",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Pengemasan es kubus",
      category: "Pengemasan",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Sistem pemurnian air",
      category: "Teknologi",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Truk pengiriman es",
      category: "Pengiriman",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Eksterior pabrik",
      category: "Fasilitas",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Staf bekerja di pabrik",
      category: "Tim",
    },
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Galeri Foto</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Lakukan tur visual pabrik, produk, dan operasi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-4 aspect-h-3 relative h-64 w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium">{image.alt}</p>
                  <p className="text-xs opacity-80">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                width={1200}
                height={800}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                <p className="text-lg font-medium">{images[selectedImage].alt}</p>
                <p className="text-sm opacity-80">{images[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
