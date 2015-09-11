/**
 * New typescript file
 */
var Hello = (function () {
    function Hello(message) {
        this.msg = message;
    }
    Hello.prototype.getMsg = function () {
        return this.msg;
    };
    Hello.prototype.sayMsg = function () {
        return "Hello " + this.msg;
    };
    return Hello;
})();
document.addEventListener("DOMContentLoaded", function (event) {
    var span = document.getElementById("span");
    var input = document.getElementById("input");
    var button = document.getElementById("button");
    button.onclick = function () {
        var hello = new Hello(input.value);
        span.innerText = hello.sayMsg();
    };
});
//# sourceMappingURL=hello.js.map