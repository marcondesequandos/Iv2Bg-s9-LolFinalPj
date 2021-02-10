//Dificuldade 1 a 3 baixa; 4 a 7 moderada; 8 a 10 alta

//conteudo done:
//fetch ok
//infos intro ok
//imagem ok
//atributos ok
//skills imagens ok
//skills desc ok
// busca champs ok


//implementar change img para função de champions
//implementar change img para dificuldade
//mudar estilo controlador de nível e geral da div ver se da pra fazer duas colunas
//ver qual informação a mais pode ser colocada
//arrumar input


//fazer pagina de itens

var champn

document.getElementById('cNam').addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        summonChampion ()
    }
}
    

)

function summonChampion () {

    document.getElementById('introc').innerHTML = ""
    document.getElementById('trdInfo').innerHTML = ""
    document.getElementById('frtInfo').innerHTML = ""
    document.getElementById('abInfos').innerHTML = ""

    

    champn = document.getElementById('cNam').value
    console.log(champn)


    fetch(`https://ddragon.leagueoflegends.com/cdn/10.23.1/data/pt_BR/champion/${champn}.json`)
        .then((response) => { return response.json()
        .then((champd) => {
    console.log(champd.data)



    cName = `${champn}`
    console.log(cName)

    let Passive = champd.data[cName].passive.image.full
    console.log(Passive)
    let Q = champd.data[cName].spells[0].image.full
    let W = champd.data[cName].spells[1].image.full
    let E = champd.data[cName].spells[2].image.full
    let R = champd.data[cName].spells[3].image.full






    if (champd.data[cName].info.difficulty <= 3) {
    var diff = 'Baixa'
    } else if (champd.data[cName].info.difficulty >= 4 && champd.data[cName].info.difficulty <=7 ) {
    var diff = 'Moderada'
    } else {
    var diff = "Alta"
    }

    if (champd.data[cName].tags[0] == "Marksman") {
        var func = "Atirador"
    }

    document.getElementById('introc').innerHTML =

    `
    <div style="padding: 20px">
        <div class="mdl-card__title" style="display:flex; flex-direction: column; justify-content: center; text-align:center;"> 
            <h1>`+ champd.data[cName].name+` </h1>            
            <h5>`+ champd.data[cName].title +`</h5>
            <div style="display: inline;">            
            <h6>Função: ${func} <img src='Images/marksmen.jpg' width="70px"></h6>
            <h6>Dificuldade: <img src='Images/difficultlow.JPG' width="70px"></h6>
            </div>
            <div style="text-align: center;"> 
        </div>
        </div>
        <br>
        <div style="padding: 20px" >

                `+ champd.data[cName].lore + ` 

            
        </div>
    <br>

    </div>        
    `

    noDelay()

    function noDelay () {
        var j = []
       

        for (skin in champd.data[cName].skins) {
        j.push(`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champn}_`+champd.data[cName].skins[skin].num+`.jpg`)   
        }

        //nome da skin:


        for (let i = 0; i < j.length; i++) {
            document.getElementById('chImg').innerHTML +=        
            `<img src="${j[i]}">`
        }

        

        var cont = 0

        document.getElementById('chImg').innerHTML =
        
        `        
        <button class="cimg" id="lbt" style="left: 0px;"><span class="material-icons">keyboard_arrow_left</span></button>
        <div class="cimg" id="sk">        
            <img id="camp" src='https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champn}_${cont}.jpg''>
        </div>
        <button class="cimg" id="rbt" style="right: 0px;"><span class="material-icons">keyboard_arrow_right</span></button>                                          
        `



        var maxJ = j.length
        var cont1 = 0
        console.log(maxJ -1)

        document.getElementById('rbt').addEventListener('click', function() {
        if(cont1 < (maxJ -1)) {
            cont1++ 
        } else if (cont1 == (maxJ -1)) {
            cont1 = 0
        } 

        document.getElementById('sk').innerHTML = 

        `<img src="`+j[cont1]+`">`



        })
        

        document.getElementById('lbt').addEventListener('click', function() {
        if(cont1 <= (maxJ -1) && cont1 > 0) {
            cont1-- 
        } else if (cont1 == 0) {
            cont1 = (maxJ -1)       
        } 

        document.getElementById('sk').innerHTML = 

        `<img src="`+j[cont1]+`">`

        })

    }




    


    document.getElementById('stcont').innerHTML =

    `
    <div>
    <div id="st">                     
        <h2>Nível `+ 1 + `</h2>
        <p>Vida: ` + champd.data[cName].stats.hp + `</p>
        <p>Velocidade de Movimento: ` + champd.data[cName].stats.movespeed + `</p>
        <p>Alcance de Ataque: ` + champd.data[cName].stats.attackrange + `</p>
        <p>Velocidade de Ataque: ` + champd.data[cName].stats.attackspeed + `</p>
        <p>Dano de Ataque: ` + champd.data[cName].stats.attackdamage + `</p>
        <p>Armadura: ` + champd.data[cName].stats.armor + `</p>
        <p>Resistência Mágica: ` + champd.data[cName].stats.spellblock + `</p>
        <p>Mana: ` + champd.data[cName].stats.mp + `</p>
    </div>
    </div>    
    `





    document.getElementById('nvl').addEventListener('input', function () {

    nvl = document.getElementById('nvl').value

    hpUP = (champd.data[cName].stats.hp + (champd.data[cName].stats.hpperlevel * (nvl -1)))
    vmUP = champd.data[cName].stats.movespeed
    arUP = champd.data[cName].stats.attackrange
    asUP = (champd.data[cName].stats.attackspeed + (champd.data[cName].stats.attackspeed * champd.data[cName].stats.attackspeedperlevel * (nvl -1) * 0.01)).toFixed(2)
    dmUP = (champd.data[cName].stats.attackdamage + (champd.data[cName].stats.attackdamageperlevel * (nvl -1)))
    amUP = (champd.data[cName].stats.armor + (champd.data[cName].stats.armorperlevel * (nvl -1)))
    rmUP = (champd.data[cName].stats.spellblock + (champd.data[cName].stats.spellblockperlevel * (nvl -1)))
    mpUP = (champd.data[cName].stats.mp + (champd.data[cName].stats.mpperlevel * (nvl -1)))




    document.getElementById('stcont').innerHTML =

    `
    <div>
        <div id="st">                     
            <h2>Nível ` + nvl + `</h2>
            <p>Vida: ` + hpUP + `</p>
            <p>Velocidade de Movimento: ` + vmUP + `</p>
            <p>Distância de Ataque: ` + arUP + `</p>
            <p>Velocidade de Ataque: ` + asUP + `</p>
            <p>Dano de Ataque: ` + dmUP + `</p>
            <p>Armadura: ` + amUP + `</p>
            <p>Resistência Mágica: ` + rmUP + `</p>
            <p>Mana: ` + mpUP + `</p>
        </div>
    </div> 
    `        
    })

    document.getElementById('passAb').innerHTML =
    `<img  style="width:100px" src="https://ddragon.leagueoflegends.com/cdn/10.23.1/img/passive/${Passive}">`
    document.getElementById('abQ').innerHTML =
    `<img style="width:100px" src="https://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/${Q}">`
    document.getElementById('abW').innerHTML =
    `<img style="width:100px"  src="https://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/${W}">`
    document.getElementById('abE').innerHTML =
    `<img style="width:100px"  src="https://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/${E}">`
    document.getElementById('abR').innerHTML =
    `<img style="width:100px"  src="https://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/${R}">`

    document.getElementById('passDsc').innerHTML = 

    `<div style="margin-top: 20px">
    <p>`+ champd.data[cName].passive.name +`</p>
    <p>`+ champd.data[cName].passive.description +`</p>
    <br>
    </div>
    `

    for (var i in champd.data[cName].spells) {
    document.getElementById('abInfos').innerHTML +=

        `<div><div id="infos" style="margin-top: 20px"` + [i] + `">
        <p id="abname`+ [i] + `" style="display: none;">` + champd.data[cName].spells[i].name + `</p>
        <p id="custo`+ [i] + `" style="display: none;">Custo: ` + champd.data[cName].spells[i].costBurn + `</p>
        <p id="cooldown`+ [i] + `" style="display: none;">Tempo de Recarga: ` + champd.data[cName].spells[i].cooldown + `</p>
        <p id="description`+ [i] + `" style="display: none;">` + champd.data[cName].spells[i].description + `</p>
    </div></div>`


    document.getElementById('abQ').addEventListener('click', function () {
        document.getElementById('passDsc').style.display = "none"
    
        document.getElementById('abname0').style.removeProperty('display')
        document.getElementById('custo0').style.removeProperty('display')
        document.getElementById('cooldown0').style.removeProperty('display')
        document.getElementById('description0').style.removeProperty('display')
    
        document.getElementById('abname1').style.display = "none"
        document.getElementById('custo1').style.display = "none"
        document.getElementById('cooldown1').style.display = "none"
        document.getElementById('description1').style.display = "none"
    
        document.getElementById('abname2').style.display = "none"
        document.getElementById('custo2').style.display = "none"
        document.getElementById('cooldown2').style.display = "none"
        document.getElementById('description2').style.display = "none"
    
        document.getElementById('abname3').style.display = "none"
        document.getElementById('custo3').style.display = "none"
        document.getElementById('cooldown3').style.display = "none"
        document.getElementById('description3').style.display = "none"
    
    
    
    })
    
    document.getElementById('abW').addEventListener('click', function () {
        document.getElementById('passDsc').style.display = "none"
    
        document.getElementById('abname0').style.display = "none"
        document.getElementById('custo0').style.display = "none"
        document.getElementById('cooldown0').style.display = "none"
        document.getElementById('description0').style.display = "none"
    
        document.getElementById('abname1').style.removeProperty('display')
        document.getElementById('custo1').style.removeProperty('display')
        document.getElementById('cooldown1').style.removeProperty('display')
        document.getElementById('description1').style.removeProperty('display')
    
        document.getElementById('abname2').style.display = "none"
        document.getElementById('custo2').style.display = "none"
        document.getElementById('cooldown2').style.display = "none"
        document.getElementById('description2').style.display = "none"
    
        document.getElementById('abname3').style.display = "none"
        document.getElementById('custo3').style.display = "none"
        document.getElementById('cooldown3').style.display = "none"
        document.getElementById('description3').style.display = "none"
    })
    
    document.getElementById('abE').addEventListener('click', function () {
        document.getElementById('passDsc').style.display = "none"
    
        document.getElementById('abname0').style.display = "none"
        document.getElementById('custo0').style.display = "none"
        document.getElementById('cooldown0').style.display = "none"
        document.getElementById('description0').style.display = "none"
    
        document.getElementById('abname1').style.display = "none"
        document.getElementById('custo1').style.display = "none"
        document.getElementById('cooldown1').style.display = "none"
        document.getElementById('description1').style.display = "none"
    
        document.getElementById('abname2').style.removeProperty('display')
        document.getElementById('custo2').style.removeProperty('display')
        document.getElementById('cooldown2').style.removeProperty('display')
        document.getElementById('description2').style.removeProperty('display')
    
        document.getElementById('abname3').style.display = "none"
        document.getElementById('custo3').style.display = "none"
        document.getElementById('cooldown3').style.display = "none"
        document.getElementById('description3').style.display = "none"
    })
    
    document.getElementById('abR').addEventListener('click', function () {
        document.getElementById('passDsc').style.display = "none"
    
        document.getElementById('abname0').style.display = "none"
        document.getElementById('custo0').style.display = "none"
        document.getElementById('cooldown0').style.display = "none"
        document.getElementById('description0').style.display = "none"
    
        document.getElementById('abname1').style.display = "none"
        document.getElementById('custo1').style.display = "none"
        document.getElementById('cooldown1').style.display = "none"
        document.getElementById('description1').style.display = "none"
    
        document.getElementById('abname2').style.display = "none"
        document.getElementById('custo2').style.display = "none"
        document.getElementById('cooldown2').style.display = "none"
        document.getElementById('description2').style.display = "none"
    
        document.getElementById('abname3').style.removeProperty('display')
        document.getElementById('custo3').style.removeProperty('display')
        document.getElementById('cooldown3').style.removeProperty('display')
        document.getElementById('description3').style.removeProperty('display')
    })
    }
    
    
    
    
    
    
    
    
    
    
    
    })
    })
    
    
    }
    
    
    
    document.getElementById('passAb').addEventListener('click', function () {
    document.getElementById('passDsc').style.removeProperty('display')
    
    document.getElementById('abname0').style.display = "none"
    document.getElementById('custo0').style.display = "none"
    document.getElementById('cooldown0').style.display = "none"
    document.getElementById('description0').style.display = "none"
    
    document.getElementById('abname1').style.display = "none"
    document.getElementById('custo1').style.display = "none"
    document.getElementById('cooldown1').style.display = "none"
    document.getElementById('description1').style.display = "none"
    
    document.getElementById('abname2').style.display = "none"
    document.getElementById('custo2').style.display = "none"
    document.getElementById('cooldown2').style.display = "none"
    document.getElementById('description2').style.display = "none"
    
    document.getElementById('abname3').style.display = "none"
    document.getElementById('custo3').style.display = "none"
    document.getElementById('cooldown3').style.display = "none"
    document.getElementById('description3').style.display = "none"
    
    
    
    })    