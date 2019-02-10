/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */

const fs = require("fs");

var path;
var nameObj = {};
var content = "";

function init(filePath) {
  path = filePath;
}

function createApiTarget(name) {
  if (!nameObj[name]) {
    nameObj[name] = { data: [] };
  }
}

function createApiChildren(apiName, obj) {
  nameObj[apiName].data.push(obj);
}

// 创建父头部
function createParentHeader(name) {
  return `function ${name} (target) {`;
}

// 创建父尾部
function createParentEnd() {
  return "}";
}

// 创建子
function createChildren({ name, description, url, method, isUrl, params }) {
  return `
      /**
      * ${description}
      */
      function ${name} (paramsData = {}) {
          return (info)=>{
              return {target,isUrl:${isUrl},method:'${method}',url:'${url}',params:paramsData,...info}
          }
      }
    `;
}

// 创建子元素导出
function createChildrenExport(keys) {
  return `
        return {${keys.toString()}}
    `;
}

// 创建底部默认导出
function createDefaultExport(keys) {
  return `
    export default {${keys.toString()}}
    `;
}

function build() {
  const objKeys = Object.keys(nameObj);
  objKeys.forEach(e => {
    const select = nameObj[e];
    let tempParent = createParentHeader(e);
    let tempChildren = "";
    let childrenName = [];
    select.data.forEach(ea => {
      childrenName.push(ea.name);
      tempChildren += createChildren(ea) + "\n";
    });
    tempChildren += createChildrenExport(childrenName);
    content += tempParent + tempChildren + createParentEnd() + "\n";
  });
  content += createDefaultExport(objKeys);
  fs.writeFileSync(path, content, "utf-8");
}

module.exports = {
  init,
  createApiTarget,
  createApiChildren,
  build
};
