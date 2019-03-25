function underLine(anchor){
  var spans = document.getElementsByTagName('li');
   for(var i=0;i<spans.length;i++){
       spans[i].className = '';
   }   anchor.parentNode.className = 'active';
 }