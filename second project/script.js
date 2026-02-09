const form = document.getElementById("userForm");
const card = document.getElementById("card");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      throw new Error(`HTTP помилка! Status: ${response.status}`);
    }
    const data = await response.json();
    const user = data.results[0];
    card.innerHTML = `
      <img src="${user.picture.large}">
      <h3>${user.name.first} ${user.name.last}</h3>
      <p>Email: ${user.email}</p>
      <p>Country: ${user.location.country}</p>
    `;
  } catch (error) {
    card.innerHTML = `
      <p style="color:red">Помилка: ${error.message}</p>
    `;
  }
});
