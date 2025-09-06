// import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'

// export function Features() {
//     return (
//         <section className="overflow-hidden py-16 md:py-32">
//             <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
//                 <div className="relative  max-w-2xl">
//                     <h2 className="text-4xl font-semibold lg:text-5xl">Built for Scaling teams</h2>
//                     <p className="mt-6 text-lg">Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface.</p>
//                 </div>
//                 <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
//                     <div className="[perspective:800px]">
//                         <div className="[transform:skewY(-2deg)skewX(-2deg)rotateX(6deg)]">
//                             <div className="aspect-[88/36] relative">
//                                 <div
//                                     className="[background-image:radial-gradient(var(--tw-gradient-stops,at_75%_25%))] to-background z-1 -inset-[4.25rem] absolute from-transparent to-75%"></div>
//                                 <img
//                                     src="https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png"
//                                     className="absolute inset-0 z-10"
//                                     alt="payments illustration dark"
//                                     width={2797}
//                                     height={1137} />
//                         <img
//                             src="https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png"
//                             className="hidden dark:block"
//                             alt="payments illustration dark"
//                             width={2797}
//                             height={1137} />
//                         <img
//                             src="https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png
//     "
//                             className="dark:hidden"
//                             alt="payments illustration light"
//                             width={2797}
//                             height={1137} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
//                     <div className="space-y-3">
//                         <div className="flex items-center gap-2">
//                             <Zap className="size-4" />
//                             <h3 className="text-sm font-medium">Faaast</h3>
//                         </div>
//                         <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
//                     </div>
//                     <div className="space-y-2">
//                         <div className="flex items-center gap-2">
//                             <Cpu className="size-4" />
//                             <h3 className="text-sm font-medium">Powerful</h3>
//                         </div>
//                         <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
//                     </div>
//                     <div className="space-y-2">
//                         <div className="flex items-center gap-2">
//                             <Lock className="size-4" />
//                             <h3 className="text-sm font-medium">Security</h3>
//                         </div>
//                         <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
//                     </div>
//                     <div className="space-y-2">
//                         <div className="flex items-center gap-2">
//                             <Sparkles className="size-4" />

//                             <h3 className="text-sm font-medium">AI Powered</h3>
//                         </div>
//                         <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }



import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "https://res.cloudinary.com/datwcxi7y/image/upload/v1756452543/Screenshot_2025-08-29_125834_jnwl5e.png",
  "https://res.cloudinary.com/datwcxi7y/image/upload/v1756457107/Screenshot_2025-08-29_141403_gprs1s.png",
  "https://res.cloudinary.com/datwcxi7y/image/upload/v1756447884/Screenshot_2025-08-29_113216_ck9c8p.png",
  "https://res.cloudinary.com/datwcxi7y/image/upload/v1756447884/Screenshot_2025-08-29_113216_ck9c8p.png",
  "https://res.cloudinary.com/datwcxi7y/image/upload/v1756447884/Screenshot_2025-08-29_113216_ck9c8p.png",
  "https://res.cloudinary.com/datwcxi7y/image/upload/v1756447884/Screenshot_2025-08-29_113216_ck9c8p.png",
];

export function Features() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="overflow-hidden py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative max-w-2xl">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Built for Scaling teams
          </h2>
          <p className="mt-6 text-lg">
            Empower your team with workflows that adapt to your needs, whether
            you prefer git synchronization or an AI Agents interface.
          </p>
        </div>

        {/* Image Carousel with same UI */}
        <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
          <div className="[perspective:800px]">
            <div className="[transform:skewY(-2deg)skewX(-2deg)rotateX(6deg)]">
              <div className="aspect-[88/36] relative">
                <div className="[background-image:radial-gradient(var(--tw-gradient-stops,at_75%_25%))] to-background z-1 -inset-[4.25rem] absolute from-transparent to-75%"></div>

                <img
                  src={images[current]}
                  className="absolute inset-0 z-10 rounded-xl shadow-xl"
                  alt={`screenshot-${current + 1}`}
                  width={2797}
                  height={1137}
                />
              </div>
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Features grid stays same */}
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          {/* your feature cards here */}
        </div>
      </div>
    </section>
  );
}
