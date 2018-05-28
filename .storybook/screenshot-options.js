const viewportMobile = height => {
  return {
    width: 320,
    height: Number.isInteger(height) ? height : 420,
    isMobile: true,
    hasTouch: true
  };
};

const viewportTablet = height => {
  return {
    width: 768,
    height: Number.isInteger(height) ? height : 800,
    isMobile: true,
    hasTouch: true
  };
};

const viewportDesktop = height => {
  return {
    width: 1024,
    height: Number.isInteger(height) ? height : 768,
    isMobile: true,
    hasTouch: true
  };
};

export const wh = (width, height) => {
  return { viewport: { width: width, height: height } };
};

export const mobile = height => {
  return { viewport: viewportMobile(height) };
};

export const tablet = height => {
  return { viewport: viewportTablet(height) };
};

export const desktop = height => {
  return { viewport: viewportDesktop(height) };
};

export const all = (h1, h2, h3) => {
  return {
    viewport: [viewportMobile(h1), viewportTablet(h2), viewportDesktop(h3)]
  };
};
