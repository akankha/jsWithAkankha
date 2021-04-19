const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    document.body.style.background = ramdoncolor();
    console.log(ramdoncolor());
});
function ramdoncolor(){
    return `hsl(${Math.floor(Math.random()*320)}, 50%, 50%)`;
}