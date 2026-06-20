'use client'
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface CardData {
  id: number;
  title?: string;
  content: string;
  imgUrl: string;
  href?: string;
}

interface CardProps {
  data: CardData[];
  showCarousel?: boolean;
  /** Cards shown at desktop; automatically reduces to 2 (tablet) / 1 (mobile). */
  cardsPerView?: number;
}

const Card = ({ data, showCarousel = true, cardsPerView = 3 }: CardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [perView, setPerView] = useState(cardsPerView);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive cards-per-view (mobile 1 / tablet 2 / desktop = cardsPerView)
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(Math.min(2, cardsPerView));
      else setPerView(cardsPerView);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [cardsPerView]);

  const isSingleCard = data?.length === 1;
  const canCarousel = showCarousel && !!data && data.length > perView;
  // Width of exactly one card within the (perView + 1)-wide track — used for sliding.
  const slidePct = 100 / (perView + 1);

  const nextSlide = () => {
    if (isAnimating || !canCarousel) return;
    setIsAnimating(true);
    const nextIndex = (currentIndex + 1) % data.length;
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 500ms ease";
      containerRef.current.style.transform = `translateX(-${slidePct}%)`;
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        if (containerRef.current) {
          containerRef.current.style.transition = "none";
          containerRef.current.style.transform = "translateX(0)";
          void containerRef.current.offsetWidth; // force reflow
          setIsAnimating(false);
        }
      }, 500);
    }
  };

  const prevSlide = () => {
    if (isAnimating || !canCarousel) return;
    setIsAnimating(true);
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    if (containerRef.current) {
      containerRef.current.style.transition = "none";
      containerRef.current.style.transform = `translateX(-${slidePct}%)`;
      setCurrentIndex(prevIndex);
      void containerRef.current.offsetWidth; // force reflow
      containerRef.current.style.transition = "transform 500ms ease";
      containerRef.current.style.transform = "translateX(0)";
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const getVisibleCards = () => {
    if (!canCarousel) return data || [];
    const visibleCards: CardData[] = [];
    for (let i = 0; i < perView + 1; i++) {
      visibleCards.push(data[(currentIndex + i) % data.length]);
    }
    return visibleCards;
  };

  if (!data || data.length === 0) {
    return <div className="text-center text-on-surface-variant">No cards available.</div>;
  }

  const trackWidth = canCarousel ? `${((perView + 1) * 100) / perView}%` : "100%";
  const cardWidth = canCarousel
    ? `${100 / (perView + 1)}%`
    : `${100 / Math.min(perView, data.length)}%`;

  return (
    <div className="w-full">
      <div className={`relative ${isSingleCard ? "max-w-sm mx-auto" : "w-full"}`}>
        {/* Carousel Controls */}
        {canCarousel && (
          <>
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              aria-label="Previous industries"
              className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 place-items-center rounded-full bg-primary text-on-primary shadow-card transition hover:scale-105 active:scale-100 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              aria-label="Next industries"
              className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 place-items-center rounded-full bg-primary text-on-primary shadow-card transition hover:scale-105 active:scale-100 disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Visible area */}
        <div className="overflow-hidden">
          {/* Sliding track */}
          <div
            ref={containerRef}
            className="flex"
            style={{ transform: "translateX(0)", width: trackWidth }}
          >
            {getVisibleCards().map((card, idx) => {
              const inner = (
                <div className="group relative h-80 md:h-96 overflow-hidden rounded-2xl ambient-shadow bg-surface-container-lowest">
                  <img
                    src={card.imgUrl}
                    alt={card.title || ""}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                  />
                  {/* Legibility scrim + always-visible title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-headline-md text-2xl leading-tight tracking-tight text-white">
                      {card.title}
                    </h3>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex translate-y-full flex-col justify-end gap-3 bg-primary/90 p-6 text-white transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="font-headline-md text-2xl leading-tight">{card.title}</h3>
                    <p className="font-body-sm text-body-sm text-white/85">{card.content}</p>
                    {card.href && (
                      <span className="inline-flex items-center gap-1.5 font-label-md text-label-md uppercase tracking-wider text-secondary-fixed">
                        Explore <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </div>
              );

              return (
                <div
                  key={`card-${currentIndex}-${idx}`}
                  style={{ width: cardWidth }}
                  className="shrink-0 px-2 md:px-3"
                >
                  {card.href ? (
                    <Link to={card.href} className="block h-full">
                      {inner}
                    </Link>
                  ) : (
                    inner
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
