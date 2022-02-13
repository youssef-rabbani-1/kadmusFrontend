import React from "react"
import { useTranslation } from "next-i18next"
import DescriptionCard from "../descriptionCard"

export default function App({}) {
  const { t } = useTranslation("homepage")

  const data = {
    description: t("card3"),
  }
  return (
    <DescriptionCard
      link="/prices"
      description={data.description}
      bkgd="#0385e6"
    />
  )
}
