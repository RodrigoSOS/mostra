var myGameInstance = null;
script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {...}).then((unityInstance) => {
		myGameInstance = unityInstance;
	}
}
	
	
function console(string input){
	myGameInstance.SendMessage('JSHook', 'console', input);
}
function Stop() {
	console.log("call Stop");
	myGameInstance.SendMessage('JSHook', 'Stop');
}
