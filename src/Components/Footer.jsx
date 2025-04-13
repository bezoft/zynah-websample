import React from 'react'

function Footer() {
    return (
        <footer className="bg-emerald-800 px-10 text-white pt-16 pb-8">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <a href="/" className="text-xl sm:text-2xl font-bold font-serif text-emerald-700 space-x-3 flex items-center">
                            {/* <img className='w-12' src='assets/logo.svg'/> */}
                            <h1 className='text-emerald-500'>Zynah Orchids</h1>
                        </a>
                        <p className="text-emerald-100 mb-6">
                            Bringing nature's elegance to your home with premium quality orchids.
                        </p>
                        <div className="flex space-x-4">
                            {['facebook', 'twitter', 'instagram', 'pinterest'].map((social) => (
                                <a key={social} href="#" className="bg-emerald-700 hover:bg-emerald-600 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                                    <span className="sr-only">{social}</span>
                                    {/* Simple placeholder for social icons */}
                                    <div className="w-5 h-5 rounded-full bg-white/80"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Shop', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Customer Service</h3>
                        <ul className="space-y-3">
                            {['Shipping Policy', 'Returns & Refunds', 'FAQ', 'Track Order', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-emerald-100">
                            <li className="flex items-start">
                                <span className="mr-2">📍</span>
                                <span>Madathiparambil ,Vennala PO, Kochi, 682028, India.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">📞</span>
                                <span>+91 9447325641</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">✉️</span>
                                <span>info@Zynahorchids.com</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">🕐</span>
                                <span>Mon-Sat: 8am-6pm</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-emerald-700 pt-8 text-center text-emerald-200">
                    <p>© 2025 Orchid Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer