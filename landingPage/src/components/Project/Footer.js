import Image from 'next/image'
import React from 'react'

const Footer = ({ MiddleFooterComponent }) => {
    return (
        <>
            {MiddleFooterComponent && <MiddleFooterComponent />}
            <footer className="bg-gray-100 py-6 border border-top-1">
                <div className="container mx-auto flex justify-between items-center">

                    <div className="text-gray-700 text-sm">
                        © Hotspot Mobile – All Rights Reserved.
                    </div>

                    <div className="flex justify-center">
                        <Image alt="logo" src="/assets/images/hm_logo.png" width={30} height={30} />
                    </div>


                    <div className='text-gray-700 text-sm'>
                        Made with ♥ by
                        <a href='https://ajmalnasumudeen.in/' target='_blank'> Ajmal Nasumudeen</a>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer