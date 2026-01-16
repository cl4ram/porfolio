import { getMessages } from "@/lib/getMessages";
import { Locale } from "@/lib/i18n";
import styles from './Work.module.css';
import WorkCard from "@/components/ui/WorkCard/WorkCard";

export default function Work({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <section className={styles.workSection}>
      <div className="container">
        <div className="grid">
          <div className={`col-12`}>
            <h2>{t["work.title"]}</h2>
            <div className={`col-12 ${styles.cardWrapper}`}>
              <WorkCard number={t["work.card1number"]} title={t["work.card1title"]} descrption={t["work.card1description"]}/>
              <WorkCard number={t["work.card2number"]} title={t["work.card2title"]} descrption={t["work.card2description"]}/>
              <WorkCard number={t["work.card3number"]} title={t["work.card3title"]} descrption={t["work.card3description"]}/>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}