const name = "Francesco Grienti"
const email = "francescogrienti99@gmail.com"
const location = {
  it: "Gallarate, Italia",
  en: "Gallarate, Italy"
}
const age = () => {
  var today = new Date();
  var birthDate = new Date(1999, 10, 6);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const aboutme = {
  it: "Ciao! Sono uno sviluppatore appassionato di tecnologia.",
  en: "Hi! I am a developer passionate about technology."
}


export {name, email, location, age, aboutme}