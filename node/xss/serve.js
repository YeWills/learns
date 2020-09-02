// /实现一个函数，可以将数组转化为树状数据结构 要求程序具有侦测错误输入的能力

function convert(list, parentKey, currentKey, rootValue) {
}
const list = [
  {
    "id": 19,
    "parentId": 0,
  },
  {
    "id": 18,
    "parentId": 16,
  },
  {
    "id": 17,
    "parentId": 16,
  },
  {
    "id": 16,
    "parentId": 0,
  }
];

const parentIdmap = list.reduce((acc,item)=>{
    const {id, parentId} = item;
    if(acc[parentId] || acc[parentId] === 0){
      acc[parentId] = [...acc[parentId], id]
    }else{
      acc[parentId] = [id]
    }
    return acc;
  },{})
  
  console.log(parentIdmap)

const tr = {
    id:0,
    children:[
        
    ]
}

const result = convert(list, 'parentId', 'id', 0);
const tree = {
  "id": 0,
  "children": [
    {
      "id": 19,
      "parentId": 0
    },
    {
      "id": 16,
      "parentId": 0,
      "children": [
        {
          "id": 18,
          "parentId": 16
        },
        {
          "id": 17,
          "parentId": 16
        }
      ]
    }
  ]
}
