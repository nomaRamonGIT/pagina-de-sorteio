function sortear() {

    let pessoas = ["Igor", "Jose", "Marcos", "Pamela", "Joana"];

    let np = pessoas.length;

    let ns = Math.round(Math.random() * np);

    document.getElementById("d").innerHTML = pessoas[ns];
}