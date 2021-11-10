let array = [];
for(let i=0; i<=9;i++){
    let r=[];
    for(let j = 1;j<=9; j++){
        r[j]=i*j;
    }
    array.push(r);
}
console.log(array);
let index=prompt('Введите первый множитель');
while (!index || isNaN(index)|| index<10){
	index = prompt('Введите корректный первый множитель');
}
let index2 = prompt('Введите второй множитель');
while (!index2|| isNaN(index2)||index2<10){
	index2 = prompt('Введите корректный второй множитель');
}
alert(array[index][index2]=index*index2);
console.log(array[index][index2]);