import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/cv/walter-moya-cv-es.pdf',
        destination: '/cv/walter_thomas_moya_araya_cv_es.pdf',
        permanent: true,
      },
      {
        source: '/cv/walter-moya-cv-en.pdf',
        destination: '/cv/walter_thomas_moya_araya_cv_en.pdf',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
