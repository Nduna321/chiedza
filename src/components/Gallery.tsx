const images = [
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.04.jpeg', title: 'Site Development', description: 'Professional site preparation' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.05.jpeg', title: 'Gated Entrance', description: 'Secure entrance pillars under construction' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.05_(2).jpeg', title: 'Construction Progress', description: 'Walls taking shape' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.06.jpeg', title: 'Perimeter Wall', description: 'Modern boundary wall development' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.07_(1).jpeg', title: 'Quality Masonry', description: 'Professional brick laying' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.07_(2).jpeg', title: 'Wall Construction', description: 'Building the community boundary' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.08.jpeg', title: 'Site View', description: 'Community development overview' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.08_(1).jpeg', title: 'Development Progress', description: 'Active construction site' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.09.jpeg', title: 'Infrastructure Work', description: 'Road and utility development' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.13.jpeg', title: 'Community Vision', description: 'Landscape and planning' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.14.jpeg', title: 'Development Stage', description: 'Building momentum' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.16.jpeg', title: 'Construction Quality', description: 'Expert workmanship' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.16_(1).jpeg', title: 'Structural Work', description: 'Solid foundations' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.18.jpeg', title: 'Active Site', description: 'Team collaboration' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.18_(1).jpeg', title: 'Construction Team', description: 'Dedicated professionals' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.18_(2).jpeg', title: 'Progress Update', description: 'Building excellence' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.19.jpeg', title: 'Site Overview', description: 'Comprehensive development view' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.19_(1).jpeg', title: 'Future Community', description: 'Vision coming to life' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.21.jpeg', title: 'Quality Standards', description: 'Professional development' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.21_(1).jpeg', title: 'Construction Excellence', description: 'Building community pride' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.21_(2).jpeg', title: 'Development Milestone', description: 'Progress milestone reached' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.23.jpeg', title: 'Infrastructure Details', description: 'Precision construction' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.23_(1).jpeg', title: 'Quality Assurance', description: 'Every detail matters' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.24.jpeg', title: 'Building Progress', description: 'Construction advances' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.25.jpeg', title: 'Landscape Design', description: 'Enhancing the environment' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.25_(1).jpeg', title: 'Site Development', description: 'Creating value' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.26.jpeg', title: 'Community Building', description: 'Construction progress' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.26_(1).jpeg', title: 'Development Drive', description: 'Moving forward' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.26_(2).jpeg', title: 'Quality Focus', description: 'Excellence in construction' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.27.jpeg', title: 'Security Infrastructure', description: 'Quality perimeter wall construction' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.27_(1).jpeg', title: 'Wall Systems', description: 'Comprehensive security' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.27_(2).jpeg', title: 'Construction Update', description: 'Latest progress' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.29.jpeg', title: 'Development View', description: 'Community landscape' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.29_(1).jpeg', title: 'Site Perspective', description: 'Master plan realization' },
  { src: '/WhatsApp_Image_2026-02-09_at_16.16.30.jpeg', title: 'Community Overview', description: 'Panoramic view of the development site' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Construction Progress
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            See the quality development taking shape. Our commitment to excellence is visible in every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 auto-rows-max">
          {images.map((image, index) => {
            const heightClass = index % 5 === 0 ? 'sm:col-span-1 lg:row-span-2' : '';
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 ${heightClass}`}
              >
                <div className="aspect-square sm:aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                  <div className="p-3 sm:p-4 lg:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 line-clamp-2">{image.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">{image.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 bg-amber-50 rounded-lg sm:rounded-2xl p-6 sm:p-8 text-center border-2 border-amber-200">
          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
            Interested in a site visit? See the development firsthand and envision your future at Chiedza.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            Schedule a Visit
          </a>
        </div>
      </div>
    </section>
  );
}
