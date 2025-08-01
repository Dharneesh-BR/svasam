import { Link } from 'react-router-dom';
import MindImg from '../assets/mind.png';
import SoulImg from '../assets/soul.png';
import BodyImg from '../assets/Body.png';
import Logo from '../assets/Logo.png';
import FAQSection from '../components/FAQSection';

const CategoryCard = ({ to, title, description, image, alt }) => (
  <article className="flex flex-col items-center h-full">
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 w-full h-full flex flex-col">
      <img 
        src={image} 
        alt={alt} 
        className="w-28 h-28 mb-6 mx-auto object-contain"
        loading="lazy"
        width={112}
        height={112}
      />
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-center text-main mb-4">{title}</h2>
        <p className="text-text text-sm leading-relaxed text-center mb-6">
          {description}
        </p>
      </div>
      <div className="mt-auto">
        <Link 
          to={to} 
          className="flex items-center justify-center group w-full py-2 text-main hover:text-accent transition-colors"
          aria-label={`Explore ${title} programs`}
        >
          <span className="mr-2 font-medium">Explore</span>
          <svg 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
);

export default function Categories() {
  const categories = [
    {
      id: 'mind',
      title: 'Mind',
      description: 'The seat of consciousness, thoughts, and emotions. In spirituality, the mind is seen as a powerful tool for transformation and enlightenment.',
      image: MindImg,
      alt: 'Illustration representing the mind and consciousness'
    },
    {
      id: 'body',
      title: 'Body',
      description: 'The physical vessel that houses our spirit. In spirituality, the body is considered sacred and a temple for our soul\'s journey.',
      image: BodyImg,
      alt: 'Illustration representing physical health and the body'
    },
    {
      id: 'soul',
      title: 'Soul',
      description: 'The eternal essence of our being. In spirituality, the soul is our true self, the divine spark that connects us to the universe.',
      image: SoulImg,
      alt: 'Illustration representing the soul and spiritual essence'
    }
  ];

  return (
    <main className="relative min-h-screen w-full bg-background/80">
      {/* Decorative background logo */}
      <img
        src={Logo}
        alt=""
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-40 z-0 pointer-events-none select-none"
        draggable={false}
        aria-hidden="true"
      />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Spacer with semantic meaning */}
          <div className="h-12 md:h-16 w-full bg-background" aria-hidden="true" />
          
          {/* Hero Banner */}
          <header className="relative mb-12 md:mb-16 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-main to-accent opacity-90" />
            <div className="relative z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Discover Your Path</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Explore our holistic wellness categories designed to guide you on your journey to inner peace and transformation
              </p>
            </div>
          </header>

          {/* Categories Grid */}
          <section aria-labelledby="categories-heading" className="py-8 md:py-12">
            <h2 id="categories-heading" className="sr-only">Wellness Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  to={`/${category.id}`}
                  title={category.title}
                  description={category.description}
                  image={category.image}
                  alt={category.alt}
                />
              ))}
            </div>
          </section>
          
          {/* FAQ Section */}
          <FAQSection />
        </div>
      </div>
    </main>
  );
}
