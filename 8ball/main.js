// Magic 8 Ball

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let textin = document.getElementById("textIn").value;
  if (textin === "") {
    document.getElementById("result").innerHTML = "Please ask a question...";
  }
  if (
    textin != "" &&
    textin != "Does a magic 8 ball actually work?" &&
    textin != "Is JavaScript awesome?"
  ) {
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.2) {
      document.getElementById("result").innerHTML = "Without a Doubt.";
    } else if (randNum > 0.2 && randNum < 0.4) {
      document.getElementById("result").innerHTML = "As I see it, yes.";
    } else if (randNum > 0.4 && randNum < 0.6) {
      document.getElementById("result").innerHTML =
        "Concentrate and ask again.";
    } else if (randNum > 0.6 && randNum < 0.8) {
      document.getElementById("result").innerHTML = "Don't count on it.";
    } else if (randNum > 0.8) {
      document.getElementById("result").innerHTML = "Outlook not so good.";
    }
  }
  if (textin === "Is JavaScript awesome?") {
    document.getElementById("result").innerHTML = "Of Course!";
  } else if (textin === "Do you actually work?") {
    document.getElementById("result").innerHTML = "How dare you question me!";
  }
}
