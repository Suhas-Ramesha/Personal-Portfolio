import React from "react";
import PillNav from "./PillNav";
import GlassSurface from "./GlassSurface";

const Navbar = () => {
  const items = [
    { label: "About", href: "#About" },
    { label: "Skills", href: "#Skills" },
    { label: "Experience", href: "#Experience" },
    { label: "Projects", href: "#Projects" },
    { label: "Education", href: "#Education" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "6px 0",
        backgroundColor: "transparent",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden"
      }}
    >
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        width: "100%",
        maxWidth: "100%",
        padding: "0 16px",
        boxSizing: "border-box"
      }}>
        <div style={{ 
          position: "relative", 
          display: "inline-block",
          width: "100%",
          maxWidth: "100%"
        }}>
          <GlassSurface
            borderRadius={22}
            opacity={0.40}
            brightness={110}
            displace={10}
            redOffset={12}
            greenOffset={0}
            blueOffset={24}
            style={{ position: "absolute", top: -4, bottom: -4, left: -6, right: -6, pointerEvents: "none" }}
            fillBackground={true}
          >
            <div style={{ height: 0 }} />
          </GlassSurface>
          <PillNav
            items={items}
            baseColor="#ffffff"
            pillColor="#141625"
            hoveredPillTextColor="#0e121b"
            pillTextColor="#ffffff"
            className=""
            initialLoadAnimation={true}
            showLogo={false}
            navBackground="transparent"
            navHeight={58}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
