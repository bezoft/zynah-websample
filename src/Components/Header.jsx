import { useState, useEffect } from 'react';

function Header() {


   const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
    <div className="container mx-auto px-6">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl px-4 sm:px-6 py-4 flex justify-between items-center shadow-lg border border-white/20">
        <a href="/" className="text-xl sm:text-2xl font-bold font-serif text-emerald-700 space-x-3 flex items-center">
          <img className='w-12' src='assets/logo.svg'/>
          <h1 className='text-pink-500'>Zynah Orchids</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 xl:space-x-8">
            {['Home', 'Collections', 'Shop', 'Care Guide', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-emerald-800 font-medium relative after:absolute after:w-0 after:h-0.5 after:bg-emerald-600 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden sm:flex items-center space-x-4">
          {[
            <path d="M21.71 20.29l-5.4-5.4A7.9 7.9 0 0018 10c0-4.41-3.59-8-8-8S2 5.59 2 10s3.59 8 8 8a7.9 7.9 0 004.89-1.69l5.4 5.4 1.42-1.42zM4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" />,
            <path d="M17 18c-1.11 0-2 0.89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-1.11-0.89-2-2-2M1 2v2h2l3.6 7.59l-1.36 2.45C5.09 14.32 5 14.65 5 15c0 1.11 0.89 2 2 2h12v-2H7.42a0.25 0.25 0 0 1-0.25-0.25c0-0.05 0.01-0.09 0.03-0.12L8.1 13h7.45c0.75 0 1.41-0.42 1.75-1.03l3.58-6.47C21.25 4.82 20.77 4 20 4H5.21l-0.94-2M7 18c-1.11 0-2 0.89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-1.11-0.89-2-2-2z" />
          ].map((path, index) => (
            <button
              key={index}
              className="bg-pink-50 hover:bg-emerald-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <svg className="w-5 h-5 fill-pink-600" viewBox="0 0 24 24">
                {path}
              </svg>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden bg-emerald-50 hover:bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center"
        >
          <svg className="w-5 h-5 fill-emerald-700" viewBox="0 0 24 24">
            <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-6 right-6 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
          <nav className="px-4 py-3">
            <ul className="space-y-3">
              {['Home', 'Collections', 'Shop', 'Care Guide', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block py-2 px-3 text-emerald-800 font-medium hover:bg-emerald-50 rounded-lg"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-100 mt-3 pt-3 flex space-x-3">
              <button className="bg-emerald-50 hover:bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 fill-emerald-700" viewBox="0 0 24 24">
                  <path d="M21.71 20.29l-5.4-5.4A7.9 7.9 0 0018 10c0-4.41-3.59-8-8-8S2 5.59 2 10s3.59 8 8 8a7.9 7.9 0 004.89-1.69l5.4 5.4 1.42-1.42zM4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" />
                </svg>
              </button>
              <button className="bg-emerald-50 hover:bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 fill-emerald-700" viewBox="0 0 24 24">
                  <path d="M17 18c-1.11 0-2 0.89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-1.11-0.89-2-2-2M1 2v2h2l3.6 7.59l-1.36 2.45C5.09 14.32 5 14.65 5 15c0 1.11 0.89 2 2 2h12v-2H7.42a0.25 0.25 0 0 1-0.25-0.25c0-0.05 0.01-0.09 0.03-0.12L8.1 13h7.45c0.75 0 1.41-0.42 1.75-1.03l3.58-6.47C21.25 4.82 20.77 4 20 4H5.21l-0.94-2M7 18c-1.11 0-2 0.89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-1.11-0.89-2-2-2z" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  </header>
  )
}

export default Header