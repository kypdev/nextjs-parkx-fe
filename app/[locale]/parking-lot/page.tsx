import React from 'react'
import Image from 'next/image'
import { Breadcrumb, Space } from 'antd'
import { useTranslations } from 'next-intl'
import { Banner } from '@/components'

const Page = () => {
  const t = useTranslations('breadcrumb')
  const itemBreadcrumb = [
    {
      title: t('home'),
    },
    {
      title: t('parking_lot'),
    },
  ]

  const imageUrl = [
    {
      id: 1,
      url: '/images/parking-lot/ekamai.png',
    },
    {
      id: 2,
      url: '/images/parking-lot/udomsuk.png',
    },
    {
      id: 3,
      url: '/images/parking-lot/commart.png',
    },
  ]
  return (
    <>
      <Space className='' direction='vertical' align='start'>
        <Breadcrumb items={itemBreadcrumb} />
        <Banner imageSrc={imageUrl[0].url} />
        <Banner imageSrc={imageUrl[1].url} />
        <Banner imageSrc={imageUrl[2].url} />

      </Space>
    </>
  )
}

export default Page
