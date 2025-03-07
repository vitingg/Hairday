
import dayjs from "dayjs"

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Data atual para o input
const inputToday = dayjs().format("YYYY-MM-DD");

// Carrega a data atual
// Garante que a data minima seja o dia atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
  // Previne o comportamento padrão do formulário
  event.preventDefault();
}


