// comment on why this file exists

export const fetchUser = ({ email, password, onSuccess, onFailure }) => {
    fetch('http://localhost:8080/api/login',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(res => res.json())
      .then(result => {
        if(result.token){
          onSuccess(result);
        }
        else{
          onFailure(result);
        }
      })
      .catch(console.log)
}

// comment on async await
export const fetchUserMyVersion = async ({ email, password, onSuccess, onFailure }) => {
  const response = await fetch('http://localhost:8080/api/login',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });
  
  const jsonResult = response.json();
  if (response.ok && jsonResult.token) {
    onSuccess(response);
  } else {
    onFailure(response); // a little awkward here because technically we are calling onFailure when the response is technically successful
  }
}