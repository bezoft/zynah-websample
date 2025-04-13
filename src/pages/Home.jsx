import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Home() {
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
    <>
      <Header />

      <div className="bg-white min-h-screen font-sans text-gray-800 overflow-x-hidden">
        {/* Header */}


        {/* Hero Section - Fully Responsive Layout */}
        <section className="pt-32 md:pt-40 pb-16 min-h-screen bg-gradient-to-br from-pink-50 to-emerald-50 flex items-center">
          <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Hero Text */}
              <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-12 lg:mb-0 z-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-emerald-800 leading-tight mb-6">
                  Exotic Orchids
                  <span className="block text-3xl sm:text-4xl lg:text-5xl font-sans mt-2">At Affordable Prices</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-lg mb-8">
                  Discover our carefully curated collection of rare and beautiful orchids that bring elegance, color, and tranquility to your living space.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium flex items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    Explore Collection
                    <span className="ml-2">→</span>
                  </button>
                  <button className="bg-transparent border-2 border-emerald-300 text-emerald-700 px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-emerald-50">
                    Care Tips
                  </button>
                </div>
              </div>

              {/* Hero Image - Responsive Positioning */}
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full opacity-30 -z-10 blur-3xl"></div>
                <div className="absolute bottom-12 left-12 w-40 h-40 bg-pink-100 rounded-full opacity-40 -z-10 blur-3xl"></div>

                <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
                  <img
                    src="https://market99.com/cdn/shop/files/WW10006629-3_2048x.jpg?v=1737487675"
                    alt="Beautiful exotic orchid"
                    className="w-full rounded-2xl shadow-2xl object-cover"
                  />

                  {/* Floating badges - Hide on very small screens */}
                  <div className="absolute -left-4 sm:-left-8 top-1/4 bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-lg hidden sm:block">
                    <div className="text-emerald-700 font-bold text-sm sm:text-base">Premium Quality</div>
                    <div className="text-xs sm:text-sm text-gray-600">Hand-picked varieties</div>
                  </div>

                  <div className="absolute -right-4 sm:-right-8 bottom-1/4 bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-lg hidden sm:block">
                    <div className="text-emerald-700 font-bold text-sm sm:text-base">Easy Care</div>
                    <div className="text-xs sm:text-sm text-gray-600">Perfect for beginners</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Featured Collection Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-emerald-800 mb-4">Featured Collections</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Explore our most sought-after orchid varieties, each one cultivated with care and selected for its unique beauty.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                
                {
                  title: "Cattleyas",
                  description: "Vibrant and long-lasting blooms",
                  image: "https://www.zynahorchids.com/image/cache/catalog/Brassocattleya%20Taiwan%20Big%20Lip-300x300.jpg",
                  price: "₹800.00",
                  
                },
                {
                  title: "Dendrobiums",
                  description: "Elegant moth orchids perfect for beginners",
                  image: "https://www.zynahorchids.com/image/cache/catalog/Fryee-300x300.jpg",
                  price: "₹650.00",
                  featured: true
                },
                {
                  title: "Oncidium",
                  description: "Stunning fragrant flowers with rich colors",
                  image: "https://www.zynahorchids.com/image/cache/catalog/Oncidesa%20nanboh%20waltz-300x300.jpg",
                  price: "₹999.00"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-500 ${item.featured ? 'ring-2 ring-emerald-300 shadow-lg' : ''
                    }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {item.featured && (
                      <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Best Seller
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-emerald-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-base sm:text-lg font-bold text-emerald-700">{item.price}</span>
                      <button className="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10 sm:mt-12">
              <button className="border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 px-6 sm:px-8 py-3 rounded-full font-medium transition-all">
                View All Collections
              </button>
            </div>
          </div>
        </section>

        {/* Care Guide Section */}
        <section className="py-16 sm:py-20 bg-emerald-50">
          <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-emerald-800 mb-4 sm:mb-6">Orchid Care Guide</h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
                  Our experts share their knowledge to help your orchids thrive. Learn proper watering, lighting, and maintenance techniques.
                </p>

                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      title: "Watering",
                      description: "Water thoroughly once a week, allowing the media to dry between waterings."
                    },
                    {
                      title: "Light Exposure",
                      description: "Bright, indirect light is ideal. Avoid direct sunlight which can burn leaves."
                    },
                    {
                      title: "Temperature",
                      description: "Maintain temperatures between 65-80°F (18-27°C) for optimal growth."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-white p-2 sm:p-3 rounded-full shadow-md mr-3 sm:mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-emerald-800 mb-1 text-base sm:text-lg">{item.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <button className="mt-6 sm:mt-8 bg-emerald-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-emerald-700 transition-all font-medium text-sm sm:text-base">
                  Download Full Guide
                </button> */}
              </div>

              <div className="w-full lg:w-1/2 relative mt-4 lg:mt-0">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://bouqs.com/blog/wp-content/uploads/2018/06/shutterstock_1373650760-min-1080x720.jpg"
                    alt="Orchid care demonstration"
                    className="w-full rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-emerald-900/20 flex items-center justify-center">
                    {/* <button className="bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-lg transition-all">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </button> */}
                  </div>
                </div>

                {/* Responsive testimonial badge */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg max-w-[80%] sm:max-w-xs">
                  <div className="flex items-center mb-1 sm:mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm italic">"The care guide transformed my dying orchid into a beautiful blooming plant!"</p>
                  <p className="text-emerald-700 font-medium mt-1 sm:mt-2 text-xs sm:text-sm">- Sample.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-pink-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-100 rounded-full -ml-16 -mb-16 opacity-50"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-800 mb-3 sm:mb-4">Join Our Green Community</h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Subscribe to our newsletter for exclusive orchid care tips, special offers, and early access to new arrivals.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xs sm:max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm sm:text-base"
                  />
                  <button className="bg-emerald-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-emerald-700 transition-all font-medium whitespace-nowrap text-sm sm:text-base">
                    Subscribe
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 bg-emerald-50">
          <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-emerald-800 mb-3 sm:mb-4">What Our Customers Say</h2>
              <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">Discover why plant enthusiasts trust us for their orchid needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  name: "Sample 1",
                  testimonial: "The quality of orchids from this shop is extraordinary. They arrived in perfect condition and have been blooming for months!",
                  image: "https://ogletree.com/app/uploads/people/alexandre-abitbol.jpg"
                },
                {
                  name: "Sample 2",
                  testimonial: "I recommend these orchids to all my clients. The selection is unmatched and they make any space look instantly more sophisticated.",
                  image: "https://ogletree.com/app/uploads/people/alexandre-abitbol.jpg"
                },
                {
                  name: "Sample 3",
                  testimonial: "As an orchid enthusiast, I appreciate the rare varieties available here. The care guide has helped me keep even the most finicky specimens thriving.",
                  image: "https://ogletree.com/app/uploads/people/alexandre-abitbol.jpg"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="mr-3 sm:mr-4 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-800 text-base sm:text-lg">{item.name}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{item.title}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 italic text-sm sm:text-base">{item.testimonial}</p>

                  <div className="mt-4 sm:mt-6 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Footer */}
      </div>
      <Footer />
    </>
  )
}

export default Home