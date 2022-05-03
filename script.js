const branch = document.querySelector('#branch');
const models = document.querySelector('#models');
const years = document.querySelector('#years');
const btnCheckPrice = document.querySelector('button');
let tableResult = document.querySelector('footer');

let urlBranch;
let urlModels;
let urlYears;
let urlResult;

let backgroundIcons = document.querySelectorAll('.icons');
backgroundIcons.forEach((iconOnFocus) => {
    iconOnFocus.addEventListener('click', () => {
        resetOptions();
        iconOnFocus.style.backgroundColor = 'yellowgreen';
    });
});

const vehicles = document.querySelectorAll('.vehicleChoise');
vehicles.forEach((divSelected) => {
    divSelected.addEventListener('click', async function getVehicle(event) {
        branch.length = 0;
        models.length = 0;
        years.length = 0;
        const element = event.target;
        const id = element.id;
        if (id == 'airplanes') return alert('Esta opção ainda não está disponível!');
        urlBranch = `https://parallelum.com.br/fipe/api/v2/${id}/brands`;
        const options = await getAPIcontent(urlBranch);
        fillSelect(options, branch);
    });
});

branch.addEventListener('change', async function getAndFillModels() {
    models.length = 0;
    years.length = 0;
    let code = branch.children[branch.selectedIndex].value;
    urlModels = urlBranch + '/' + code + '/models';
    const data = await getAPIcontent(urlModels);
    fillSelect(data, models);
});

models.addEventListener('change', async function getAndFillYears() {
    years.length = 0;
    let code = models.children[models.selectedIndex].value;
    urlYears = urlModels + '/' + code + '/years';
    const data = await getAPIcontent(urlYears);
    fillSelect(data, years);
});


btnCheckPrice.addEventListener('click', async () => {
    if (branch.value == '' || models.value == '' || years.value == '') {
        alert('Preencha todos os campos!')
    }
    else {
        let brandAndModel = document.querySelector('#brand-model');
        let price = document.querySelector('#price');
        let modelYear = document.querySelector('#modelYear');
        let fuel = document.querySelector('#fuel');
        const code = years.children[years.selectedIndex].value;
        urlResult = urlYears + '/' + code;
        const data = await getAPIcontent(urlResult);
        document.querySelector('table').style.display = 'block';
        tableResult.style.display = 'block';
        brandAndModel.innerHTML = data.brand + data.model;
        price.innerHTML = 'Preço: ' + data.price;
        modelYear.innerHTML = 'Ano: ' + data.modelYear;
        fuel.innerHTML = 'Combustível: ' + data.fuel;
    }
});

function fillSelect(array, select) {
    array.forEach((obj) => {
        option = new Option(obj.name, obj.code);
        if(obj.name == 32000) return 0; 
        else{
        select.options[select.options.length] = option;
    }
    });
};

async function getAPIcontent(url) {
    const response = await fetch(url
        , {
            method: 'GET',
        });
    const data = await response.json();
    urlRequest = url;
    return data;
};

function resetOptions(){
    branch.value = 0;
    models.value = 0;
    years.value = 0;
    document.querySelector('table').style.display = 'none';
    for (let backgrounds of backgroundIcons) {
        backgrounds.style.backgroundColor = ' white';
    };
}