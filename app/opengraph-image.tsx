import { ImageResponse } from 'next/og'

export const alt = 'Walter Moya — Data Science & Quantitative Development'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '72px',
          background: '#143d34',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '72px',
              height: '72px',
              border: '1px solid #4b7b69',
              borderRadius: '20px',
              fontSize: '36px',
              fontWeight: 700,
            }}
          >
            wm.
          </div>
          <div style={{ display: 'flex', fontSize: '18px', color: '#b4e8d6' }}>
            waltermoya.vercel.app
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: '86px',
              fontWeight: 700,
              letterSpacing: '-4px',
              lineHeight: 1.1,
            }}
          >
            Walter Moya
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '26px',
              maxWidth: '1000px',
              fontSize: '34px',
              color: '#b4e8d6',
              lineHeight: 1.3,
            }}
          >
            Data Science & Quantitative Development
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '24px',
            borderTop: '1px solid #3b6657',
            fontSize: '19px',
            color: '#c6d9d2',
          }}
        >
          <div style={{ display: 'flex' }}>Python · SQL · C#/.NET</div>
          <div style={{ display: 'flex' }}>Industrial Engineer · MSc</div>
        </div>
      </div>
    ),
    size,
  )
}
