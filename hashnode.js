const axios = require("axios").default;
const config = {
    headers: {
        'User-Agent': 'EGO Genel Mudurlugu-EGO Cepte-3.1.0',
        'Host': '88.255.141.66'
    }
};
const get = async () => await axios.get("http://88.255.141.66/mblSrv14/service.asp?FNC=Otobusler&VER=3.1.0&LAN=tr&DURAK=10512", config).then((result) => {
    console.log("GET Response")
    const data = result.data
    const realData= data.toString().replaceAll("'",'"')
    const parsed = JSON.parse(realData)
    console.log(parsed);
    console.log(parsed.data[0].table[0].sure);

    return parsed.data[0].table[0].sure
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
