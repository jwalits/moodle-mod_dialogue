YUI.add("moodle-mod_dialogue-userpreference",function(e,t){M.mod_dialogue=M.mod_dialogue||{},M.mod_dialogue.userpreference={name:null,init:function(t){e.one("#"+t).on("click",this.set_user_preference,this,t)},set_user_preference:function(t,n){value=0,e.one("#"+n).get("checked")&&(value=1),M.util.set_user_preference(n,value)}}},"@VERSION@",{requires:["base","node","json-parse","userpreference","userpreference-filters","userpreference-highlighters","event","event-key"]});
