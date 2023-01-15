var data = 0;

//increment function
function increment() {
    if (data == 0){
        document.getElementById("warning").innerText = "";
        document.getElementById("decrementButton").disabled = false;
    }
    data = data + 1;
    document.getElementById("counting").innerText = data; 
}

//decrement function
function decrement() {
    if (data > 1){
        data = data - 1;
        document.getElementById("counting").innerText = data;
    }else if (data == 1){
        data = data - 1;
        document.getElementById("counting").innerText = data;
        document.getElementById("decrementButton").disabled = true; 
        document.getElementById("warning").innerText = "Counter cannot be smaller than 0"; 
    }
}
