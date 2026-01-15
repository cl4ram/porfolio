import { getMessages } from "@/lib/getMessages";
import { Locale } from "@/lib/i18n";

export default function About({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

}