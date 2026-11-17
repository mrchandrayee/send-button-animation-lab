const buttons=[...document.querySelectorAll(".action")];
const resultWords={send:["S","E","N","T"],ship:["O","U","T"]};

function replay(button){
  if(button.classList.contains("is-running")) return;
  button.classList.remove("is-done");
  button.classList.add("is-running");
  button.disabled=true;
  button.style.setProperty("--wake-p","0");
  button.style.setProperty("--fly","1");
  const letters=button.querySelector(".letters");
  letters.replaceChildren(...resultWords[button.dataset.kind].map((char,index)=>{
    const span=document.createElement("i");
    span.textContent=char;
    span.style.setProperty("--i",index);
    return span;
  }));
  window.setTimeout(()=>{
    button.classList.remove("is-running");
    button.classList.add("is-done");
    button.disabled=false;
    button.style.setProperty("--fly","0");
    button.setAttribute("aria-label",button.dataset.kind==="send"?"Sent":"Out");
  },1050);
}
buttons.forEach(button=>button.addEventListener("click",()=>replay(button)));
