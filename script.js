/* In Javascript we have 2 types:
->Internal.
->External.
*/

/* console.log("Javascript is awesome!"); */

/*Variables in JS. */

var number = 10;
var string = 'Hello There';
var isRad = true;
var groceries = ['Milk','Rice','Lental','Soup']

document.getElementById('box').innerHTML = string;

if(number == 10){
    console.log("Yeah Buddy");
} else{
    console.log("No");
}

for(var i =0; i < 10; i++){
    console.log(i);
}

function Get_groceries(){
    for( var i =0; i <groceries.length;i++ ){
        console.log(groceries[i]);
    }
}

Get_groceries();