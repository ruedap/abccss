const mobileMinWidth = 320;
const tabletMinWidth = 768;
const desktopMinWidth = 1024;
const mobileMaxWidth = tabletMinWidth - 1;
const tabletMaxWidth = desktopMinWidth - 1;
const desktopMaxWidth = 1800;

const mobileHeight = 568;
const tabletHeight = 1024;
const desktopHeight = 768;

const mobileMinViewport = height => {
  return {
    width: mobileMinWidth,
    height: Number.isInteger(height) ? height : mobileHeight,
    isMobile: true,
    hasTouch: true
  };
};

const mobileMaxViewport = height => {
  return {
    width: mobileMaxWidth,
    height: Number.isInteger(height) ? height : mobileHeight,
    isMobile: true,
    hasTouch: true
  };
};

const tabletMinViewport = height => {
  return {
    width: tabletMinWidth,
    height: Number.isInteger(height) ? height : tabletHeight,
    isMobile: true,
    hasTouch: true
  };
};

const tabletMaxViewport = height => {
  return {
    width: tabletMaxWidth,
    height: Number.isInteger(height) ? height : tabletHeight,
    isMobile: true,
    hasTouch: true
  };
};

const desktopMinViewport = height => {
  return {
    width: desktopMinWidth,
    height: Number.isInteger(height) ? height : desktopHeight,
    isMobile: false,
    hasTouch: false
  };
};

const desktopMaxViewport = height => {
  return {
    width: desktopMaxWidth,
    height: Number.isInteger(height) ? height : desktopHeight,
    isMobile: false,
    hasTouch: false
  };
};

export const wh = (width, height) => {
  return { viewport: { width: width, height: height } };
};

export const mobileMin = height => {
  return { viewport: mobileMinViewport(height) };
};

export const mobileMax = height => {
  return { viewport: mobileMaxViewport(height) };
};

export const tabletMin = height => {
  return { viewport: tabletMinViewport(height) };
};

export const tabletMax = height => {
  return { viewport: tabletMaxViewport(height) };
};

export const desktopMin = height => {
  return { viewport: desktopMinViewport(height) };
};

export const desktopMax = height => {
  return { viewport: desktopMaxViewport(height) };
};

export const allMin = (h1, h2, h3) => {
  return {
    viewport: [
      mobileMinViewport(h1),
      tabletMinViewport(h2),
      desktopMinViewport(h3)
    ]
  };
};

export const all = (h1, h2, h3, h4, h5, h6) => {
  return {
    viewport: [
      mobileMinViewport(h1),
      mobileMaxViewport(h2),
      tabletMinViewport(h3),
      tabletMaxViewport(h4),
      desktopMinViewport(h5),
      desktopMaxViewport(h6)
    ]
  };
};
