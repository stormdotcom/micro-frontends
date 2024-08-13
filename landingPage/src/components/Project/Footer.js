import Image from 'next/image'
import React from 'react'

const Footer = ({ MiddleFooterComponent }) => {
    return (
        <>
            {MiddleFooterComponent && <MiddleFooterComponent />}
            <footer className="bg-gray-100 py-4 border-t">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                    <div className="text-gray-700 text-sm text-center md:text-left">
                        © Hotspot Mobile – All Rights Reserved.
                    </div>

                    <div className="flex justify-center">
                        <Image alt="logo" src="/assets/images/hm_logo.png" width={24} height={24} />
                    </div>

                    <div className="text-gray-700 text-sm text-center md:text-right">
                        Made with ♥ by{' '}
                        <a href='https://ajmalnasumudeen.in/' target='_blank' className="underline hover:text-primary">
                            Ajmal Nasumudeen
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
