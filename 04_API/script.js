// XMLHttpRequest is a class through which we can send and receive requests.
const requestUrl = "https://api.github.com/users/kshirodbiswal";

function showUser(data,source) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <p>It is a ${source} request</p>
    <img src="${data.avatar_url}" alt="${data.login}'s avatar" width="100">
    <p>Followers: ${data.followers}</p>
  `;
  document.body.appendChild(div);
}

const request = new XMLHttpRequest();
request.open("GET", requestUrl);
request.onreadystatechange = function () {
  console.log(request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    showUser(JSON.parse(request.responseText),"XHR");
  }
};
request.send();

fetch(requestUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    showUser(data,"FETCH");
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });