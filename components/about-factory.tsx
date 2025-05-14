"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Factory, Award, Droplet, Shield, Clock, Cloud, Mail } from "lucide-react"

export default function AboutFactory() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about-factory" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Tentang</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Es Kristal Bangjon Payakumbuh merupakan produsen Es Kristal terbesar di kota Payakumbuh. Es Kristal kami di produksi secara higienis dengan melewati proses filtrasi dan sterilisasi sehingga menghasilkan produk yang jernih, bersih serta sangat aman untuk dikonsumsi.
          </p>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Mengapa Memilih Kami?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Es Kristal Bangjon Payakumbuh berorientasi kepada kualitas & kepuasan pelanggan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1: Cepat & Profesional */}
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-amber-300 rounded-lg p-8 text-center h-full flex flex-col items-center"
          >
            <div className="bg-rose-700 rounded-full p-4 mb-6 inline-flex">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase mb-4">CEPAT & PROFESIONAL</h3>
            <p className="text-white">
              Pengiriman cepat dengan didukung tim yang sangat professional dan ramah.
            </p>
          </motion.div>

          {/* Benefit 2: Harga Terjangkau */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-orange-500 rounded-lg p-8 text-center h-full flex flex-col items-center"
          >
            <div className="bg-amber-300 rounded-full p-4 mb-6 inline-flex">
              <Cloud className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase mb-4">HARGA TERJANGKAU</h3>
            <p className="text-white">
              Harga kompetitif cocok untuk semua jenis usaha restoran, cafe, hotel, kaki lima, serta reseller.
            </p>
          </motion.div>

          {/* Benefit 3: Ketersediaan Terjamin */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-green-500 rounded-lg p-8 text-center h-full flex flex-col items-center"
          >
            <div className="bg-green-800 rounded-full p-4 mb-6 inline-flex">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase mb-4">KETERSEDIAAN STOK</h3>
            <p className="text-white">
              Siap memenuhi semua permintaan dengan didukung mesin produksi berkapasitas besar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
