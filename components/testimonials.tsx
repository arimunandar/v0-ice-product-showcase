"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Perencana Acara",
      content:
        "Kualitas es dari perusahaan ini luar biasa. Jernih kristal dan lambat mencair, sempurna untuk acara kelas atas kami. Klien kami selalu memperhatikan perbedaannya.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Pemilik Restoran",
      content:
        "Kami telah menggunakan es kubus mereka untuk restoran kami selama lebih dari 2 tahun. Konsistensi dalam kualitas dan pengiriman yang andal telah menjadikan mereka pemasok tepercaya kami.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Manajer Bar",
      content:
        "Es tabung sangat sempurna untuk koktail buatan kami. Mereka mencair perlahan dan tidak mengencerkan minuman terlalu cepat. Pelanggan kami pasti telah memperhatikan peningkatan ini.",
      rating: 4,
    },
    {
      name: "David Thompson",
      role: "Direktur F&B Hotel",
      content:
        "Dari es serut untuk tampilan makanan laut kami hingga kubus jernih kristal untuk minuman beralkohol premium kami, perusahaan ini secara konsisten memberikan produk berkualitas. Sangat direkomendasikan.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Apa Kata Pelanggan Kami</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Jangan hanya percaya kata-kata kami. Inilah yang dikatakan pelanggan kami tentang produk es kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
