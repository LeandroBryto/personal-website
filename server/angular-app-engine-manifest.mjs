
export default {
  basePath: 'https://leandrobryto.github.io/personal-website',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
