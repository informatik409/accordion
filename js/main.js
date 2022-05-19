let acc = document.getElementsByClassName("accordion");

let text = document.getElementsByClassName("text");

for(let i=0; i<acc.length; i++){
    // console.log(acc.length);

    acc[i].onclick = function(){
        for(let a=0; a<acc.length; a++){
            if(i == a){

            }else{
                text[a].classList.remove("show");
            }
        }

        text[i].classList.toggle("show");
    }
}