const $btn = document.getElementById("data__btn");

$btn.addEventListener("click", () => {
  table();
});

function table() {
  const $num = document.getElementById("data__form");
  const $tab = document.getElementById("res__table");

  if ($num == 0) {
    alert("Gentileza inserir um número");
  } else {
    let number = Number($num.value);
    let c = 1;
    $tab.innerHTML = ""
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${number} X ${c} = ${number * c}`;
      $tab.appendChild(item);
      c++;
    }
  }
}
