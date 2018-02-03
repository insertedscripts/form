function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener){
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}
var sendMessage = function (msg) {
    window.parent.postMessage(msg, '*');
};
bindEvent(window, 'load', function (e) {
    sendMessage({
        msg_id: '123formBuilderAnalitycs',
        msg:'google_analitics',
        google_universal_script:'1',
        google_analytics_user_id: 'UA-107263866-1'
    });
});
