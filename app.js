async function getDogBreeds() {
  try {
    let responce = await axios.get("https://dog.ceo/api/breeds/list/all");
    let dropdown = document.querySelector("select");

    for (let a = 0; a < responce.data.message.length; a++) {
      let option = document.createElement(option);
      option.value = a;

      dropdown.appendChild(option);
    }
    //for each
    return responce;
  } catch (error) {
    console.log("error");
  }
}

async function populateDogList() {
  for (const key in dogtypeData) {
    if (Object.hasOwnProperty.call(dogtypeData, key)) {
      const element = object[key];
      dogtypeData;
    }
  }
}

dogtypeData = getDogBreeds();
console.log(dogtypeData);
populateDogList();
