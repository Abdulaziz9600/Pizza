/*=============================== FORM ELMENTS =======================================*/

let elBreadselect = document.querySelector(".js-select");
let elRadios = document.querySelector(".js-radios");
let elChekbox = document.querySelector(".js-checkboxes");
let elChekboxAdder = document.querySelector(".js-checkboxes-adder");

/*=============================== OUT SIDE ELMENTS =======================================*/

let elBread = document.querySelector(".js-bread-name");
let elPizzaSize = document.querySelector(".js-pizza-size");
let elPizzaTop = document.querySelector(".js-top-list");
let elPizzaAdder = document.querySelector(".js-add-list");
let OrderBtn = document.querySelector(".btn")

let breadTypes = ['Yupqa', 'Qalin', 'Orta qalin'];
let pizzaSize = ['25 cm ', '30 cm', '35 cm'];
let addVegetables = ['Pomidor', 'Kurka goshti', 'Zaytun', 'Tuzlangan bodring', 'Qoziqorin', 'Qazi'];
let addtSousArrey = ['Achchiq', 'Sosiskali'];
let retsepVeg = [];
let retsepSous = [];

for (i=0; i< breadTypes.length; i++ ){

let newOption = document.createElement("option");
newOption.textContent = breadTypes[i];
elBread.textContent = breadTypes[0];
elBreadselect.name = 'Bread-types'
elBreadselect.addEventListener("change",function(e){
e.preventDefault

elBread.textContent = elBreadselect.value
})

elBreadselect.appendChild(newOption);
}


for (let i = 0; i < pizzaSize.length; i++) {

  let elInputRadio = document.createElement('input');
  let elLabel = document.createElement('label');

  elInputRadio.classList.add('form-check-input');
  elInputRadio.classList.add('pizzaSize-radio');
  elLabel.classList.add('radio-label');

  elInputRadio.value = pizzaSize[i];
  elInputRadio.type = 'radio';
  elInputRadio.name = 'pizza-size';
 

  elInputRadio.id = pizzaSize[i];
  elLabel.setAttribute('for', pizzaSize[i]);
  elLabel.textContent = pizzaSize[i];


  elInputRadio.addEventListener('change', function (evt) {
    evt.preventDefault();
    elPizzaSize.textContent = this.value;
  });

  elRadios.appendChild(elInputRadio);
  elRadios.appendChild(elLabel);
}

for ( let i = 0; i < addVegetables.length; i++ ){

let  elAddVegetablesList  = document.createElement('div');
let elAddVegetablesCheckbox = document.createElement('input');
let elAddVegetablesLabel = document.createElement('label');

elAddVegetablesLabel.classList.add('ps-3','text-warning', 'fw-bold');
elAddVegetablesList.classList.add('addVegetables-item');

elAddVegetablesCheckbox.id = addVegetables[i];
elAddVegetablesLabel.setAttribute('for', addVegetables[i]);
elAddVegetablesLabel.textContent = addVegetables[i];
elAddVegetablesCheckbox.value = addVegetables[i];
elAddVegetablesCheckbox.type = 'checkbox';
elAddVegetablesList.classList.add("input-label-wrapper");

elAddVegetablesList.appendChild(elAddVegetablesCheckbox);
elAddVegetablesList.appendChild(elAddVegetablesLabel);
elChekbox.appendChild(elAddVegetablesList);


  // FUNCTION
  elAddVegetablesCheckbox.addEventListener('change', function (e) {
    e.preventDefault();
    if (retsepVeg.includes(this.value)) {
      let index = retsepVeg.indexOf(this.value);
      retsepVeg.splice(index, 1);
    } else {
      retsepVeg.push(this.value);
      this.name = "retseps";
    }
    
    elPizzaTop.innerHTML = null;
    
    for (let i = 0; i < retsepVeg.length; i++){
      let elPizzaTopitem = document.createElement('li');
      elPizzaTopitem.textContent = retsepVeg[i];
      elPizzaTop.appendChild(elPizzaTopitem );
    }
    
  });


}

for (let i = 0; i < addtSousArrey.length; i++) {
  let addtionalsInputCheckbox = document.createElement('input');
  let addtionalsLabel = document.createElement("label");
  let addtionalsItem = document.createElement('div');

  addtionalsInputCheckbox.id = addtSousArrey[i];
  addtionalsLabel.setAttribute('for', addtSousArrey[i]);
  addtionalsInputCheckbox.value = addtSousArrey[i];
  addtionalsLabel.textContent = addtSousArrey[i];
  addtionalsItem.classList.add('addtionals-item');
  addtionalsInputCheckbox.type = 'checkbox';

  addtionalsLabel.classList.add('ps-3','text-warning', 'pt-2');
  
  addtionalsItem.appendChild(addtionalsInputCheckbox);
  addtionalsItem.appendChild(addtionalsLabel);
  elChekboxAdder.appendChild(addtionalsItem);

  // FUNCTION

  addtionalsInputCheckbox.addEventListener('change', function(evt) {
    evt.preventDefault();

    if (retsepSous.includes(this.value)) {
      let index = retsepSous.indexOf(this.value);
      retsepSous.splice(index, 1);
    } else {
      retsepSous.push(this.value);
      this.name = "Souses";
    }
    
    elPizzaAdder.innerHTML = null;
    
    for (let i = 0; i < retsepSous.length; i++){
      let elAdditionasResult = document.createElement('li');
      elAdditionasResult.classList.add('add-vegetables-item');
      elAdditionasResult.textContent = retsepSous[i];
      elPizzaAdder.appendChild(elAdditionasResult);
    }

  });

}