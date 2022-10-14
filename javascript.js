
function rock() {
 var a = Math.floor(Math.random() * 3) + 1;
 var b = Math.floor(Math.random() * 3) + 1;
 var c = a-b;
    switch (c){
        case 1, 2 :
             alert("You Win")
        break;
        case 0:
            alert("Draw")
        break;
        case -1, -2:
            alert("You lose")
        break;
    }
} 
function swiss() {
    var a = Math.floor(Math.random() * 3) + 1;
    var b = Math.floor(Math.random() * 3) + 1;
    var c = a-b;
       switch (c){
           case 1, 2 :
                alert("You Win")
           break;
           case 0:
               alert("Draw")
           break;
           case -1, -2:
               alert("You lose")
           break;
       }
   } 
   function papua() {
    var a = Math.floor(Math.random() * 3) + 1;
    var b = Math.floor(Math.random() * 3) + 1;
    var c = a-b;
       switch (c){
           case 1, 2 :
                alert("You Win")
           break;
           case 0:
               alert("Draw")
           break;
           case -1, -2:
               alert("You lose")
           break;
       }
   } 