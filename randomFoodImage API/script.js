const foodImage =document.getElementById('foodImage');
const btn =document.getElementById('btn');

btn.addEventListener('click',()=>{
    getFoodIamge()
});

function getFoodIamge(){

    fetch('https://foodish-api.herokuapp.com/api/')

     .then(response => response.json())
     .then(data => {
         foodImage.innerHTML=`<img src="${data.image}" alt="">`
     });
   
}