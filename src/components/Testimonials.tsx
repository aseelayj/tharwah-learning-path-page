import { useState } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import type { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
  lang?: 'en' | 'ar';
}

export default function Testimonials({ testimonials, lang = 'en' }: TestimonialsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const showNavigation = testimonials.length > 1;

  return (
    <section className="mb-6 md:mb-10" id="testimonials">
      <div className="container mx-auto max-w-7xl px-4 md:px-5">
        <div className="border-[0.5px] border-[#187FD3] rounded-lg bg-[#F0F8FC66] p-4 md:p-8 relative">
          <div className="relative overflow-hidden min-h-[200px] md:min-h-[285px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentSlide
                    ? 'opacity-100 relative'
                    : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="flex flex-col justify-between min-h-[200px] md:min-h-[285px] px-2 md:px-5">
                  <div className="relative mb-4 md:mb-6 px-0 md:px-12">
                    <p className="text-xs md:text-base leading-relaxed text-[#2E3948] font-normal line-clamp-6 md:line-clamp-none">
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="flex items-center mt-3 md:mt-5">
                    <div className="w-10 h-10 md:w-15 md:h-15 rounded-full overflow-hidden mr-3 md:mr-4 bg-gray-200 flex items-center justify-center border border-gray-300 flex-shrink-0">
                      {testimonial.author_image ? (
                        <img
                          src={testimonial.author_image}
                          alt={testimonial.author_name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-5 h-5 md:w-8 md:h-8 text-gray-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm md:text-[22px] font-medium text-[#2E3948] leading-tight mb-1 truncate">
                        {testimonial.author_name}
                      </div>
                      <div className="text-[11px] md:text-[13px] text-[#2E3948] leading-tight font-normal line-clamp-2">
                        {testimonial.author_position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showNavigation && (
            <div className="absolute bottom-10 right-3 flex gap-6 z-20">
              <button
                onClick={prevSlide}
                className="flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 bg-transparent border-0 p-0"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-[#187FD3]" />
              </button>
              <button
                onClick={nextSlide}
                className="flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 bg-transparent border-0 p-0"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-[#187FD3]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
