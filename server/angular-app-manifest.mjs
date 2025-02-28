
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://leandrobryto.github.io/personal-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/personal-website"
  },
  {
    "renderMode": 2,
    "route": "/personal-website/sobre"
  },
  {
    "renderMode": 2,
    "route": "/personal-website/projetos"
  },
  {
    "renderMode": 2,
    "route": "/personal-website/tecnologias"
  },
  {
    "renderMode": 2,
    "route": "/personal-website/contato"
  },
  {
    "renderMode": 2,
    "redirectTo": "/personal-website",
    "route": "/personal-website/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 651, hash: '3fae00164db67be991ee2a37a48f5bc0248f4d555414cbcc75309bc520ff4ef7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1164, hash: '3153878c09c8fa5dedfe589008bf0033f17c4bdaba1b6fd8f627e41235505bda', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sobre/index.html': {size: 5739, hash: '92046ad0bb1939f41888f58f214403b6892d075da4da24e2161b0237ad78d42d', text: () => import('./assets-chunks/sobre_index_html.mjs').then(m => m.default)},
    'contato/index.html': {size: 5170, hash: '438bd76f5c30fc513b79ab91dab72c40c0e963cc9cbb111231845e5074d88ea3', text: () => import('./assets-chunks/contato_index_html.mjs').then(m => m.default)},
    'projetos/index.html': {size: 9260, hash: 'def8e55e17568e0383a4031f79c19721ccc498111fb39ae6c39e76354f446cf4', text: () => import('./assets-chunks/projetos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4872, hash: 'a2127b17018429068ebe1071c8b51d03027c2e38cf9fd9da15e4b69800fe4ae0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tecnologias/index.html': {size: 5740, hash: '5edcec39c5523fcbd21f4d68242478148d152a4bc6b5e34f6420c59aea233278', text: () => import('./assets-chunks/tecnologias_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
