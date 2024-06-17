"use strict";
window.onload = () => {
    class Wujie extends HTMLElement {
        constructor() {
            super();
            // shadow 样式隔离
            let dom = this.attachShadow({ mode: 'open' });
            let template = document.querySelector('#wujie');
            dom.appendChild(template.content.cloneNode(true));
            console.log(this.getAttr('url'), this.getAttr('age'));
        }
        getAttr(attr) {
            return this.getAttribute(attr);
        }
    }
    window.customElements.define('wu-jie', Wujie); //挂载完成
};
