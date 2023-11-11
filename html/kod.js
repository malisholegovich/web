var alph = ["a","f","d","s","e","r","f","h","d","s","j","g","k","c"]
var alph1 = ["d","h","f","l","o","t","o","p","e","w","q","s","d","5","y"]
var alph2 = ["f","g","g","f","r","f","t","s","y","f","e","w","t","b","a","b"]
var alph3 = ["h","j","h","e","f","g","u","x","w","v","c","r","2","4","x","t","e"]
var alph4 = ["v","v","j","s","d","v","i","v","s","s","v","d","o","5","b","r","z","r"]
var alph5 = ["c","d","6","c","x","c","o","f","x","r","n","t","j","c","x","e","l","x","c"]
var alph6 = ["x","e","l","x","s","4","t","d","c","e","g","y","k","h","c","d","6","c","x","h"]
var alph7 = ["b","r","z","a","a","s","y","4","f","g","s","u","l","i","v","v","j","s","d","v","i"]
var alph8 = ["x","t","x","s","d","d","h","b","d","h","e","g","n","8","h","j","h","e","f","g","u","p"]
var alph9 = ["a","y","4","d","w","w","b","w","r","e","d","v","b","6","f","g","g","f","r","f","t","s","e"]
var alph0 = ["r","l","3","w","5","e","v","t","t","t","g","f","v","5","d","h","f","l","o","t","o","p","e","n"]
var k = 0
var k1 = 0
var k2 = 0
var k3 = 0
var k4 = 0
var k5 = 0
var k6 = 0
var k7 = 0
var k8 = 0
var k9 = 0
var k0 = 0

function pereb(){
    document.getElementById("naz").innerHTML = alph[k]+alph1[k1]+alph2[k2]+alph3[k3]+alph4[k4]+alph5[k5]+alph6[k6]+alph7[k7]+alph8[k8]+alph9[k9]+alph0[k0]
    if (k!=alph.length-1){
        k++
    }
    if (k1!=alph1.length-1){
        k1++
    }
    if (k2!=alph2.length-1){
        k2++
    }
    if (k3!=alph3.length-1){
        k3++
    }
    if (k4!=alph4.length-1){
        k4++
    }
    if (k5!=alph5.length-1){
        k5++
    }
    if (k6!=alph6.length-1){
        k6++
    }
    if (k7!=alph7.length-1){
        k7++
    }
    if (k8!=alph8.length-1){
        k8++
    }
    if (k9!=alph9.length-1){
        k9++
    }
    if (k0!=alph0.length-1){
        k0++
    }
    else {
        clearInterval(t)
    }
}
let t = setInterval(pereb,100)

// const animIt= document.querySelectorAll(".abza")
// if (animIt.length>0){
//     window.addEventListener('scroll', anim_on)
//     function anim_on() {
//         for (let i = 0; i < animIt.length;i++){
//             const animIt=animIt[i]
//             const animItHeight = animIt.offsetHeight
//             const animItoff = offset(animIt).top
//             const animStart = 4
//
//             let animItPonint = window.innerHeight - animItHeight / animStart
//             if (animItHeight > window.innerHeight){
//                 animItPonint = window.innerHeight - window.innerHeight/animStart
//             }
//
//             if ((pageYOffset > animItoff - animItPonint) && pageYOffset <(animItoff + animItHeight)){
//                 animIt.classList.add('_active')
//             } else{
//
//             }
//
//         }
//     }
//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }
//     anim_on()
// }



