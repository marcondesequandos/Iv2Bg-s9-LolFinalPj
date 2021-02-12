//         var spart = str.split(" ");
//         for (var i = 0; i < spart.length; i++) {
//             var j = spart[i].charAt(0).toUpperCase();
//             spart[i] = j + spart[i].substr(1);
//         }
//         jQuery('#nomeC').val(spart.join(" "));

//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById('cNam').addEventListener('keyup', function () {
//         var str = document.getElementById('cNam').value

//         var spart = str.split(" ")
//         for (var i = 0; i < spart.length; i++) {
//             var j = spart[i].charAt(0).toUppercase()
//             spart[i] = j + spart[i].substr(1)
//         }

//         document.getElementById('cNam').value(spart.join (" "))

//     })
// })

// function capitalizeFirstLetter() {
//     var originalText = document.getElementById('cNam').value

//     upperCaseText = originalText.charAt(0).toUpperCase() + originalText.slice(1)

//     document.getElementById('cNam').value = upperCaseText
// }

// function populateTextarea(id) {
//     //get the text by id or predefined or however you wish or passed to function
//     var imgCh = document.getElementById(id)
//     var result = imgCh.getAttribute("alt") 

//     console.log(id)

//     document.getElementById('cNam').value = result
//  }

//  function ok(){
//     document.getElementById('cNam').value = "Pronto"
//  }





//  var champn = document.getElementById('cNam').value

// function chamar(champion) {

//     console.log(champn)
