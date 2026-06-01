let model;

async function loadModel() {
  model = await cocoSsd.load();
  console.log("Modèle chargé");
}

loadModel();

const imageUpload = document.getElementById("imageUpload");
const img = document.getElementById("img");

imageUpload.addEventListener("change", function(event) {
  const file = event.target.files[0];
  img.src = URL.createObjectURL(file);
});

async function detectObjects() {
  const predictions = await model.detect(img);
  console.log("Predictions:", predictions);

  const result = document.getElementById("result");
  result.innerHTML = "";

  const inv = {};
  predictions.forEach(p => {
    inv[p.class] = (inv[p.class] || 0) + 1;
    console.log(inv)
  });

  for (let obj in inv) {
    const quantite = inv[obj];
    console.log(obj)}

console.log(inv)

//predictions.forEach ((prediction,position) => {
 //result.innerHTML += `
 // <p>

//Objet: ${prediction.class} ${inv[prediction.class]} 
      
//</p>
 // }
// );
// }
 
for (let obj in inv) {

    result.innerHTML += `
    <p>
        Objet : ${obj} ${inv[obj]}
    </p>


`;

  }
}

