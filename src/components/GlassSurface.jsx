import React, { useMemo } from "react";

const GlassSurface = ({
  children,
  width,
  height,
  borderRadius = 24,
  className = "",
  displace = 8, // visual intensity (not exact displacement)
  distortionScale = 0, // kept for API parity
  redOffset = 0,
  greenOffset = 0,
  blueOffset = 0,
  brightness = 100,
  opacity = 0.6,
  mixBlendMode = "normal",
  style = {},
  fillBackground = true
}) => {
  const accentShadow = useMemo(() => {
    const r = Math.max(0, Math.min(255, 127 + redOffset));
    const g = Math.max(0, Math.min(255, 0 + greenOffset));
    const b = Math.max(0, Math.min(255, 255 + blueOffset));
    return `0 0 ${Math.max(8, displace)}px rgba(${r}, ${g}, ${b}, 0.35)`;
  }, [displace, redOffset, greenOffset, blueOffset]);

  const glassStyle = {
    width: width ? (typeof width === "number" ? `${width}px` : width) : "auto",
    height: height ? (typeof height === "number" ? `${height}px` : height) : "auto",
    borderRadius: typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius,
    position: "relative",
    background: fillBackground
      ? "linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))"
      : "transparent",
    border: "1px solid rgba(255,255,255,0.18)",
    backdropFilter: `blur(${Math.max(6, displace)}px) saturate(140%)`,
    WebkitBackdropFilter: `blur(${Math.max(6, displace)}px) saturate(140%)`,
    boxShadow: `0 4px 24px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.25), ${accentShadow}`,
    overflow: "hidden",
    filter: `brightness(${brightness}%)`,
    opacity,
    mixBlendMode,
    ...style
  };

  return (
    <div className={className} style={glassStyle}>
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: fillBackground
            ? "radial-gradient(1200px 400px at -10% 0%, rgba(127,0,255,0.16), transparent 60%), radial-gradient(800px 300px at 110% 120%, rgba(225,0,255,0.12), transparent 60%)"
            : "transparent",
          pointerEvents: "none",
          zIndex: 0
        }}
      />
    </div>
  );
};

export default GlassSurface;


