import { getMessages } from "@/lib/getMessages";
import { Locale } from "@/lib/i18n";
import styles from './Footer.module.css';

export default function Footer({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <p className=" col-6">© 2026 María Clara Molina y Vedia</p>

        </div>
      </div>
    </footer>
  )
}
