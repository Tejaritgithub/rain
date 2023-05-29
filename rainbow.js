const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['violet','indigo','blue','green','yellow','orange','red']
body.style.backgroundColor='pink';
document.addEventListener('click',changecolor);
function changecolor(){
    const colorindex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorindex];
}