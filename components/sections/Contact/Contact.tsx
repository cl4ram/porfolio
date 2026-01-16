import { getMessages } from "@/lib/getMessages";
import { Locale } from "@/lib/i18n";
import styles from './Contact.module.css';

export default function Contact({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

}