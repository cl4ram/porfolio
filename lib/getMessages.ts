import es from "./messages/es.json"
import en from "./messages/en.json"
import { Locale } from "./i18n"

export function getMessages(locale: Locale) {
  switch (locale) {
    case "en":
      return en
    case "es":
    default:
      return es
  }
}
