import { getMessages } from "@/lib/getMessages";
import { Locale } from "@/lib/i18n";
import styles from './Projects.module.css';

export default function Projects({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

}