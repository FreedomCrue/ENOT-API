interface Raccoon {
  name: string;
  weight: number;
  age: number;
}

const ENOTS: Raccoon[] = [];

function addRaccoon() {
  var name = (document.getElementById('name') as HTMLInputElement).value;
  var weight = parseFloat((document.getElementById('weight') as HTMLInputElement).value);
  var age = parseInt((document.getElementById('age') as HTMLInputElement).value);

  if (!name || isNaN(weight) || isNaN(age)) {
    alert('Please enter valid values for all fields.');
    return;
  }

  var raccoon: Raccoon = {
    name: name,
    weight: weight,
    age: age
  };

  ENOTS.push(raccoon);

  var outputDiv = document.getElementById('output');
  if (outputDiv) {
    outputDiv.innerHTML = `Вы добавили "${raccoon.name}", вес ${raccoon.weight} кг, возраст ${raccoon.age} года.`;
  }
}


