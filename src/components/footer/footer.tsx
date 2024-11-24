
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6"
import { BsInstagram, BsTiktok } from "react-icons/bs"
import { FaSnapchat } from "react-icons/fa"
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-[#2D5F8A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          <div className="md:col-span-4 flex flex-col space-y-4 items-start">
            <Image
              src="/icons/logo.png"
              alt="Logo"
              width={120}
              height={60}
              className="mb-4"
            />
            <p className="text-sm leading-relaxed">{t("description")}</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:opacity-80">
                <FaXTwitter size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <BsTiktok size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <BsInstagram size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <FaSnapchat size={20} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-lg border-b-2 border-white/20 inline-block pb-1">{t('pages')}</h3>
              <div className="flex gap-x-10">
              <ul className="space-y-2">
                <li><Link href="/services" className="hover:opacity-80">{t('links.services')}</Link></li>
                <li><Link href="/about" className="hover:opacity-80">{t('links.about_co')}</Link></li>
                <li><Link href="/tourism" className="hover:opacity-80">{t('links.tourism')}</Link></li>
                <li><Link href="/terms" className="hover:opacity-80">{t('links.blog')}</Link></li>
                <li><Link href="/latest" className="hover:opacity-80">{t('links.album')}</Link></li>
              </ul>
              <ul className="space-y-2">
                <li><Link href="/terms" className="hover:opacity-80">{t('links.privacyTerms')}</Link></li>
                <li><Link href="/privacy" className="hover:opacity-80">{t('links.privacyPolicies')}</Link></li>
                <li><Link href="/terms" className="hover:opacity-80">{t('links.intellectualProperty')}</Link></li>
                <li><Link href="/contact" className="hover:opacity-80">{t('links.contactUs')}</Link></li>
              </ul>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold mb-4 text-lg border-b-2 inline-block border-white/20 pb-2">{t('contactLinks')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="shrink-0 text-primary size-10 p-2 bg-gray-50/70 text-lg rounded-full" size={20} />
                <span dir="ltr">+123456789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="shrink-0 text-primary size-10 p-2 bg-gray-50/70 text-lg rounded-full" size={20} />
                <span>info@mail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="shrink-0 text-primary size-10 p-2 bg-gray-50/70 text-lg rounded-full" size={20} />
                <span>{t('address')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span>{t('copyright')}</span>
              <span>{new Date().getFullYear()}</span>
              <span>©</span>
            </div>
            <div className="flex items-center gap-2 text-sm" dir="rtl">
              <span>صنع بـ ❤️</span>
              <span>بواسطة </span>
              <Link href={'https://mo7amed4a.vercel.app'} className="underline">Mohamed</Link>
            </div>
          </div>
        </div>
      </div>
      <Image src="/footer/bg.png" alt="logo" className="absolute opacity-[0.02] inset-0 w-full h-auto z-0" width={700} height={700} />
    </footer>
  )
}

