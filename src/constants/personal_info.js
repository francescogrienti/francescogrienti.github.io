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
  it: "",
  en: ""}


export {email, location, age, aboutme}