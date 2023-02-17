
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const darkbtn = document.getElementById("dark-btn");
let inp = document.getElementById("inp")
let btn = document.getElementById("btn")

let MF = document.getElementById("MF")
let LG = document.getElementById("LG")
let KP = document.getElementById("KP")

const main = document.getElementById("main");
const box = document.getElementById("box");
const buset = document.querySelector(".rc");

const mf = document.getElementById("mf");
const lg = document.getElementById("lg");
const kp = document.getElementById("kp");

const logo = document.querySelector(".logo")


btn.addEventListener("click", function(){ 

    meterTofeet()
    litersToGallons()
    kiloTopounds()

})


function meterTofeet(){
    let M2Fcompute = parseFloat(inp.value) * 3.281
    console.log(M2Fcompute)

    let F2Mcompute = parseFloat(inp.value) * 0.3048

    MF.textContent = ` ${inp.value} meters = ${M2Fcompute.toFixed(3)} feet | ${inp.value} feet = ${F2Mcompute.toFixed(3)} meters`
}

function litersToGallons(){

    let L2Gcompute = parseFloat(inp.value) * 0.264
    let G2Lcompute = parseFloat(inp.value) *  4.546

    LG.textContent = `${inp.value} liters = ${L2Gcompute.toFixed(3)} gallons | ${inp.value} gallons = ${G2Lcompute.toFixed(3)} liters`

} 


function kiloTopounds(){

    let K2Pcompute = parseFloat(inp.value) * 2.204 
    let P2Kcompute = parseFloat(inp.value) * 0.453592

    KP.textContent = `${inp.value} kilos = ${K2Pcompute.toFixed(3)} pounds | ${inp.value} pounds = ${P2Kcompute.toFixed(3)} kilos `
}

// function dark(d){
    
// }

function darkM(){

    main.style.background = "#282A3A";
    box.style.background = "#2B3A55";
    box.style.border = "4px solid #540375";

    MF.style.color = "white"
    LG.style.color = "white"
    KP.style.color = "white"

    mf.style.color="white"
    lg.style.color="white"
    kp.style.color="white"

    logo.style.color = "gold"
    

}



//  #434242
//  #2B3A55   50577A

    // 282A3A
