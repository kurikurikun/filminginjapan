import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

// Shared move-ment family favicon: the M-M parent mark, white, on a
// per-property tint. Keep the mark identical across all three sites — only
// `background` changes, so the family reads as one but the tabs stay tellable
// apart.
//
//   move-ment.co       #1a1a1a on white  (near-black — the brand's dark palette)
//   tesutemo.co        #e95228 on white  (TesuTemo orange)
//   filminginjapan.com #fdf8f3 on #0d0a07  ← this file
//
// FIJ is the one inverted tile: its site ground is the warm cream #fdf8f3 with
// #0d0a07 text (app/globals.css), so the mark goes dark-on-light here. That also
// buys the clearest three-way separation — near-black / orange / cream — which
// red did not, sitting too close to TesuTemo's orange at tab size.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fdf8f3',
          borderRadius: '14px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            color: '#0d0a07',
            fontSize: '25px',
            fontWeight: 700,
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}
        >
          <span style={{ display: 'flex' }}>M</span>
          <span
            style={{
              display: 'flex',
              width: '7px',
              height: '4px',
              background: '#0d0a07',
              borderRadius: '1px',
            }}
          />
          <span style={{ display: 'flex' }}>M</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
