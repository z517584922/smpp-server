const fs = require('fs');

// 读取文件内容
fs.readFile('./新建文本文档.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('无法读取文件:', err);
    return;
  }

  // 为每个电话号码添加852前缀
  const updatedData = data
    .split('\n')
    .map((line) => `852${line}`)
    .join('\n');

  // 写入更新后的内容到文件
  fs.writeFile('新建文本文档.txt', updatedData, 'utf8', (err) => {
    if (err) {
      console.error('无法写入文件:', err);
    } else {
      console.log('文件更新成功，已为每个电话号码添加852前缀。');
    }
  });
});
