function contactVal(){
    let x = document.forms["myForm"]["fname"].value;
    if(x == ""){
        alert("Name must be filled out");
        return false;
    }
}

function myMessage(){
    alert("Make sure to input correct information");
}

function focu(x){
    x.style.background = "powderblue";
}

function fout(x){
    x.style.background = "white";
}