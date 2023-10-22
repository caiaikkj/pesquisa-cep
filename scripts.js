function teste(){
    let cep = document.getElementById('cep').value;
    let url =  "https://brasilapi.com.br/api/cep/v1/" + cep;

    fetch(url)
    .then(response => response.json())
    .then((response)=>{
        document.querySelector('#rua').innerHTML = response.street
        document.querySelector('#bairro').innerHTML = response.neighborhood
        document.querySelector('#cidade').innerHTML = response.city
        document.querySelector('#estado').innerHTML = response.state
    })

}

function limpar(){
    document.querySelector("#cep").value = "";
}