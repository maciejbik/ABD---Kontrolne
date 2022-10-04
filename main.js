// MAIN
var changer = false;
var general_i = 0;
var tablist;
function main()
{
    generuj();

    var list = document.querySelectorAll("li");
    tablist = Array.from(list);
    for(i=0;i<tablist.length;i++)
    {
        var itemek = i;
        tablist[i].setAttribute( "onClick", `javascript: wlacz(${i});` );
    }
}

//WCZYTYWANIE DANYCH
function generuj()
{
    var main_ol = document.querySelector(".main_ol");
    
    var tresc = "";
    for(i=0;i<pytania.length;i++)
    {
        tresc+=`<li onclick="wlacz(${i})">${pytania[i]}</li>`;
    }
    main_ol.innerHTML = tresc;
}

//Klawisze
document.addEventListener('keydown', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    if(changer)
    {
        switch (event.key) {
            case "ArrowLeft":
                left(general_i);
                break;
            case "ArrowRight":
                right(general_i);
                break;
            case "Escape":
                wylacz();
                break;
        }
    }
}); 

// OBSŁUGA MENU
function wlacz(i)
{    

    //Zdjęcia do pytań
    var answer_block = document.querySelector(".answer-block");
    var answer_block_img = document.querySelector(".answer-block__img");
    answer_block_img.innerHTML=`<img class="menu-img" src="img/image${i+1}-min.png" alt="">`;

    // console.log(document.querySelector(".menu-img"));




    //wypisywanie
    setTimeout(() => 
    {
        var menu_question = document.querySelector(".menu-question");
        menu_question.innerHTML = `Pytanie ${i+1}: ` + tablist[i].innerHTML; 
        var menu_answer = document.querySelector(".menu-answer");
        menu_answer.innerHTML = odpowiedzi[i];
    }, 10);

    
    //wypisywanie obu strzałek
    var menu_arrows = document.querySelector(".menu-arrows");
    menu_arrows.innerHTML=`
    <div class="left"><button onclick="left(${i});"> &lt; </button></div>
    <div class="right"><button onclick="right(${i})"> &gt; </button></div>`;

    //wylacznie
    var menu_content = document.querySelector(".menu-content");
    var menu = document.querySelector(".menu");
    menu.classList.remove("disabled");
    menu_content.classList.remove("end");

    //Uruchamianie inputu z klawiszy
    changer = true;
    general_i = i;



}
function wylacz()
{
    var menu = document.querySelector(".menu");
    var menu_content = document.querySelector(".menu-content");
    menu_content.classList.add("end");
    setTimeout(() => 
    {
        menu.classList.add("disabled");
    }, 200);

    //Wyłączanie imputu z klawiszy
    changer = false;
}

function left(k)
{  
    if(k==0)
    {
        k=51;
        wlacz(k);
        return;
    }
    wlacz(k-1);
    
}
function right(k)
{
    if(k==51)
    {
        k=0;
        wlacz(k);
        return;
    }
    wlacz(k+1);

}

function checkFileExist(x)
{
    return true;
}


function ImageExist(url) 
{
   var img = new Image();
   img.src = url;
   return img.height != 0;
}



function susus()
{
    var secret = document.querySelector(".secret");
    var amogus = document.querySelector(".amogus");
    if(secret.value == "sus" || secret.value == "SUS")
    {
        amogus.style["visibility"] = "visible";
    }
}