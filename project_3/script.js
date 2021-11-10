let str;
// while (true){
//     var str=prompt('Введите текст');
//     if ((str == '' ) ||(str == null)) break;
// }

while (!str) {
	str = prompt('Введите текст');
}

let ruArray = ['А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е',
	'Ё', 'ё', 'Ж', 'ж', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л',
	'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т',
	'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ',
	'Ъ', 'ъ', 'Ы', 'ы', 'Ь', 'ь', 'Э', 'э', 'Ю', 'ю', 'Я', 'я'];
let enArray = ['A', 'a', 'B', 'b', 'V', 'v', 'G', 'g', 'D', 'd', 'E', 'e',
	'Yo', 'yo', 'Zh', 'zh', 'Z', 'z', 'I', 'i', 'J', 'j', 'K', 'k', 'L',
	'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's', 'T',
	't', 'U', 'u', 'F', 'f', 'X', 'x', 'C', 'c', 'Ch', 'ch', 'Sh', 'sh',
	'Shh', 'shh', '``', '``', 'Y', 'y', '`', '`', 'E', 'e', 'Yu', 'yu', 'Ya', 'ya']
let arr = str.split('');
let out = arr;
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < ruArray.length; j++) {
		if (arr[i] == ruArray[j]) {
			out[i] = enArray[j];
		}
	}
}
console.log(out.join(""));