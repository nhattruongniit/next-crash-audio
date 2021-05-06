import React from 'react'
import Head from 'next/head'

function Meta({ title, description }) {
  return (
    <Head>
      <meta name='keywords' content='test' />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Webdev News',
  keywords: 'web development, programming',
  description: 'Get the latest news in web'
}

export default Meta
