var myGameInstance = null;
//var unityInstance = window.unityInstance = UnityLoader.instantiate("unityContainer", "%UNITY_WEBGL_BUILD_URL%", {onProgress: UnityProgress});
script.onload = () => {
    createUnityInstance(document.querySelector("#unity-canvas"), {
        dataUrl: "Build/foguete.data",
        frameworkUrl: "Build/foguete.framework.js",
        codeUrl: "Build/foguete.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Cnnct",
        productName: "Empinar Moto",
        productVersion: "1.0",
        // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
        // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
    })
}

var unityInstance = window.document.getElementById("unity-canvas");
	
function com(input){
	unityInstance.SendMessage('JSHook', 'console', input);
	
}
function Stop() {
	console.log("call Stop");
	unityInstance.SendMessage('JSHook', 'Stop');
}
