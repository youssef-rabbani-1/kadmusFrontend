import React from "react"
import { useTranslation } from "next-i18next"
import DescritionCard from "../descriptionCard"

export default function App({}) {
  const { t } = useTranslation("homepage")

  const data = {
    description: t("card2"),
  }
  return (
    <DescritionCard
      link="/blog"
      description={data.description}
      bkgd="#1d32b2"
    />
  )
}
