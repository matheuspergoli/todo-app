(()=>{"use strict";(()=>{function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var e=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.input=document.querySelector('[type="text"]'),this.resultado=document.querySelector(".resultado"),this.btnAdd=document.querySelector('[data-btn="add"]'),this.addEvent=this.addEvent.bind(this)}var n,i;return n=e,(i=[{key:"deleteEvent",value:function(t){t.target.classList.contains("delete")&&t.target.parentElement.parentElement.remove()}},{key:"editEvent",value:function(t){if(t.target.classList.contains("edit")){var e=prompt("Digite aqui sua nova tarefa");t.target.parentElement.parentElement.querySelector("p").innerText=e}}},{key:"addEvent",value:function(){if(this.input.value){var t=document.createElement("div");t.classList.add("todo"),t.innerHTML="<p>".concat(this.input.value,'</p>\n                      <div>\n                        <button class="edit">Edit</button>\n                        <button class="delete">Delete</button>\n                      </div>'),this.resultado.appendChild(t),this.input.value="",this.input.focus()}else alert("Campo de tarefas vazio.")}},{key:"setEvent",value:function(t,e){t.addEventListener("click",e)}},{key:"init",value:function(){this.setEvent(this.btnAdd,this.addEvent),this.setEvent(document,this.editEvent),this.setEvent(document,this.deleteEvent)}}])&&t(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),e}();(new e).init(),(new e).init()})()})();