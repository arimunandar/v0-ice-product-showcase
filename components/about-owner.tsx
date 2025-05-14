"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function AboutOwner() {
  return (
    <section id="about-owner" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Tentang Pemilik</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Temui visioner di balik produk es premium kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-xl"
          >
            <Image src="/placeholder.svg?height=1000&width=800" alt="Company Owner" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
              Pendiri & CEO
            </div>
            <h3 className="text-3xl font-bold text-gray-900">John Frost</h3>
            <p className="text-lg text-gray-600">
              Dengan pengalaman lebih dari 20 tahun di industri es, John Frost telah merevolusi cara es premium
              diproduksi dan didistribusikan di wilayah kami.
            </p>

            <div className="relative pl-10 border-l-4 border-blue-500 py-2">
              <Quote className="absolute top-0 left-2 h-6 w-6 text-blue-500 transform -translate-x-full" />
              <p className="italic text-gray-700">
                "Visi saya selalu untuk menciptakan produk es termurni dan berkualitas tertinggi yang meningkatkan
                setiap minuman yang disentuhnya. Kami tidak hanya menjual es; kami memberikan pengalaman."
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-xl font-semibold text-gray-900">Latar Belakang</h4>
              <p className="text-gray-600">
                John memulai karirnya di industri minuman, di mana dia menyadari dampak es berkualitas terhadap
                pengalaman minum secara keseluruhan. Wawasan ini membawanya untuk mendirikan perusahaan kami pada tahun
                2005, dengan fokus pada pembuatan produk es premium menggunakan air termurni dan teknologi paling
                canggih.
              </p>

              <h4 className="text-xl font-semibold text-gray-900">Visi</h4>
              <p className="text-gray-600">
                Visi John melampaui sekadar memproduksi es. Dia bertujuan untuk meningkatkan standar produk es di
                seluruh industri, mempromosikan keberlanjutan dalam proses produksi, dan memperluas akses ke produk es
                premium untuk bisnis dan konsumen.
              </p>

              <h4 className="text-xl font-semibold text-gray-900">Prestasi</h4>
              <p className="text-gray-600">
                Di bawah kepemimpinan John, perusahaan kami telah berkembang dari operasi lokal kecil menjadi pemimpin
                regional dalam produksi es premium. Pendekatan inovatifnya terhadap produksi es telah mendapatkan
                berbagai penghargaan industri dan pengakuan atas kualitas dan keberlanjutan.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
