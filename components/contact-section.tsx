"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
    // Show success message
    alert("Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.")
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Hubungi Kami</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Punya pertanyaan atau siap untuk memesan? Hubungi kami hari ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900">Hubungi Kami</h3>
            <p className="text-gray-600">
              Baik Anda memiliki pertanyaan tentang produk kami, membutuhkan penawaran khusus, atau ingin melakukan
              pemesanan, tim kami siap membantu. Isi formulir atau gunakan informasi kontak kami di bawah ini.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Telepon</h4>
                  <p className="mt-1 text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="mt-1 text-gray-600">info@produk-es.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Lokasi</h4>
                  <p className="mt-1 text-gray-600">Jl. Es No. 123, Kota Es, Jakarta 12345</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Jam Kerja</h4>
                  <p className="mt-1 text-gray-600">Senin - Jumat: 08.00 - 18.00</p>
                  <p className="text-gray-600">Sabtu: 09.00 - 15.00</p>
                  <p className="text-gray-600">Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nama</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Email Anda"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telepon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Nomor telepon Anda"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Pesan Anda"
                    rows={5}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Kirim Pesan
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
