function updateTitle(){
  let newTitle = minutes.innerText + ":" + seconds.innerText;
  //check which mode you're in
  newTitle += modeMessage();
  document.title = newTitle;
}

function modeMessage(){
  if(mode == "Work"){
    return " - Time to grind!";
  }else if (mode == "Long Break"){
    return " - Ahhhhh....";
  }else{
    return " - Phew .. take a breath!";
  }
}