import { ImageResponse } from 'next/og'

export async function GET() {
  const logoSource = await fetch(
    new URL('../../public/logo.jpeg', import.meta.url)
  ).then((response) => response.arrayBuffer())

  return new ImageResponse(
    (
      <div style={{ display: 'flex' }}>
        <img src={logoSource as any} height="100" />
      </div>
    )
  )
}
