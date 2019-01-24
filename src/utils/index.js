export default {
  clearData(data,isSerialize){
    if(data){
      if(isSerialize){
        var newData = {};
        for(var i=0,length=data.length;i<length;i++){
          if(trim(data[i].value) != '' && trim(data[i].value) != 'null'){
            newData[data[i].name] = $.trim(data[i].value);
          }
        }
        return newData;
      }else{
        for(var key in data){
          if(data[key] === '' || data[key] == 'null' || data[key] == null){
            delete data[key];
          }
        };
        return data;
      }
    }
  },
  removeAllHtml(html) {
    return html.replace(/<[^>]+>/g, '');
  },
  getLength(str) {
    //获得字符串实际长度，中文2，英文1
    //要获得长度的字符串
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode >= 0 && charCode <= 128)
        realLength += 1;
      else
        realLength += 2;
    }
    return realLength;
  }
}

export function trim(str)
{
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
