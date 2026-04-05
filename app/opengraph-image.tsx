import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Filming in Japan — Corporate Video Production Tokyo'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#faf6f0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
        }}
      >
        {/* Top — orange rule + label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '48px', height: '2px', backgroundColor: '#e95228' }} />
          <div
            style={{
              color: '#e95228',
              fontSize: '18px',
              letterSpacing: '0.2em',
              fontFamily: 'serif',
              textTransform: 'uppercase',
            }}
          >
            Corporate Video Production · Tokyo · Japan
          </div>
        </div>

        {/* Centre — brand name + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Brand name */}
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <div
              style={{
                color: '#1c1208',
                fontSize: '100px',
                fontFamily: 'Georgia, serif',
                fontWeight: 'bold',
                letterSpacing: '-0.03em',
                lineHeight: '1',
              }}
            >
              Filming in Japan
            </div>
            <div
              style={{
                color: '#e95228',
                fontSize: '100px',
                fontFamily: 'Georgia, serif',
                fontWeight: 'bold',
                lineHeight: '1',
              }}
            >
              .
            </div>
          </div>

          {/* Description */}
          <div
            style={{
              color: 'rgba(28,18,8,0.6)',
              fontSize: '32px',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.01em',
              lineHeight: '1.4',
            }}
          >
            Full-service bilingual production for progressive global brands.
          </div>

          {/* CTA pill */}
          <div style={{ display: 'flex', marginTop: '8px' }}>
            <div
              style={{
                backgroundColor: '#e95228',
                color: '#fff',
                fontSize: '22px',
                fontFamily: 'Georgia, serif',
                fontWeight: 'bold',
                letterSpacing: '0.08em',
                padding: '16px 36px',
                textTransform: 'uppercase',
              }}
            >
              Get a Free Quote →
            </div>
          </div>
        </div>

        {/* Bottom — URL only */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <div
            style={{
              color: 'rgba(28,18,8,0.4)',
              fontSize: '20px',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.1em',
            }}
          >
            filminginjapan.com
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
