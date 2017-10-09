export default function(){

  var request = new Request('http://localhost:3000/api/users', {
    method: 'GET',
    mode: 'no-cors',
    headers: new Headers({
      'Accept': 'application/pureach_api.v1',
      'Content-Type': 'application/json',
    })
  });

  fetch(request).then(function(response) {
    // Convert to JSON
    return response.json();
  }).then(function(j) {
    console.log(j);
  });
}
