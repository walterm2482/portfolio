import { createOpenGraphImage } from '@/lib/opengraph-image'

// A fixed public URL shared by the two independent language root layouts.
export const dynamic = 'force-static'
export const runtime = 'nodejs'

export async function GET() {
  return createOpenGraphImage()
}
