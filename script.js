let box=document.querySelector(".box")
let percentage1=document.querySelector(".percentage")
let totalMark = document.getElementById("totalMark")
let obtainMark = document.getElementById("obtainMark")
let cgpa1=document.querySelector(".cgpa")
let ptc=document.querySelector(".percentageToCGPA")
let ctp=document.querySelector(".CGPAtoPercentage")
let buttons=document.querySelector(".buttons")
let shashi=''
 function percentage(){
   box.style.display="none"
   percentage1.style.display="block"
   
 }
function hello() {
    let a = totalMark.value
    let b = obtainMark.value
    shashi = (a / b) * 100
    let grades=''
     if (shashi <= 100 && shashi >= 80) { 
        grades = "A"; 
      } else if (shashi <= 79 && shashi >= 60) { 
        grades = "B"; 
      } else if (shashi <= 59 && shashi >= 40) { 
        grades = "C"; 
      } else { 
        grades = "F"; 
      } 
    let p=document.createElement("p")
     p.innerHTML=`Out of ${b} your percentage is ${shashi}%. <br>  
     Your grade is ${grades} `
     percentage1.appendChild(p)
 }

// let cgpa1=document.getElementById("cgpa")
  function cgpa(){
    box.style.display="none"
    cgpa1.style.display="block"
  }
 
  function percentageCGPA(){
    buttons.style.display="none"
    ptc.style.display="block"
  }

  function cgpaPercentage(){
    buttons.style.display="none"
    ctp.style.display="block"
  }




 function calculateCGPA() {
 let obtainPercentage=document.querySelector("#firstText").value
  let cgpaScale = parseFloat(prompt("Enter CGPA Scale (4.0, 5.0, or 10.0):"));

  if (cgpaScale !== 4.0 && cgpaScale !== 5.0 && cgpaScale !== 10.0) {
    alert("Invalid CGPA scale. Please enter 4.0, 5.0, or 10.0.")
  }

  let cgpa = (obtainPercentage / 100) * cgpaScale;

  document.querySelector("#secondText").value=cgpa
}

function calculatePercentage(){
  let obtainCGPA=document.querySelector("#thirdText").value
  let cgpaScale = parseFloat(prompt("Enter CGPA Scale (4.0, 5.0, or 10.0):"))
  if (cgpaScale !== 4.0 && cgpaScale !== 5.0 && cgpaScale !== 10.0) {
    alert("Invalid CGPA scale. Please enter 4.0, 5.0, or 10.0.")
  }
  let calculate=Math.round((obtainCGPA/cgpaScale)*100)
  document.querySelector("#fourText").value=calculate
}