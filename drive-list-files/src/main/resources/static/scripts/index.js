$(document).ready(function(){
	
	$("#simpleUpload").click(function(){
		$.ajax({
			url:'/create',
			success: function() {
				alert("File upload complete.");
			}
		});
	});
	
	
	
	$("#refreshFileButton").click(function(){
		$.ajax({
			url: '/listfiles',
		}).done(function(data){
			console.dir(data);
			var fileHTML = "";
			for(file of data) {
				fileHTML += '<li class="list-group-item"><img src="' + file.thumbnailLink + '">' 
				+ file.name + ' (FileID : ' + file.id + ')' 
				+ '<button onclick="makePublic(\'' + file.id + '\')">Make Public</button>' 
				+ '<button onclick="deleteFile(\'' + file.id + '\')">Delete</button></li>';
			}
			
			$("#fileListContainer").html(fileHTML);
		});
	});
	
	$("#createFolderButton").click(function(){
		var folderName = prompt('Please enter folder name.');
		$.ajax({
			url: '/createfolder/' + folderName
		}).done(function(data){
			console.dir(data);
		})
	});
	
	$("#uploadFileInFolder").click(function(){
		$.ajax({
			url: '/uploadinfolder'
		}).done(function(data){
			alert(data.fileID);
		});
	});
	
});

function deleteFile(id) {
	$.ajax({
		url: '/deletefile/' + id,
		method: 'DELETE'
	}).done(function(){
		alert('File has been deleted. Please refresh the list.');
	});
}

function makePublic(id) {
	$.ajax({
		url: '/makepublic/' + id,
		method: 'POST'
	}).done(function(){
		alert('File can be viewed by anyone on internet.');
	});
}