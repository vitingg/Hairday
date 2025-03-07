import { openingHours } from "../../utils/opening-hours.js"
import dayjs from "dayjs"
import { hoursClick } from "./hours.click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera a hora como número
    const [scheduleHour] = hour.split(":")
    const isHourPast = dayjs(date).hour(scheduleHour).minute(0).second(0).isAfter(dayjs())

    return {
      hour,
      available: isHourPast, // Verifica se está disponível
    }
  })

  // Limpa os horários antes de adicionar novos (evita duplicação)
  hours.innerHTML = ""

  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")
    li.textContent = hour // Corrigido para exibir a hora corretamente

    if(hour === "9:00") {
      hourHeaderAdd("Manhã")
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde")
    } else if (hour === "18:00") {  
      hourHeaderAdd("Noite")
    }

    hours.appendChild(li)
  })

  hoursClick()
}


function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}