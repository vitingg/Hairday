import { hoursLoad } from "../form/hours-load.js"

const selectedData = document.getElementById("date")

export function schedulesDay() {
  // Obtém a data do input
  const date = selectedData.value

  // Verifica se a data foi selecionada
  if (!date) return

  // Renderiza as horas disponíveis
  const availableHours = hoursLoad({ data: date })

  console.log(availableHours) // Teste a saída
}
