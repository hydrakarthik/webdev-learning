let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
//     // alert(" hey i was click")
//     document.querySelector(".box").innerHTML =" hey you were clicked "
// })


button.addEventListener("dblclick", ()=>{
    // alert(" hey i was click")
    document.querySelector(".box").innerHTML =" hey you were clicked "
})


button.addEventListener("contextmenu", ()=>{
    alert(" hey i was click")
    // document.querySelector(".box").innerHTML =" hey you were clicked "
})