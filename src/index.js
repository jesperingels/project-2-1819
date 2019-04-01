const express = require('express');
const compression = require('compression');
const ejs = require('ejs');
const app = express();
const parse = require('node-html-parser');
const fetch = require('node-fetch');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(compression());

app.use(express.static('public'));

app.get('/', async (req, res) => {

    const wpData = await data.req(api.solveUrl());


//     // Selects all the: [full-width] bs
//     const rx1 = /\[.+\]/g;
//
// // Selects all white spaces
//     const rx2 = /(?<=\>)[\t\n\r\s]+(?=\<)/g;
//
// // Selects all the useful tags
//     const rx3 = /\<(p|a|form|button|h[1-6]).+?\1\>|\<img.+?\/?\>|(?<=(div|span).+\>).[^\<\>]+(?=\<\/(div|span))/g;
//
//     const html = wpData.content.rendered;
//
//     const normalHtml = html.replace(rx1, "");
//     const minifiedHtml = normalHtml.replace(rx2, "")
//
//     const temp = [];
//     let result;
//
//     while((result = rx3.exec(minifiedHtml)) !== null) {
//         temp.push(result[0])
//     }

    // console.log(eval(temp.join('')));
    // const x = temp.join('').replace("&nbsp;", "");
    // console.log('ik ben X!!! '+x);




    res.render('pages/index.ejs', {
            html: wpData.content.rendered
        })

    // res.send(wpData.content.rendered);
});




    // https.get("https://www.cmd-amsterdam.nl/wp-json/wp/v2/pages/758", response => {
    //     let data = "";
    //
    //     response.on("data", buffer => data += buffer)
    //
    //     response.on("end", () => {
    //         // const html = JSON.parse(data).content.rendered;
    //         const html = wpData.content.rendered;
    //
    //         const rx = /\[.+\]/g;
    //
    //         let cleanedHtml = html.replace(rx, "");
    //
    //         let stripRx = /\<(p|a|button|h[1-6]).+?\1\>|\<img.+\/?\>/g;
    //
    //         let temp = [];
    //         let result;
    //
    //         while((result = stripRx.exec(cleanedHtml)) !== null) {
    //             temp.push(result[0])
    //         }
    //     })
    // })


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

