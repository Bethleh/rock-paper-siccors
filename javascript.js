function computerPlay(){
    var items = ['rock', 'paper', 'siccor'];
    var item = items[Math.floor(Math.random() * items.length)];
     
    return item
     
}
 
function player(){
    var choice= window.prompt("enter your choice: ");
   return choice
}
 
function theGame(){
    let computer = computerPlay()
    let user= player()
    let play=user.toLocaleLowerCase()
    
    console.log("THE COMPUTER",computer)
    console.log("YOU", play) 
    if (computer==="rock" && play==="siccor"){
        console.log(" you lost rock beats siccor");

    }
    else if(computer==="rock" && play==="paper"){
        console.log("you won paper covers rocks");
        
    } 
    else if(computer==="rock" && play==="rock"){
        console.log("this is a tie");
    }
    else if(computer==="paper" && play==="siccor"){
        console.log(" you win siccor cuts paper");

    }
    else if(computer==="paper" && play==="paper") {
        console.log(" its a tie");
        
    } 
    else if(computer==="paper" && play==="rock"){
        console.log("you lost paper covers rock")
    }  
    
    else if(computer==="siccor" && play==="rock"){
        console.log("you win rock crushes siccor");
    }  
    else if(computer==="siccor" && play==="siccor"){
        console.log("this is a tie");

    }
    else if(computer==="siccor" && play==="paper") {
        console.log("you lost siccor cuts paper");
        
    } 
   
}
theGame()