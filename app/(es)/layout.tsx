import { SiteLayout } from '@/components/SiteLayout'
import { siteMetadata } from '@/lib/metadata'
export { viewport } from '@/lib/metadata'

export const metadata = siteMetadata('es')

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteLayout lang="es">{children}</SiteLayout>
}
