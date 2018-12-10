// 名称：main.js
// 功能：引用模块
// 路径说明：默认以main.js所在目录为requirejs导入js文件的默认目录
requirejs.config({
    baseUrl: 'app', // 以app目录作为requirejs加载js文件的默认目录
    paths : {
        // 下边key : value 表示 模块名称 : 模块路径
        // 定义模块路径，浏览器不会加载js文件
        // 因为app是默认目录，因此此处需要../ 再进入到lib获取js文件
        // "jquery" : "../lib/jquery-2.1.4.min"
        "jquery" : "/js/lib/jquery.min",
        "popper" : "/js/lib/popper.min",
        "bootstrap" : "/js/lib/bootstrap.min",
        "css" : "/js/lib/css"
    },
    shim : {
        "bootstrap": {
            //css! 是固定写法，后面紧跟要引入的css路径
            deps: ["jquery","popper","css!/css/bootstrap.min.css"]// bootstrap模块依赖jquery模块
        }
    }
});

require(["utils","jquery","bootstrap"],function(utils,$) {// 将app/utils改成了utils
    console.log($);
    $("#h2").text("Hello world!");
    utils.sayHello();
});