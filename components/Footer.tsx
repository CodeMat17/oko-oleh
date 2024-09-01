import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
      <div className='mt-12 bg-blue-950'>
          <div className='p-4 text-center text-sm text-gray-300'>This website was developed by Engr. Chukwu Matthew, Chief Oko Oleh&apos;s son (in-law). For more info, click <Link href='mailto:ask@soft-lutions.com.ng' className='text-blue-500'>here.</Link></div>
    </div>
  )
}

export default Footer