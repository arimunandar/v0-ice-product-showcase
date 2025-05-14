"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Factory, Award, Droplet, Shield } from "lucide-react"

export default function AboutFactory() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about-factory" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Tentang Pabrik Kami</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Pelajari tentang fasilitas produksi es mutakhir kami dan komitmen kami terhadap kualitas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-xl"
          >
            <Image src="/placeholder.svg?height=1000&width=800" alt="Pabrik es kami" fill className="object-cover" />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sejarah Kami</h3>
              <p className="text-gray-600">
                Didirikan pada tahun 2005, pabrik es kami dimulai dengan misi sederhana: memproduksi produk es termurni
                dan berkualitas tertinggi di pasaran. Apa yang dimulai sebagai operasi kecil telah berkembang menjadi
                fasilitas mutakhir yang melayani bisnis dan individu di seluruh wilayah.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
              <p className="text-gray-600">
                Kami berkomitmen untuk memproduksi produk es premium menggunakan air termurni dan teknologi paling
                canggih yang tersedia. Tujuan kami adalah melebihi harapan pelanggan dengan setiap produk yang kami
                kirimkan, memastikan kualitas dan keandalan yang konsisten.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nilai Inti</h3>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Droplet className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Kemurnian</h4>
                    <p className="mt-2 text-sm text-gray-600">Kami hanya menggunakan air murni dalam produk kami.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Kualitas</h4>
                    <p className="mt-2 text-sm text-gray-600">Kami tidak pernah berkompromi pada kualitas produk.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Factory className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Inovasi</h4>
                    <p className="mt-2 text-sm text-gray-600">Kami terus meningkatkan proses kami.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Keamanan</h4>
                    <p className="mt-2 text-sm text-gray-600">Kami menjaga standar keamanan tertinggi.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
