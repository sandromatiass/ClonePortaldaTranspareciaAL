interface MediaQuerySizes {
  mobile: string;
  tablet: string;
  notebook: string;
  desktop: string;
}

const sizes: MediaQuerySizes = {
  mobile: "576px",
  tablet: "768px",
  notebook: "992px",
  desktop: "1280px",
};

const mediaQuery = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet}) and (max-width: ${sizes.notebook})`,
  notebook: `(min-width: ${sizes.notebook}) and (max-width: ${sizes.desktop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export default mediaQuery;