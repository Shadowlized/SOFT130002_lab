const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

//标记nav的parentElement header的位置
let element = document.getElementById("nav").parentElement;
//四个section
for (let i = 0; i <= 3; i++){
    //创建一个section（紫底）
    let section = document.createElement("section");
    section.className = "item";
    //白字
    let genre = document.createElement("h4");
    let textNode1 = document.createTextNode("Genre : " + works[i].tips);
    genre.appendChild(textNode1);
    section.appendChild(genre);
    //蓝灰框中内容
    let innerBox1 = document.createElement("div");
    innerBox1.className = "inner-box";

    let authorName = document.createElement("h3");
    let lifetime = document.createElement("h4");
    let textNode2 = document.createTextNode(works[i].author);
    let textNode3 = document.createTextNode("lifetime:" + works[i].lifetime);
    authorName.style.display = "inline"; lifetime.style.display = "inline"; lifetime.style.marginLeft = "1em";
    authorName.appendChild(textNode2);
    lifetime.appendChild(textNode3);
    innerBox1.appendChild(authorName);
    innerBox1.appendChild(lifetime);
    section.appendChild(innerBox1);
    //第二个蓝灰框
    let innerBox2 = document.createElement("div");
    innerBox2.className = "inner-box";

    let authorName2 = document.createElement("h3");
    let textNode4 = document.createTextNode("Popular Photos");
    authorName2.appendChild(textNode4);
    innerBox2.appendChild(authorName2);

    for (let e in works[i].photos){
        let pic = document.createElement("img");
        pic.className = "photo";
        pic.src = works[i].photos[e];
        innerBox2.appendChild(pic);
    }
    section.appendChild(innerBox2);
    //按钮
    let button1 = document.createElement("button");
    let textNodeButton = document.createTextNode("Visit");
    button1.appendChild(textNodeButton);
    section.appendChild(button1);
    //添加section
    element.appendChild(section);
}

