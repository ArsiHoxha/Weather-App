const butoni = document.getElementById("sub");
const temp = document.getElementById("temp");
const imazhiR = document.getElementById("img");
let tempmaks = document.getElementById("max-temp");
const tempmin = document.getElementById("min-temp");
const duketsi = document.getElementById("felslike");
const vendi = document.getElementById("vendi");
const vendiIMG = document.getElementById("vendiIMG");
const container = document.querySelector(".container")
const dataS = document.getElementById('datat')
const sabie = document.getElementById('sabie')
const lageshtiaDiv  = document.getElementById('lageshtia')








const qyteti = document.getElementById('qyteti')

butoni.addEventListener("click", () => {
const  urlGoogle="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQxhMJdNvNmUy4X71BN8AQgtNi6PgQMJQ&libraries=places&callback=initMap"
  
  let input = document.getElementById("asd");
  let teksti = input.value;
  qyteti.innerText = teksti
  
  qyteti.style.fontSize = 30
  const celesi = "f482b7674bcdaab45f8730c925ef7eeb";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    teksti +
    "&appid=" +
    celesi;

async function merrurl(){
  const kerko = await fetch(urlGoogle);

  const merr = await kerko.json();
  console.log(merr)
}









  async function merrQytet() {
    const kerko = await fetch(url);

    const merr = await kerko.json();
    const lageshtia = merr['main']['humidity']
    const lageshtiaD = document.createElement('div')
    lageshtiaD.innerText ='Humidity : ' + lageshtia + ' %'
    lageshtiaDiv.appendChild(lageshtiaD)
    console.log(lageshtia)
 const url16 = 'https://api.openweathermap.org/data/2.5/forecast?id='+merr["id"] +'&appid='+celesi



    const kerko16 = await fetch(url16);
    const merr16 = await kerko16.json();
    const merrGjitha = merr16["list"];
    const merrGjithaTimeZone = merr16["city"]['timezone'];

    merrGjitha.forEach((element) => {
      const datat = element["dt_txt"];
      const dataMenumra = element["dt"]
      

      const weekDay = new Date(dataMenumra * 1000).toLocaleString("en-us", {
        weekday: "long",
        hour:"numeric"
    });
    

      const DescriptionK = element['weather'][0]['description']
      
      const tipi = element["weather"][0]["main"];
      const DiviTipit = document.createElement('div')
      DiviTipit.innerText = DiviTipit

      
      const divi = document.createElement("div");
      const tipiD = document.createElement("div");
      const descriptionM = document.createElement("div");
      const imazhi = document.createElement("img");

      divi.innerText = weekDay;
      tipiD.innerText = tipi;
      descriptionM.innerText = DescriptionK
      descriptionM.id = 'pershkrimik'
      tipiD.id = "tipJ";
      divi.id = "datat";
      imazhi.id = "imazh";
      if (tipi == "Rain") {
        imazhi.src = "./img/shi.png";
      }
      if (tipi == "Clear") {
        imazhi.src = "./img/clear.png";
      }
      if (tipi == "Snow") {
        imazhi.src = "./img/bore.png";
      }
      if (tipi == "Sunny") {
        imazhi.src = "./img/diell.png";
      }
      if (tipi == "Clouds") {
        imazhi.src = "./img/re.png";
      }
      vendi.appendChild(divi);
      vendiIMG.appendChild(imazhi);
      sabie.appendChild(descriptionM)
      const kelvin = merr["main"]["temp"];
      const grade = parseInt(kelvin - 273);
      temp.innerText = grade + "°";
      input.value = " ";
  
      let temp_max = merr["main"]["temp_max"];
      let tempmaks_grade = parseInt(temp_max - 273);
      tempmaks.innerHTML = "MaxTemp : "+ tempmaks_grade;
  
      let temp_min = merr["main"]["temp_min"];
      let tempmin_grade = parseInt(temp_min - 273);
      tempmin.innerHTML = "MinTemp : " + tempmin_grade;
  
      let temp_persht = merr["main"]["feels_like"];
      let tempershtatshe_grade = parseInt(temp_persht - 273);
      duketsi.innerHTML = "Fels like : "+ tempershtatshe_grade;
  
      /***********************************s************************************************** */
  
      if (merr["weather"][0]["main"] == "Clouds") {
        input.value = " ";
        document.body.style = "background-image:url(/img/re.jpeg)";
  
  
  
        imazhiR.src = "./img/re.png";
      } else if (merr["weather"][0]["main"] == "Snow") {
        document.body.style = "background-image:url(/img/bore.gif)";
        imazhiR.src = "./img/bore.png";
        imazhiR.style.height = 80;
      } else if (merr["weather"][0]["main"] == "Clear") {
        imazhiR.src = "./img/clear.png";
        document.body.style = "background-image:url(/img/diellRe.gif)";

        imazhiR.style.width = 80;
      } else if (merr["weather"][0]["main"] == "Rain") {
        document.body.style = "background-image:url(/img/shi.gif)";
  
        imazhiR.src = "./img/shi.png";
      } else if (merr["weather"][0]["main"] == "Sunny") {
        imazhiR.src = "./img/diell.png";
        document.body.style = "background-image:url(/img/diell.gif)";
  
      } else {
        console.log("ps");
      }
    });

    /************************************************************************************* */

 
  }

  /************************************************************************************* */

  merrQytet();
  merrurl()

});

