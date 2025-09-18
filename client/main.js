function handleSubmit(event) {
  event.preventDefault();
  let query = { query: event.target.query.value };
  console.log(query);
  
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
  };
  let url = 'http://localhost:3000/query';
  fetch(url, options)
    .then(res => res.json())
    .then(data => {
      let div = document.querySelector('.resultado');
      div.innerHTML = ''; 
      div.textContent = JSON.stringify(data);   
    });
  event.target.reset();
}