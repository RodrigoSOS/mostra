var myGameInstance = null;
script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {...}).then((unityInstance) => {
		myGameInstance = unityInstance;
	}
function stop() {
	myGameInstance..SendMessage('JSHook', 'Stop');
}