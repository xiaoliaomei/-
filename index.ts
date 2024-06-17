window.onload =() =>{
  class Wujie extends  HTMLElement{
    constructor(){
      super();
      // shadow 样式隔离
      let dom = this.attachShadow({mode:'open'});
      let template = document.querySelector('#wujie') as HTMLTemplateElement;

      dom.appendChild(template.content.cloneNode(true));

      console.log(this.getAttr('url'),this.getAttr('age'))
    }
    private getAttr (attr:string){
      return this.getAttribute(attr)
    }
  }
  window.customElements.define('wu-jie',Wujie);//挂载完成
  
}