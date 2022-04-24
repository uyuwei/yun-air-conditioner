import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import * as pkg from '~/../package.json'

const socialList = [
  {
    type: 'github',
    color: 'inherit',
    icon: 'i-mdi-github',
    label: 'GitHub: uyuwei',
    href: 'https://github.com/uyuwei',
  },
  {
    type: 'weibo',
    color: '#DB2828',
    icon: 'i-mdi-sina-weibo',
    label: '微博：余慰',
    href: 'http://weibo.com/uyuwei',
  },
  {
    type: 'twitter',
    color: '#1da1f2',
    icon: 'i-mdi-twitter',
    label: 'Twitter: YunYouJun',
    href: 'https://twitter.com/uyuwei',
  },
  {
    type: 'blog',
    color: '#6435C9',
    icon: 'i-mdi-earth',
    label: '博客：余慰.中国',
    href: 'http://xn--zqqw45b.xn--fiqs8s/home/',
  },
]

const Copyright: React.FC = () => {
  return (
    <div className="opacity-80 text-xs text-center">
      <div className="ac-text flex justify-center items-center m-2">
        {'© '}
        <a href={pkg.repository.url} target="_blank" rel="noreferrer">
          Yun Air Conditioner
        </a>
        <a
          className="inline-flex"
          href="http://xn--zqqw45b.xn--fiqs8s/home/money_receiving_QR_code/"
          target="_blank" rel="noreferrer"
          style={{ color: '#0078e7' }}
        >
          <div className="i-mdi-cloud text-sm mx-1" />
        </a>
        <a href={pkg.author.url} target="_blank" rel="noreferrer">
          余慰 @{pkg.author.name}
        </a>
      </div>
      <p>
        {`2019 - ${new Date().getFullYear()}`}
      </p>
      <div className="text-center">
        {socialList.map(item => (
          <Tooltip title={item.label} arrow key={item.type}>
            <IconButton
              sx={{ color: item.color }}
              href={item.href}
              target="_blank"
            >
              <div className={`${item.icon} text-lg`} />
            </IconButton>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

export default Copyright
