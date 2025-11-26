import React from 'react';
import { gsap } from 'gsap';

function FlowingMenuVertical({ items = [], onSelect }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} onSelect={onSelect} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link = '#', text, image, value, onSelect }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  React.useEffect(() => {
    hideMarquee();
  }, []);

  const hideMarquee = () => {
    if (!marqueeRef.current || !marqueeInnerRef.current) return;
    gsap.killTweensOf([marqueeRef.current, marqueeInnerRef.current]);
    gsap.set(marqueeRef.current, { y: '101%', autoAlpha: 0 });
    gsap.set(marqueeInnerRef.current, { y: '-101%', backgroundColor: 'transparent' });
  };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);
    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%', autoAlpha: 1 })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%', backgroundColor: 'rgba(255,255,255,0.14)' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleMouseLeave = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);
    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .set(marqueeRef.current, { autoAlpha: 0 })
      .set(marqueeInnerRef.current, { backgroundColor: 'transparent' });
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="text-[#060010] uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0]">{text}</span>
      <div
        className="w-[200px] h-[7vh] my-[1.2em] mx-[2vw] p-[1em_0] rounded-[8px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ));

  return (
    <div className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_rgba(255,255,255,0.2)]" ref={itemRef}>
      <a
        className="flex items-center justify-center h-[64px] relative cursor-pointer uppercase no-underline font-semibold text-white text-[4vh] hover:text-[#060010]"
        href={link}
        onClick={(e) => {
          e.preventDefault();
          // Ensure marquee hides immediately on click to avoid white overlay persisting
          hideMarquee();
          onSelect && onSelect(value);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[80%] overflow-hidden rounded-[8px] pointer-events-none translate-y-[101%]"
        style={{ background: 'transparent', zIndex: 2, opacity: 0 }}
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenuVertical;


