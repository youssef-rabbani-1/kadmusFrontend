import React from "react"
import { useTranslation } from "next-i18next"
import DescriptionCard from "../descriptionCard"

export default function App({}) {
  const { t } = useTranslation("homepage")

  const data = {
    description: t("card1"),
  }
  return (
    <DescriptionCard
      description={data.description}
      link="/guides"
      bkgd="#477cd4"
    />
  )
}
