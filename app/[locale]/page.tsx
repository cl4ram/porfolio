import { getMessages } from "@/lib/getMessages"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "es" | "en" }>
}) {
  const { locale } = await params
  const t = getMessages(locale)

  return (
    <section>
      <h1>{t["hero.title"]}</h1>
      <p>{t["hero.subtitle"]}</p>

      <p style={{ marginTop: 24 }}>
        Idioma actual: <strong>{locale}</strong>
      </p>
    </section>
  )
}
