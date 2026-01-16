import Hero from "@/components/sections/Hero/Hero"
import Work from "@/components/sections/Work/Work"
import { getMessages } from "@/lib/getMessages"
import { Locale } from "@/lib/i18n"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "es" | "en" }>
}) {
  const { locale } = await params
  const t = getMessages(locale)

  return (
    <>
      <Hero locale={locale as Locale}/>
      <Work locale={locale as Locale}/>
    </>
  )
}
