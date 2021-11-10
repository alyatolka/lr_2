let arr=[];
let str=prompt('Введите строку с разделителем ";"');
while(!str || (str.indexOf(';')==-1) || typeof(str) != 'string'){
    str=prompt('Введите строку с разделителем ";"!');
}
arr=str.split(';');

// for (let i=0; i<arr.length; i++){
//     if (arr[i]=='')
//     str='';
// }
for(let i=0;i<arr.length;i++)
{
    if(arr[i].trim())
    {
        document.write(arr[i]+'<br>')
    }
}
// document.write(arr.join('<br>'));