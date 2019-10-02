function change(thing){
    
    current = thing.innerHTML;

    
    if (current == "<i class='fas fa-heart' aria-hidden='true'></i>"){
        thing.innerHTML = "<i class='far fa-heart'></i>";
    }
    else{
        thing.innerHTML = "<i class='fas fa-heart'></i>";
    }
   
}