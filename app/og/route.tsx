import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'

export async function GET() {
  const logoData = await readFile('public/logo.jpeg')
  const arrayBuffer = Uint8Array.from(logoData).buffer

  return new ImageResponse(
    (
      <div style={{ display: 'flex' }}>
        <img src={arrayBuffer as any} height="100" />
      </div>
    )
  )
}
