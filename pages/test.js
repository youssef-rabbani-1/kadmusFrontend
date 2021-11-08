import React from "react"
import Link from "next/link"
import {useRouter} from "next/router"

export default function App() {
  const { asPath, locale } = useRouter();
  const router = useRouter()

  console.log(locale)
  return (
    <React.Fragment>
      <Link active={locale === "en-US"} href={asPath} locale="en-US">
        EN
      </Link>
      <Link active={locale === "ar-LB"} href={asPath} locale="ar-LB">
        AR
      </Link>
      <div
      onClick={() => {
        router.push('/test', '/test', { locale: 'ar-LB' })
      }}
    >
      to /fr/another
    </div>
    </React.Fragment>
  )
}
