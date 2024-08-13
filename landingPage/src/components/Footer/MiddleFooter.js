import React from 'react';

const MiddleFooter = () => {
    const popularCategories = [
        'Home Theater',
        'Tablets',
        'Cell Phones',
        'Audio',
        'Wearable Technology',
        'Health & Wellness',
        'Smart Home',
    ];

    const popularBrands = [
        'Apple',
        'Samsung',
        'Xiaomi',
        'Dyson',
        'HP',
        'Sony',
        'Philips',
        'LG',
        'Lenovo',
        'Dell',
        'All Brands',
    ];

    const usefulLinks = [
        'About Us',
        'Contact Us',
        'Help Center',
        'Policy',
        'Sitemap',
    ];

    const customerCare = [
        'Payments',
        'Order Tracking',
        'Product Returns',
        'Wishlist',
        'Shopping Cart',
        'Checkout',
    ];

    return (
        <footer className="bg-gray-100 py-10 px-2">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Popular Categories */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
                    <ul className="text-gray-600 space-y-2">
                        {popularCategories.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Popular Brands */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Popular Brands</h3>
                    <ul className="text-gray-600 space-y-2">
                        {popularBrands.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                    <ul className="text-gray-600 space-y-2">
                        {usefulLinks.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>


                {/* Follow Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4 text-gray-600">
                        <a
                            href='https://wa.me/919562440770'
                            target='_blank'
                            className=' cursor-pointer'
                        >
                            <WhatsApp />
                        </a>
                        <a
                            href='#'
                            target='_blank'
                            className=' cursor-pointer'
                        >
                            <Twitter />
                        </a>
                        <a
                            href='https://www.facebook.com/hotspotmobileskariavattom/'
                            target='_blank'
                            className=' cursor-pointer'
                        >
                            <Facebook />
                        </a>
                        <a
                            href='#'
                            target='_blank'
                            className=' cursor-pointer'
                        >
                            <Instagram />
                        </a>
                        <a
                            href='#'
                            target='_blank'
                            className=' cursor-pointer'
                        >
                            <Youtube />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default MiddleFooter;
const Twitter = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 30 30"
        fill="currentColor"
    >
        <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
    </svg>
);

const Facebook = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 30 30"
        fill="currentColor"
    >
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
    </svg>
);
const Instagram = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 30 30"
        fill="currentColor"
    >
        <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
    </svg>
);

const Youtube = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={size}
        height={size} viewBox="0 0 30 30">
        <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 9.3808594 6.2226562 L 10.529297 6.2226562 L 10.988281 8.375 C 11.105281 8.905 11.192047 9.3564687 11.248047 9.7304688 L 11.283203 9.7304688 C 11.322203 9.4624687 11.407969 9.0138125 11.542969 8.3828125 L 12.019531 6.2226562 L 13.167969 6.2226562 L 11.835938 10.970703 L 11.835938 13.248047 L 10.695312 13.248047 L 10.695312 10.970703 L 9.3808594 6.2226562 z M 14.494141 8.015625 C 14.874141 8.015625 15.17725 8.093 15.40625 8.25 C 15.63525 8.406 15.802203 8.6514219 15.908203 8.9824219 C 16.014203 9.3144219 16.068359 9.7565937 16.068359 10.308594 L 16.068359 11.054688 C 16.068359 11.602688 16.015109 12.041047 15.912109 12.373047 C 15.809109 12.705047 15.641156 12.949516 15.410156 13.103516 C 15.179156 13.257516 14.86475 13.332031 14.46875 13.332031 C 14.06175 13.332031 13.741766 13.254656 13.509766 13.097656 C 13.277766 12.941656 13.113625 12.699141 13.015625 12.369141 C 12.917625 12.039141 12.869141 11.601687 12.869141 11.054688 L 12.869141 10.308594 C 12.869141 9.7555937 12.924156 9.3125625 13.035156 8.9765625 C 13.147156 8.6435625 13.323547 8.3971406 13.560547 8.2441406 C 13.797547 8.0901406 14.108141 8.015625 14.494141 8.015625 z M 16.669922 8.1152344 L 17.824219 8.1152344 L 17.824219 11.884766 C 17.824219 12.113766 17.849391 12.277 17.900391 12.375 C 17.951391 12.473 18.034344 12.521484 18.152344 12.521484 C 18.252344 12.521484 18.348406 12.491688 18.441406 12.429688 C 18.533406 12.368688 18.602484 12.290312 18.646484 12.195312 L 18.646484 8.1152344 L 19.802734 8.1152344 L 19.802734 13.25 L 18.896484 13.25 L 18.796875 12.621094 L 18.771484 12.621094 C 18.526484 13.096094 18.158969 13.333984 17.667969 13.333984 C 17.327969 13.333984 17.074109 13.221047 16.912109 12.998047 C 16.750109 12.775047 16.669922 12.426172 16.669922 11.951172 L 16.669922 8.1152344 z M 14.46875 8.8125 C 14.31275 8.8125 14.202672 8.8964063 14.138672 9.0664062 C 14.074672 9.2374062 14.042969 9.507 14.042969 9.875 L 14.042969 11.474609 C 14.042969 11.854609 14.072766 12.127922 14.134766 12.294922 C 14.196766 12.461922 14.308703 12.546875 14.470703 12.546875 C 14.631703 12.545875 14.744594 12.462922 14.808594 12.294922 C 14.872594 12.127922 14.904297 11.853609 14.904297 11.474609 L 14.904297 9.875 C 14.904297 9.506 14.872594 9.2364062 14.808594 9.0664062 C 14.744594 8.8954063 14.63075 8.8125 14.46875 8.8125 z M 8.7773438 14.222656 L 21.222656 14.222656 C 22.200656 14.222656 23 15.022 23 16 L 23 22.222656 C 23 23.200656 22.200656 24 21.222656 24 L 8.7773438 24 C 7.7993437 24 7 23.200656 7 22.222656 L 7 16 C 7 15.022 7.7993437 14.222656 8.7773438 14.222656 z M 15.044922 16 L 15.044922 22.150391 L 15.849609 22.150391 L 15.949219 21.740234 L 15.970703 21.740234 C 16.046703 21.887234 16.158547 22.002891 16.310547 22.087891 C 16.461547 22.171891 16.6285 22.214844 16.8125 22.214844 C 17.1425 22.214844 17.383063 22.063766 17.539062 21.759766 C 17.695062 21.455766 17.773438 20.979984 17.773438 20.333984 L 17.773438 19.648438 L 17.771484 19.648438 C 17.771484 19.163438 17.742594 18.783766 17.683594 18.509766 C 17.624594 18.236766 17.529438 18.039016 17.398438 17.916016 C 17.267437 17.793016 17.084516 17.732422 16.853516 17.732422 C 16.673516 17.732422 16.506562 17.783766 16.351562 17.884766 C 16.195563 17.985766 16.075234 18.118203 15.990234 18.283203 L 15.984375 18.283203 L 15.984375 16 L 15.044922 16 z M 9.2109375 16.220703 L 9.2109375 17.003906 L 10.179688 17.003906 L 10.179688 22.150391 L 11.132812 22.150391 L 11.132812 17.003906 L 12.101562 17.003906 L 12.101562 16.220703 L 9.2109375 16.220703 z M 19.529297 17.734375 C 19.044297 17.734375 18.701953 17.883594 18.501953 18.183594 C 18.301953 18.483594 18.201172 18.958375 18.201172 19.609375 L 18.201172 20.365234 C 18.201172 20.997234 18.298188 21.464625 18.492188 21.765625 C 18.686187 22.066625 19.022906 22.21875 19.503906 22.21875 C 19.904906 22.21875 20.213594 22.119875 20.433594 21.921875 C 20.653594 21.724875 20.763672 21.424437 20.763672 21.023438 C 20.763672 20.957438 20.759859 20.905187 20.755859 20.867188 L 19.914062 20.816406 C 19.910062 21.080406 19.880172 21.269812 19.826172 21.382812 C 19.772172 21.495812 19.670391 21.552734 19.525391 21.552734 C 19.417391 21.552734 19.337156 21.521031 19.285156 21.457031 C 19.233156 21.394031 19.200594 21.291344 19.183594 21.152344 C 19.166594 21.013344 19.158203 20.805344 19.158203 20.527344 L 19.158203 20.306641 L 20.789062 20.306641 L 20.789062 19.566406 C 20.789062 19.109406 20.752688 18.750234 20.679688 18.490234 C 20.605687 18.231234 20.479781 18.041922 20.300781 17.919922 C 20.120781 17.796922 19.864297 17.734375 19.529297 17.734375 z M 11.810547 17.816406 L 11.810547 21.054688 C 11.810547 21.454687 11.878625 21.750453 12.015625 21.939453 C 12.152625 22.127453 12.362391 22.222656 12.650391 22.222656 C 13.065391 22.222656 13.377938 22.021141 13.585938 21.619141 L 13.605469 21.619141 L 13.689453 22.150391 L 14.453125 22.150391 L 14.455078 22.150391 L 14.455078 17.816406 L 13.480469 17.816406 L 13.480469 21.259766 C 13.442469 21.339766 13.384641 21.406031 13.306641 21.457031 C 13.229641 21.509031 13.1475 21.535156 13.0625 21.535156 C 12.9625 21.535156 12.893563 21.495109 12.851562 21.412109 C 12.808563 21.330109 12.787109 21.191047 12.787109 20.998047 L 12.787109 17.816406 L 11.810547 17.816406 z M 19.509766 18.394531 C 19.613766 18.394531 19.690234 18.423422 19.740234 18.482422 C 19.790234 18.541422 19.824797 18.641156 19.841797 18.785156 C 19.860797 18.929156 19.869141 19.141922 19.869141 19.419922 L 19.869141 19.730469 L 19.15625 19.730469 L 19.15625 19.419922 C 19.15625 19.136922 19.164641 18.924156 19.181641 18.785156 C 19.197641 18.646156 19.229297 18.547328 19.279297 18.486328 C 19.329297 18.426328 19.405766 18.394531 19.509766 18.394531 z M 16.414062 18.425781 C 16.514063 18.425781 16.590531 18.464016 16.644531 18.541016 C 16.697531 18.618016 16.736812 18.749594 16.757812 18.933594 C 16.778813 19.117594 16.789063 19.37875 16.789062 19.71875 L 16.789062 20.277344 C 16.789062 20.593344 16.777953 20.841531 16.751953 21.019531 C 16.725953 21.199531 16.681141 21.327344 16.619141 21.402344 C 16.557141 21.477344 16.477047 21.515625 16.373047 21.515625 C 16.292047 21.515625 16.218391 21.494031 16.150391 21.457031 C 16.082391 21.419031 16.026375 21.363109 15.984375 21.287109 L 15.984375 18.828125 C 16.017375 18.711125 16.074297 18.613109 16.154297 18.537109 C 16.234297 18.461109 16.320062 18.425781 16.414062 18.425781 z"></path>
    </svg>
);


const WhatsApp = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={size}
        height={size} viewBox="0 0 30 30">
        <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
    </svg>
)