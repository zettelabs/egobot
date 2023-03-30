const axios = require("axios").default;
const config = {
    headers: {
        'User-Agent': 'EGO Genel Mudurlugu-EGO Cepte-3.1.0',
        'Host': '88.255.141.66'
    }
};
const get = async () => await axios.get("http://88.255.141.66/mblSrv14/service.asp?FNC=Otobusler&VER=3.1.0&LAN=tr&DURAK=10512", config).then((result) => {
    return result
});

// const featuredPosts = `
//   query {
//     storiesFeed(type: FEATURED) {
//       author {
//         username
//       }
//       title
//     }
//   }
// `;

module.exports = {
    getFeaturedPosts: () => get(),
};
