import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

import ".././globals.css"

import { Inter } from "next/font/google"
import localFont from "next/font/local"

import { locales, Locale } from "@/lib/i18n"

export const metadata = {
  title: "María Clara Molina y Vedia",
  description: "Frontend Developer & Web Designer",
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
})


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    console.log('test')
  }

  return (
    <div className={`${inter.variable} ${clashDisplay.variable}`}>
      <Header locale={locale as Locale}/>
      <main>{children}</main>
      <Footer locale={locale as Locale}/>
    </div>
  )
}
