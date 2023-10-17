import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useNextSeoProps } from './config/useNextSeoProps'

const config: DocsThemeConfig = {
  logo: <span>b5h22's Dev Notes</span>,
  project: {
    link: 'https://github.com/b5h22/dev-notes',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/b5h22/dev-notes/tree/main',
  feedback: {
    content: () => <>Question? Give me feedback →</>,
    labels: 'feedback',
  },
  footer: {
    text: 'Made by b5h22',
  },
  useNextSeoProps,
}

export default config
