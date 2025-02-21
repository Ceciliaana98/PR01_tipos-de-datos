
let nota=59;

if(nota<101 && nota>89){
    console.log("La califición es excelente: ", nota);
}else if(nota<90 && nota>74){
    console.log("La califición esta bien: ", nota);
}else if(nota<75 && nota>59){
    console.log("La califición es suficiente: ", nota);
}else if(nota<60 && nota>=0){
    console.log("La califición es reprobatoria: ", nota);
}else{
    console.log("La califición es incorrecta ", nota);
}