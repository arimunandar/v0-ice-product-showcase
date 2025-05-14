"use client"

import { motion } from "framer-motion"
import { Package, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PackageSizes() {
  const packages = [
    {
      size: "5kg",
      description: "Sempurna untuk pertemuan kecil dan penggunaan rumah",
      features: [
        "Ukuran nyaman untuk freezer rumah",
        "Ideal untuk pesta kecil",
        "Tersedia dalam semua jenis es",
        "Kemasan mudah ditangani",
        "Termasuk kantong yang dapat ditutup kembali",
      ],
      price: "Rp 150.000",
      popular: false,
    },
    {
      size: "10kg",
      description: "Ideal untuk acara besar dan penggunaan bisnis",
      features: [
        "Sempurna untuk pertemuan besar",
        "Opsi massal yang hemat biaya",
        "Tersedia dalam semua jenis es",
        "Kemasan tahan lama",
        "Tas berinsulasi tersedia",
      ],
      price: "Rp 270.000",
      popular: true,
    },
  ]

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Ukuran Paket</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Pilih ukuran yang sempurna untuk kebutuhan Anda, tersedia dalam opsi 5kg dan 10kg.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`relative overflow-hidden ${pkg.popular ? "border-blue-500 shadow-lg" : ""}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                      Paling Populer
                    </div>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-blue-500" />
                    <CardTitle className="text-2xl">{pkg.size} Package</CardTitle>
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-6">{pkg.price}</div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    Pesan Sekarang
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Butuh ukuran khusus untuk bisnis atau acara khusus Anda? Hubungi kami untuk pesanan khusus dan harga grosir.
          </p>
          <Button variant="outline" size="lg">
            Minta Penawaran Khusus
          </Button>
        </div>
      </div>
    </section>
  )
}
