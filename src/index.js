const express = require('express');
const compression = require('compression');
const ejs = require('ejs');
const DOMParser = require('dom-parser');
const app = express();
const fetch = require('node-fetch');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(compression());

// app.use((req, res, next) => {
//     res.setHeader('Cache-Control', 'max-age=' + 365 * 24 * 60 *
//         60);
//     next();
// });


app.use(express.static('public'));

app.get('/', async (req, res) => {

    const wpData = await data.req(api.solveUrl());

    const parser = new DOMParser();

    let cleanHtml = wpData.content.rendered.replace('[full_width_section bg_pos=&#8221;Left Top&#8221; bg_repeat=&#8221;No-Repeat&#8221; text_color=&#8221;Dark&#8221; image_url=&#8221;&#8221; top_padding=&#8221;40&#8243; bottom_padding=&#8221;40&#8243; background_color=&#8221;#fff021&#8243;]', '');
    cleanHtml = cleanHtml.replace('[/full_width_section]', '');

    // Empty all Wordpress loaded images
    cleanHtml = cleanHtml.replace('style="background-image: url(https://www.cmd-amsterdam.nl/wp-content/uploads/2018/11/header-cmd-3.jpg);"', 'style=""');
    cleanHtml = cleanHtml.replace('src="https://www.cmd-amsterdam.nl/wp-content/uploads/2018/11/cmd_daantjebons_0007.jpg"', 'src=""' );
    cleanHtml = cleanHtml.replace('src="https://www.cmd-amsterdam.nl/wp-content/uploads/2018/06/LR-deliverbee1.png"', 'src=""' );
    cleanHtml = cleanHtml.replace('src="https://www.cmd-amsterdam.nl/wp-content/uploads/2018/11/cmd_daantjebons_0025-1.jpg"', 'src=""' );
    cleanHtml = cleanHtml.replace('src="https://www.cmd-amsterdam.nl/wp-content/uploads/2018/11/battery-web.jpg"', 'src=""' );

    cleanHtml = parser.parseFromString(cleanHtml);


    res.render('pages/index.ejs', {
            html: cleanHtml.rawHTML
        })
});



// API request
const api = {
    solveUrl:()=>{
        return `https://www.cmd-amsterdam.nl/wp-json/wp/v2/pages/8901`
    }
};

const data = {
    req: (url)=> {
        console.log(url);
        // Fetch and return data
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(res => resolve(res))
                .catch(error => reject(error))
        })
    }
};


app.listen(port, () => console.log('App listening on port: ' + port));

