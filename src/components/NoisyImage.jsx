import { useCallback, useEffect, useRef } from "react";

const NoisyImage = (props) => {
  const turbRef = useRef();
  const dispRef = useRef();
  const animateFrameRef = useRef();

  let frames = 0;
  let seed = Math.floor(Math.random() * 10) + 1;
  let scale = Math.floor(Math.random() * 20) + 10;
  const random1 = Math.random() < 0.5 ? 1 : -1;
  const random2 = Math.random() < 0.5 ? 1 : -1;
  let seIncrement = 0.1 * random1;
  let scIncrement = 0.1 * random2;
  const rad = Math.PI / 180;
  let last = Date.now();
  console.log(scale);
  const AnimateBaseFrequency = useCallback(() => {
    //baseFrequency="0.01 .1"
    // let bfx = 0.02;
    // let bfy = 0.65;

    // frames += 0.25;
    // bfx += 0.005 * Math.cos(frames * rad);
    // bfy += 0.025 * Math.sin(frames * rad);
    seed = (seed + seIncrement) % 5;
    // if (seed < 1 || seed > 10) seIncrement *= -1;
    scale += scIncrement;
    if (scale < 10 || scale > 31) scIncrement *= -1;
    // let bf = `${bfx} ${bfy}`;

    // console.log("seed: ", seed);
    // turbRef.current?.setAttributeNS(null, "baseFrequency", bf);
    turbRef.current?.setAttributeNS(null, "seed", seed);
    dispRef.current?.setAttributeNS(null, "scale", scale);
    animateFrameRef.current = requestAnimationFrame(AnimateBaseFrequency);
    // requestAnimationFrame(AnimateBaseFrequency);
  });

  useEffect(() => {
    animateFrameRef.current =
      window.requestAnimationFrame(AnimateBaseFrequency);

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      window.cancelAnimationFrame(animateFrameRef.current);
    };
  }, []);

  return (
    <svg
      id="noisy-svg"
      {...props}
      viewBox="0 0 400 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="noise" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            ref={turbRef}
            baseFrequency="0.02 0.65"
            result="NOISE"
            numOctaves="1"
          />
          <feDisplacementMap
            ref={dispRef}
            in="SourceGraphic"
            in2="NOISE"
            scale="25"
            xChannelSelector="R"
            yChannelSelector="R"
          ></feDisplacementMap>
        </filter>
      </defs>
      <image
        {...props}
        id="noisy-image"
        xlinkHref={props.href}
        x="0"
        y="0"
        filter="url(#noise)"
      ></image>
    </svg>
  );
};

export default NoisyImage;
