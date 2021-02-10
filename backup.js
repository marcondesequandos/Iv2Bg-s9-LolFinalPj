//         var spart = str.split(" ");
//         for (var i = 0; i < spart.length; i++) {
//             var j = spart[i].charAt(0).toUpperCase();
//             spart[i] = j + spart[i].substr(1);
//         }
//         jQuery('#nomeC').val(spart.join(" "));

//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('cNam').addEventListener('keyup', function () {
        var str = document.getElementById('cNam').value

        var spart = str.split(" ")
        for (var i = 0; i < spart.length; i++) {
            var j = spart[i].charAt(0).toUppercase()
            spart[i] = j + spart[i].substr(1)
        }

        document.getElementById('cNam').value(spart.join (" "))

    })
})

// function capitalizeFirstLetter() {
//     var originalText = document.getElementById('cNam').value

//     upperCaseText = originalText.charAt(0).toUpperCase() + originalText.slice(1)

//     document.getElementById('cNam').value = upperCaseText
// }