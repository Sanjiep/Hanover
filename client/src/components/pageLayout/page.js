import React from 'react'
import Footer from '@/components/footer/page'
import Navbar from '@/components/navbar/page'

function layout({children}) {
    return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
    )
}

export default layout