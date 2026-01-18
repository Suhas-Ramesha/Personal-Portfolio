const stripProtocol = (url = "") => url.replace(/(^\w+:|^)\/\//, "");

const buildPlaceholderSvg = (label = "Preview") => {
  const safeLabel = (label || "Preview").toString().slice(0, 18);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="480" height="320" viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#182848" />
      <stop offset="100%" stop-color="#4b6cb7" />
    </linearGradient>
  </defs>
  <rect width="480" height="320" fill="url(#grad)" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#f8fafc" font-size="32" font-family="'Inter', 'Segoe UI', sans-serif">${safeLabel}</text>
</svg>`;
};

export const getPlaceholderDataUri = (label = "Preview") =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(buildPlaceholderSvg(label))}`;

const CORS_PROXY = "https://images.weserv.nl/?url=";

export const toCorsSafeUrl = (url) => {
  if (!url) return "";
  if (url.startsWith("data:")) return url;
  if (url.startsWith("/") || url.startsWith(".")) return url;
  if (url.includes("images.weserv.nl")) return url;
  return `${CORS_PROXY}${encodeURIComponent(stripProtocol(url))}`;
};

export const getSafeImageSource = (url, label = "Preview") => {
  const safeUrl = toCorsSafeUrl(url);
  return safeUrl || getPlaceholderDataUri(label);
};
