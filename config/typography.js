import Typography from 'typography';

const typography = new Typography({
  title: 'JaviPortfolio',
  baseFontSize: '18px',
  baseLineHeight: 1.7,
  blockMarginBottom: 1.0,
  scaleRatio: 1.618,
  headerFontFamily: [
    'ff-meta-web-pro',
    'Lucida Grande',
    'Verdana',
    'sans-serif',
  ],
  bodyFontFamily: [
    'ff-meta-serif-web-pro',
    'serif',
  ],
  overrideStyles: () => ({
    blockquote: {
      marginLeft: '40px',
      marginRight: '40px',
      marginTop: '1em',
      marginBottom: '1em',
    },
  }),
  headerGray: 20,
  headerWeight: 700,
});


typography.overrideTheme
export default typography;
