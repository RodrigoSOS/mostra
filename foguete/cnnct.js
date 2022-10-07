var myGameInstance = null;
{
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
    }).then((unityInstance) => myGameInstance = unityInstance);
    
}
myGameInstance = unityInstance;
	
function com(input){
    myGameInstance.SendMessage('JSHook', 'console', input);
	
}
function Stop() {
	console.log("call Stop");
    myGameInstance.SendMessage('JSHook', 'Stop');
}
