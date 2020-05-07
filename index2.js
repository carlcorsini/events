let people = [
  { first: 'Carl', last: 'Corsini' },
  { first: 'Barry', last: 'Bonds' },
  { first: 'John', last: 'Jacobjengleheimershmidt' },
];


console.log(people)
window.onload = async function () {
  axios.get('https://beer-me-python-backend.herokuapp.com/beers').then(result=> {
    console.log(result.data)
    people = result.data    
  })

  
  let button2 = document.createElement('button');
  button2.innerHTML = 'Click Me';

  let root = document.querySelector('#root');

  root.appendChild(button2);

  let message;

  let cards = document.querySelector('#cards')
  let image
  button2.addEventListener('click', function(){
    for (let i = 0; i < people.length; i++){
      message = document.createElement('p')
      image = document.createElement('img')
      message.innerHTML = people[i].beer_name
      image.src = people[i].beer_label
      cards.appendChild(message)
      cards.appendChild(image)
    }
  })



};
