const key = "542adf3af51051a28a9c3e83616306c9"

function DadosNaTela(dados){
    console.log(dados)
    document.querySelector('.titulo-cidade').innerHTML = dados.name
    document.querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.previsao-texto').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML ="Umidade relativa do ar: " + dados.main.humidity + "%"

}



async function BuscarDados(cidade){
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json());
    DadosNaTela(dados)
}


function CliqueBotao(){
    const cidade = document.querySelector('.input-cidade').value
    BuscarDados(cidade)

}

