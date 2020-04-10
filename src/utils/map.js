let Map = {
  BaiDuMap(ak) {
    return new Promise(function (resolve, reject) {
      window.init = function () {
        resolve(BMap)
      }
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "http://api.map.baidu.com/api?v=3.0&ak=" + ak + "&callback=init";
      script.onerror = reject;
      document.head.appendChild(script);
      // const script2 = document.createElement("script");
      // script2.type = "text/javascript";
      // script2.src = "http://api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js";
      // script2.onerror = reject;
      // document.head.appendChild(script2);
    })
  }

}

export {
  Map
}
