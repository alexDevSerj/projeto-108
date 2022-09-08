var gato = 0
var cachorro = 0
var leao = 0
var vaca = 0

function startClassification() {
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/q5hMx8OLW/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    console.log("banana")
    if (error) {
        console.error(error)
    } else {
        console.log(results)

        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        var img;
        switch (results[0].label) {
            case 'gato':
                gato++
                document.getElementById("img").src = './miau-cute-cat.gif'
                document.getElementById("contagem").style.color = "rgb(" + r + "," + g + "," + b + ")";
                document.getElementById('detectado').innerHTML = "som derectado de gato"
                break;
            case 'leão':
                leao++
                document.getElementById("img").src = './aslan-roar.gif'
                document.getElementById("contagem").style.color = "rgb(" + r + "," + g + "," + b + ")";
                document.getElementById('detectado').innerHTML = "som derectado de leão"
                break;
            case 'vaca':
                vaca++
                document.getElementById("img").src = './200.gif'
                document.getElementById("contagem").style.color = "rgb(" + r + "," + g + "," + b + ")";
                document.getElementById('detectado').innerHTML = "som derectado de vaca"
                break;
            case 'cachorro':
                cachorro++
                document.getElementById("img").src = './giphy (1).gif'
                document.getElementById("contagem").style.color = "rgb(" + r + "," + g + "," + b + ")";
                document.getElementById('detectado').innerHTML = "som derectado de cachorro"
                break;
            default:
                document.getElementById("img").src = './escutando.jpg'
                document.getElementById('detectado').innerHTML = "derectado de som de fundo"
        }

        document.getElementById('contagem').innerHTML =
            "Cachorro detectado: " + cachorro +
            " - gato detectado: " + gato +
            " - leão detectado: " + leao +
            " - vaca detectado: " + vaca
    }
}