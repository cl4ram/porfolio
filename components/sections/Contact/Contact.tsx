import { getMessages } from "@/lib/getMessages";
import { Locale } from "@/lib/i18n";

export default function Contact({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

}