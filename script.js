let model;

// 1. Charger le modèle COCO-SSD
async function loadModel() {
model = await cocoSsd.load();
console.log("Modèle chargé");
}

loadModel();

// 2. Afficher l’image choisie par l’utilisateur
const imageUpload = document.getElementById("imageUpload");
const img = document.getElementById("img");

imageUpload.addEventListener("change", function(event) {
const file = event.target.files[0];
img.src = URL.createObjectURL(file);
});

// 3. Détecter les objets dans l’image
async function detectObjects() {
const predictions = await model.detect(img);

console.log("Predictions:", predictions);

const result = document.getElementById("result");
result.innerHTML = "";

predictions.forEach(prediction => {
result.innerHTML += `
<p>
Objet : ${prediction.class} <br>
Score : ${(prediction.score * 100).toFixed(2)} %
</p>
`;
});
}
