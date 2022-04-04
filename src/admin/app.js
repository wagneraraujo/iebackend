// import MenuLogo from './extensions/logo.png';
const AuthLogo = 'https://iestrada.com.br/wp-content/uploads/2021/08/cropped-irmaos-da-estrada-favicon-150x150.png';
const MenuLogo = 'https://iestrada.com.br/wp-content/uploads/2021/08/cropped-irmaos-da-estrada-favicon-150x150.png';
const favicon = 'https://iestrada.com.br/wp-content/uploads/2021/08/cropped-irmaos-da-estrada-favicon-150x150.png';
export default {
    config: {
        auth: {
            logo: AuthLogo,
          },
         // Replace the favicon
          head: {
            favicon: favicon,
          },
          menu: {
            logo: MenuLogo,
          },
        locales: [
            // 'ar',
            // 'fr',
            // 'cs',
            // 'de',
            // 'dk',
            // 'es',
            // 'he',
            // 'id',
            // 'it',
            // 'ja',
            // 'ko',
            // 'ms',
            // 'nl',
            // 'no',
            // 'pl',
            'pt-BR',
            // 'pt',
            // 'ru',
            // 'sk',
            // 'sv',
            // 'th',
            // 'tr',
            // 'uk',
            // 'vi',
            // 'zh-Hans',
            // 'zh',
        ],
        tutorials: false,

    },
    bootstrap(app) {
        console.log(app);
    },
};