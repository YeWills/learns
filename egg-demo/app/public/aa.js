function tt() {
  console.log(112);
  const alink = document.createElement('a');

  alink.download = 'teamplte';// 文件名,大部分浏览器兼容,IE10及以下不兼容

  alink.href = 'public/cc.txt';// 创建 url地址

  alink.click(); // 自动点击

}
