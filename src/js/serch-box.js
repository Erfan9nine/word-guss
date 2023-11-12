let parent = document.getElementById("parent");
const worder = document.getElementById("word");
const serch = document.getElementById("serch");
serch.addEventListener('click',gussWord);
const words = [
    "ali",
    "erfan",
    "shiraz",
  "bushehr",
  "zarqan",
  "perspolis",
  "america",
  "pride",
  "lambo",
  "computer",
  "earth",
  "politano",
  "footbal",
  "messi",
  "ronaldo",
  "home",
  "t-shirt",
  "eminem",
  "mouse",
  "keyboard",
  "phone",
  "apple",
  "orange",
  "banana",
  "space",
  "comoon",
  "rare",
  "clash of clans",
  "pubg",
  "god",
  "paradise",
  "venoum",
  "real",
  "fake",
  "wonderfull",
  "awfull",
  "iran",
];

let w = worder.value;
worder.addEventListener('keypress',finder)

function gussWord(){
    finder(); 
    
}
worder.addEventListener('keydown',removeAllChildNodes)



function removeAllChildNodes() {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function createElem(content){
    const elem = document.createElement('p');
    elem.classList.add('w[50%]','bg-white','p-1')
    elem.textContent=content;
    parent.append(elem)
}


function finder(){
    const word_finder =  words.filter(function (e) {
        
        return e.includes(worder.value)
        });
        word_finder.forEach(function(e){
            createElem(e);
        })
        
}