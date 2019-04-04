if("serviceWorker" in navigator){
    window.addEventListener("load",()=>{
        navigator.serviceWorker.register("service-worker.js").then(regis=>{
            console.log("SW registering");
            return regis.update()
        }).catch(err=> console.log(err))
    })
}

var imgList = document.querySelectorAll('.img-with-animation');
var imgArr = Array.from(imgList);

var webpArr = ['img/cmd_daantjebons_0007.webp', 'img/LR-deliverbee1.webp', 'img/cmd_daantjebons_0025-1.webp', 'img/battery-web.webp'];
var jpgArr = ['img/cmd_daantjebons_0007.jpg', 'img/LR-deliverbee1.png', 'img/cmd_daantjebons_0025-1.jpg', 'img/battery-web.jpg'];


for(let i = 0; i < webpArr.length; i ++) {
    var picture = document.createElement("picture");
    var source1 = document.createElement('source');
    var source2 = document.createElement('source');

    imgArr[i].src = jpgArr[i];

    source1.srcset = webpArr[i];
    source1.type = "image/webp";
    source2.srcset = jpgArr[i];


    let parent = imgArr[i].parentElement;
    parent.appendChild(picture);
    picture.appendChild(source1);
    picture.appendChild(source2);

    picture.appendChild(imgArr[i]);
}









