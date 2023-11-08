let img = document.getElementsByTagName('img');

const images = [
    './src/img/pexels-dominika-gregušová-672532.jpg',
    './src/img/pexels-kammeran-gonzalezkeola-9638689.jpg',
    './src/img/pexels-pixabay-372470.jpg',
    './src/img/pexels-trinity-kubassek-445109.jpg'
]
let mover ;
let counter = -1;
function changer(){
    mover = setInterval(()=>{
        counter++;
        img[0].src=images[counter]
        if(counter<=-1 || counter >=3){
            counter=0;

        }
        console.log(counter);
},3000)
    
}
function forward(){
    clearInterval(mover)
    counter++;
    img[0].src=images[counter]
    if(counter<=-1){
        counter=2;

    }
    if(counter >=3){
        counter=-1
    }
    changer()
    console.log(counter);
}
function previous (){
    clearInterval(mover)
 
    counter--;
    img[0].src=images[counter]
    if(counter<=-1){
        counter=2;

    }
    if(counter >=3){
        counter=-1
    }
    console.log(counter);
changer();
}