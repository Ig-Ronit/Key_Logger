const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn= document.getElementById("stop-btn");
const msgBox = document.getElementById("msg-box")

startBtn.addEventListener("click", ()=>{
  
  document.addEventListener("keydown",handleDown);
  document.addEventListener("keyup",handleUp);
  msgBox.textContent = "Slowly Push and Release any key on your Keyboard";
  startBtn.disabled = true;
  stopBtn.disabled = false;
})

stopBtn.addEventListener("click", ()=>{
  msgBox.textContent = "";
  document.removeEventListener("keydown",handleDown);
  document.removeEventListener("keyup",handleUp);
  logDiv.textContent= "";
  stateDiv.textContent=" ";
  stopBtn.disabled = true;
  startBtn.disabled = false;
})

function handleDown(e){
  logDiv.textContent = `key "${e.key}" Pressed Down`;
  stateDiv.textContent = "Key is down";
}
function handleUp(e){
  logDiv.textContent = `key "${e.key}" is Released`;
  stateDiv.textContent = "Key is Up";
}