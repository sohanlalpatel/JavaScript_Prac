var test = document.querySelector(" #test");
// textContent and innerHtml  
test.textContent = ("Hi, This is manuplation by js using document..........");

test.innerHTML = ("<i> Hellow this is new line,,,,,, </i>")

// change css using js of the elements
// test.style.color= 'green';
// test.style.fontFamily = 'Courier New';


// How  to remove and add Css
 test.classList.add("apna-css");



var btn = document.querySelector("#btn");
btn.textContent = ("Starting");
// btn.innerHTML=("<p> Starting .... </p>")

// change Style           
btn.style.background='gray';

// Remove btn from document 
//  document.querySelector('body').removeChild(btn);

// Event listening

btn.addEventListener('click', function (){
    console.log("Hello"); 
})