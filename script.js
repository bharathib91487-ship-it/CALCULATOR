const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let value = "";

buttons.forEach(button => {
  button.onclick = () => {
    let text = button.innerText;

    if (text === "AC") {
      value = "";
    } 
    else if (text === "C") {
      value = value.slice(0, -1);
    } 
    else if (text === "=") {
      try {
        value = eval(
          value.replace("×", "*")
               .replace("÷", "/")
               .replace("−", "-")
        );
      } catch {
        value = "Error";
      }
    } 
    else if (text === "±") {
      value = value ? (value * -1).toString() : "";
    } 
    else if (text === "%") {
      value = value ? (value / 100).toString() : "";
    } 
    else {
      value += text;
    }

    display.value = value;
  };
});

