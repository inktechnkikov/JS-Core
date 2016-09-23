function check(input) {
    let [inp] = input.map(String);
    if(inp == "banana" || inp == "kiwi" || inp == "cherry" || inp == "lemon"
        || inp == "grapes" || inp == "peach" || inp == "apple"){
        console.log("fruit");
    }
    else if(inp == "tomato" || inp == "cucumber" || inp == "pepper" || inp == "onion"
        || inp == "garlic" || inp == "parsley"){
        console.log("vegetable");
    }
    else{
        console.log("unknown");
    }
}
check(['pizza']);