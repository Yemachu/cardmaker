(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(["react", "react-dom", "create-react-class"], factory);
    } else {
        factory(React, ReactDOM, createReactClass);
    }
}(this, function (React, ReactDOM, ReactClass) {