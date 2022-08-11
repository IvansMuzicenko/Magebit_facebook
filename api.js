async function getRandomName() {
  const response = await fetch("https://randomuser.me/api/");
  const response_json = await response.json();
  if (response.status == 200) {
    return (
      response_json.results[0].name.first +
      " " +
      response_json.results[0].name.last
    );
  }
}
async function getRandomDesc() {
  const response = await fetch("https://uselessfacts.jsph.pl/random.json");
  const response_text = await response.text();
  if (response.status == 200) {
    return await JSON.parse(response_text).text;
  }
}
async function getRandomImg() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const response_json = await response.json();
  if (response.status == 200) {
    return await response_json.message;
  }
}

export { getRandomDesc, getRandomImg, getRandomName };
