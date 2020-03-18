function replaceNull(str) {
	for(var i = 0; i < str.length; i++) {
		if(str[i] == "null") {
			str[i] = "";
		}
	}
	return str;
}

function getstr(urlLocal) {

	return urlLocal.substr(urlLocal.indexOf("?") + 1);
}

function getarr(urlLocal) {
	var keyValue = {};
	var arr = urlLocal.substr(urlLocal.indexOf("?") + 1).split("&");

	for(var i = 0; i < arr.length; i++) {
		var dex = arr[i].split("=");
		keyValue[dex[0]] = dex[1];
	}
	return keyValue;
}

/*传入封装好的数组  将值更新*/
function dataAlter(arr, data) {
	for(var a = 0; a < data.length; a++) {
		var dex = transform2(a + 1)
	console.log(dex[0])
		arr[dex[0]].splice(dex[1],1,(data[a]));
		
	}
	return arr;
}
/*传入列名和数据 返回封装好的数组*/
function dataOk(colume, data) {
	var length = colume.length //16 12
	var dex = (length) % 3;
	var arrLength = dex == 0 ? (length / 3) : ((length - dex) / 3 + 1);

	var arr = []
	for(var a = 0; a < arrLength; a++) {
		arr[arr.length] = [];
	};
	//[[],[]]

	for(var a = 0; a < length; a++) {
		var dex = transform1(a + 1)
		arr[dex[0]][dex[1]] = colume[a];
	}
	for(var a = 0; a < length; a++) {
		var dex = transform2(a + 1)
		arr[dex[0]][dex[1]] = data[a];
	}
	return arr;
};
/*列名角标转换*/
function transform1(num) {
	var dex = num % 3
	var outer = dex == 0 ? num / 3 - 1 : (num - dex) / 3;
	var inner = dex == 0 ? 4 : 2 * dex - 2;
	return [outer, inner];
}
/*列数据角标转换*/
function transform2(num) {
	var dex = num % 3
	var outer = dex == 0 ? num / 3 - 1 : (num - dex) / 3;
	var inner = dex == 0 ? 4 : 2 * dex - 2;
	return [outer, inner + 1];
}