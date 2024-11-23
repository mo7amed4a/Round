import { useLocale } from "next-intl"
import Link from "next/link"
import React from "react"

export default function LinkApp({children,href, className}: {
    children: React.ReactNode
    href: string,
    className?: string
}) {
    const localActive = useLocale();
  return (
    <Link href={`/${localActive}${href}`}  className={className}>{children}</Link>
  )
}
