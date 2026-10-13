import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'JengaSec Arcade | Cyber Icebreakers',description:'Three days of quick cybersecurity games at JengaSec.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
