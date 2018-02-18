'use strict';

// straight stole this from stack overflow.
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 100; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  

const shareState = function() {
    this.customEventListener = makeid();
    this.initiate = (_this) => {

        if (typeof this.state === 'undefined') this.state = _this.state;
        if (typeof _this.state === 'undefined') _this.state = this.state;

        return window.addEventListener(this.customEventListener, (event) => {
            _this.setState(event.detail);
            this.state = _this.state;
        });
    }

    this.updateState = (object) => {
        const eventTest = new CustomEvent(this.customEventListener, {detail: object});
        window.dispatchEvent(eventTest);
    }   
}

module.exports = new shareState;