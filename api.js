const button = document.querySelector('.button');

async function getCountryInfo() {

    console.log("dkdkdkd");
    const usercountryName = document.querySelector('#countryName').value;
    const result = document.getElementById('result');

    if (usercountryName == "") {
        alert("나라 이름을 입력해주세요.")
        return;
    }
    

    const res = await fetch(`https://restcountries.com/v3.1/name/${usercountryName}`)
    const countries = await res.json();

    if(countries && countries[0]){
        const country = countries[0];
        const countryName = country.name.common;

        let capital;
        if(country.capital && country.capital.length >0){
            capital = country.capital[0];

        }
        else {

            capital = "수도 정보가 없습니다."
        }

        const flag = country.flags.svg;

        result.innerHTML = `

        <div>
            <P><b>${usercountryName}</b> 수도: <b>${capital}</b></P>
            <img src="${flag}" alt="Flag of ${usercountryName}" width="150"></img>
        </div>
        `
    }

    else{
        result.textContent = "찾을 수 없습니다."
    }
}



button.addEventListener('click', getCountryInfo);