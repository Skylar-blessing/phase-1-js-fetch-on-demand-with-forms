const init = () => {
  
}

document.addEventListener('DOMContentLoaded', init);

const inputForm = document.querySelector('form');

inputForm.addEventListener('submit', (event) => {

});
const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
  });

  event.target
  event.target.children

<form>
  <label for="searchByID">Search By ID</label>
  <input id="searchByID" type="text" placeholder="Enter ID here"/>
  <input type="submit" />
</form>

event.target.children[1]

event.target.children[1].value

inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');
  
    console.log(input.value);
  });

  const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
  
      console.log(input.value);
  
      fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // LOG: (3) [{…}, {…}, {…}]
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');
  
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  });




