/**
 * New typescript file
 */

class Hello {
    msg: string;

    constructor(message: string) {
        this.msg = message;
    }

    getMsg() {
        return this.msg;
    }

    sayMsg() {
        return "Hello " + this.msg;
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    var span = document.getElementById("span");
    var input = <HTMLInputElement>document.getElementById("input");
    var button = document.getElementById("button");

    button.onclick = function() {
        var hello = new Hello(input.value);
        span.innerText = hello.sayMsg();
    };
});

