import Link from 'next/link'
import React from 'react'
import LinkApp from './LinkApp'
import { useTranslations } from 'next-intl'

export default function NavLinks() {
  const t = useTranslations('navbar')
  return (
    <>
      <LinkApp href="/" className="hover:opacity-80">
        {t('links.home')}
      </LinkApp>
      <LinkApp href="/experiences" className="hover:opacity-80">
      {t('links.services')}
      </LinkApp>
      <LinkApp href="/about" className="hover:opacity-80">
      {t('links.about_co')}
      </LinkApp>
      <LinkApp href="/about" className="hover:opacity-80">
      {t('links.tourism')}
      </LinkApp>
      <LinkApp href="/about" className="hover:opacity-80">
      {t('links.blog')}
      </LinkApp>
      <LinkApp href="/about" className="hover:opacity-80">
      {t('links.album')}
      </LinkApp>
    </>
  )
}
