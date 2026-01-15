import { getMessages } from "@/lib/getMessages";
import { Locale } from "@/lib/i18n";
import styles from './Hero.module.css';
import Image from "next/image";
import Link from 'next/link';

export default function Hero({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <section>
        <div className="container">
            <div className="grid">
                <div className={`col-12 ${styles.bannerWrapper}`}>
                    <p>{t["hero.eyebrow"]}</p>
                    <div className={styles.titleWrapper}>
                        <Image src="/star.svg" className={`${styles.star} ${styles.star1}`} alt="" width={20} height={40}/>
                        
                        <h1 className={styles.heroTitle}>
                            {t["hero.title"]} <br className={styles.desktopBr} />
                            {t["hero.cutWord"]} <span className={styles.highlight}>{t["hero.highlight"]}</span>
                        </h1>

                        <Image src="/star.svg" className={`${styles.star} ${styles.star2}`} alt="" width={20} height={40}/>
                        <Image src="/star.svg" className={`${styles.star} ${styles.star3}`} alt="" width={20} height={40}/>
                    </div>                    

                    <div className={styles.ctaWrapper}>
                        <a href={`/cv-${locale}.pdf`} download={`CV_Maria_ClaraMolina_${locale}.pdf`} className={styles.secondaryBtn}  >
                            {t["hero.cta2"]}
                        </a>

                        <Link href="#proyectos" className={styles.primaryBtn}>
                            {t["hero.cta1"]}
                        </Link>
                    </div>                
                </div>
            </div>
        </div>
    </section>
  )

}