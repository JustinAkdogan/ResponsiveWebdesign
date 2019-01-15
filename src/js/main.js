//Variablen
var counter = 0;
var searchParams = new URLSearchParams(window.location.search);
myHeadline = document.getElementById('maincontent_headline');




//Counter Functionality for Images
$("#next").click(function(){
    counter++;
    if(counter > 5) {
        counter = 0;
    }
    document.getElementById('images').src = 'src/img/apartments_' + counter + '.jpg';
});
$("#back").click(function(){
    counter--;
    if(counter <= 0) {
        counter = 5;
    }
    document.getElementById('images').src = 'src/img/apartments_' + counter + '.jpg';
});

//Show the Pagerelated elements and hide other Elements
if(searchParams.has('page')){
   if (searchParams.get('page') == 'approach'){
       hideAll();
        document.getElementById('gmaps').style.display = 'block';
        myHeadline.innerText = 'Unser Standort';
   }
}else{
    document.getElementById('images').style.display = 'block';
    document.getElementById('back').style.display = 'block';
    document.getElementById('next').style.display = 'block';
}

function hideAll(){
    document.getElementById('images').style.display = 'none';
    document.getElementById('back').style.display = 'none';
    document.getElementById('next').style.display = 'none';
    document.getElementById('gmaps').style.display = 'none';
}
