

document.addEventListener("deviceready", init, false);

function init() {
}

function fileRead(fileName) {
	//This alias is a read-only pointer to the app itself
	window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/files/" + fileName, gotFile, fail);
}

function fail(e) {
	console.log("FileSystem Error");
	console.dir(e);
}

function gotFile(fileEntry) {

	fileEntry.file(function(file) {
		var reader = new FileReader();

		reader.onloadend = function(e) {
			console.log("Text is: "+this.result);
			document.querySelector("#textArea").innerHTML = this.result;
		}

		reader.readAsText(file);
	});

}