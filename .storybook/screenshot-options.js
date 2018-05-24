const viewportMobile = {
  width: 320,
  height: 420,
  isMobile: true,
  hasTouch: true
};

const viewportTablet = {
  width: 768,
  height: 800,
  isMobile: true,
  hasTouch: true
};

const viewportDesktop = {
  width: 1024,
  height: 768,
  isMobile: true,
  hasTouch: true
};

export const mobile = {
  viewport: viewportMobile
};

export const tablet = {
  viewport: viewportTablet
};

export const desktop = {
  viewport: viewportDesktop
};

export const all = {
  viewport: [viewportMobile, viewportTablet, viewportDesktop]
};
