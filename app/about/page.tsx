import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our company.',
  openGraph: {
    title: 'About Us',
    description: 'Learn more about our company.',
    images: [
      {
        url: 'https://cdn-images.welcometothejungle.com/O9G5byFmV_n0NJEiNve-rJZSFLXZUNre0j1P3von9oA/rs:auto:980::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcnRpY2xlL2ltYWdlLzM0NTQvMTU3MzYzL2dpdGh1Yi1kZXNpZ25lci1kZXZlbG9wZXIucG5n',
        width: 1200,
        height: 630,
        alt: 'About Us',
      },
    ],
  },
}
export default function AboutPage() {
  return (
    <div>
          <h1>AboutPage</h1>    
    </div>
  )
} 
 
