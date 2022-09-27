var myGameInstance = null;
var unityInstance = window.unityInstance = UnityLoader.instantiate("unityContainer", "%UNITY_WEBGL_BUILD_URL%", {onProgress: UnityProgress});

	
function com(input){
	unityInstance.SendMessage('JSHook', 'console', input);
}
function Stop() {
	console.log("call Stop");
	unityInstance.SendMessage('JSHook', 'Stop');
}
