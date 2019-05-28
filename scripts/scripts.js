const button = document.querySelector("button");
const section = document.querySelector("section");
const setNumber = () => {
  section.innerHTML = "";
  const arr = new Array();
  for (let i = 0; i < 6; ++i) {
    const number = Math.floor(Math.random() * 49 + 1);
    let flag = true;
    arr.forEach(num => {
      if (num === number) {
        --i;
        flag = false;
      }
    });
    if (flag) {
      arr.push(number);
      const div = document.createElement("div");
      div.textContent = number;
      section.appendChild(div);
    }
  }
};
button.addEventListener("click", setNumber);
