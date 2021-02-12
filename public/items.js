


var item
var j

function callItens() {
    document.getElementById('itens').style.visibility = "visible"

    fetch(`https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/item.json`)
        .then(res => res.json())
        .then(json => {
            
           
       

            var j = []

            for (num in json.data) {
                j.push(json.data[num])
               

                json1 = json.data[num] + ".json"

                itemimg = json.data[num].image.full


                document.getElementById("itens").innerHTML +=
                    `<div class="foto" style="width:50px; padding: 2px; margin: 2px; height: 50px;"><img class="foto" id="${num}" style="width:50px" onclick="chamar(${num})" src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/item/${num}.png"></div>`

            }

            var maxJ = j.length
        })
}

callItens()

function chamar(item) {
    document.getElementById('build').style.visibility ="visible"
    fetch(`https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/item.json`)
        .then(res => res.json())
        .then(json5 => {
            document.getElementById("build").innerHTML = '<div>' + json5.data[item].name +
                '<br>' + json5.data[item].plaintext + "<br>" +
                 json5.data[item].gold.total + " - " +
                 json5.data[item].gold.sell + "<br>" +
                json5.data[item].description + '</div>'

           

            var finalItem = []

            if (finalItem != undefined) {
                for (i = 0; i < finalItem.length; i++) {
                    finalItem.pop()
                }
            }

            for (num in json5.data[item].into) {
                finalItem.push(json5.data[item].into[num])
            }

            for (i = 0; i < finalItem.length; i++) {
                document.getElementById("build").innerHTML +=
                    `<div><img class="foto" id="${finalItem[i]}"  style="width:50px; height:50px" onclick="chamar(${finalItem[i]})" src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/item/${finalItem[i]}.png"></div>`
            }


        })
}

const links = document.getElementsByClassName('mdl-navigation__link')
const totalLinks = links.length

links[i].addEventListener('click', function () {
    updateLinks()

})

function updateLinks () {
    for (let link of links)
    link.classList.remove('mdl-navigation__link')
    link.classList.remove('mdl-navigation__link active')
}