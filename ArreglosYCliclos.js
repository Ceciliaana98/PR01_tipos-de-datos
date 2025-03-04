let Frutas=['Manzana','Manzana','Plátano','Manzana','Manzana','Cereza','Cereza','Cereza','Cereza','Mandarina','Mandarina','Mandarina','Mandarina','Mandarina','Mandarina','Mandarina','Mandarina','Naranja','Naranja','Naranja','Naranja','Naranja','Naranja','Naranja','Naranja','Naranja','Naranja','Naranja','Manzana','Manzana','Manzana','Manzana','Plátano','Plátano','Plátano','Plátano','Plátano','Plátano','Plátano','Plátano','Plátano','Plátano'];
let dFrutas=[]; // dFrutas arreglo de Frutas ordenadas 
dFrutas[0]=Frutas[0];compFrutas=Frutas[0];
Frutas[0]=null;

let tmp=1;
while(dFrutas.length<Frutas.length){
    for(i=0;i<Frutas.length;i++){
        if(compFrutas==Frutas[i]){
            dFrutas.push(Frutas[i]);            
            Frutas[i]=null;            
        }
        else if(null!=Frutas[i]){
            tmp=i;
        }
    }
    compFrutas=Frutas[tmp];
}

let cont=0;
for(i=0;i<dFrutas.length;i++){
    cont++;
    if(dFrutas[i]!=dFrutas[i+1]){
        console.log(dFrutas[i], ": ", cont);
        cont=0;
    }
}
