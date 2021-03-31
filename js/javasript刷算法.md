# 2 非引用类型

## 2.1 字符串

## API

### str.split()

> 经常需要在dfs中利用str的不可变性使**用`" "`来拼接数组，最后需要再`split(" ")`来分割**
>
> 但split有些意外情况

```javascript
"1 2 ".split(" "); // ["1", "2", ""]
```

> **不要用`""`来拼接数组和`split("")`来分割**

```javascript
// 其原本数组为[1, -1, 100]
"1-1100".split(""); // ["1", "-", "1", "1", "0", "0"]
```

## 查

```javascript
'hello world'.indexOf('hello') // 返回 0
'hello world'.indexOf('hello') // 返回 -1
```



## 2.2 数字

### 最大值和最小值

```javascript
// 最大值
Number.max_value; 

// 最小值(注意不能使用min_value，因为这是最接近0的正数)
-Number.max_value
```



### 保留小数

```javascript
(1).toFixed(2); // 1.00
```

# 3 数组

## 3.1 一维数组初始化

```javascript
let arr = new Array(100).fill(0); // 构造长度为100的数组，填充为0
```

> 不要用Array.fill(引用类型)

```javascript
let obj = {a:1};
let arr = new Array(3).fill(obj);
arr[0].a = 2;
console.log(arr); // [{a: 2}, {a: 2}, {a: 2}]
```

## 3.2 二维数组初始化

> 最佳实践就是使用`for循环`

```javascript
let vis = [];
for (let i = 0; i < n; i++) vis.push([]);
```

## 3.3 使用...运算符浅拷贝数组【dfs常用】

```javascript
let arr = [1, "3", 4];
let newarr = [...arr];
```

## API

```javascript
// filter，过滤数组
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg]);

// map()方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
}[, thisArg]);
const map1 = array1.map(x => x * 2);

// reverse，原地翻转数组
a.reverse();

// sort：
// 1. 根据回调return值是 大于0 、 小于0 来判断
// 2. a是后一个元素，b是前一个元素
numbers.sort((a, b) => a - b);
// 错误写法：
numbers.sort((a, b) => a < b); // 没用
```

### 增

> **`arr.unshift()/arr.push()`**：开头增加/结尾增加

**在指定位置插入**

> 通过splice实现在`指定位置`插入元素
>
> **`splice(position, numberOfItemsToRemove, item)`**：**原地**修改数组

```javascript
// 原来的数组
let array = ["one", "two", "four"];
// splice(position, numberOfItemsToRemove, item)
// 粘接(索引位置, 要删除元素的数量, 要添加元素)
array.splice(2, 0, "three");

array;  // 现在数组是这个样子 ["one", "two", "three", "four"]
```

### 删

> **`arr.slice([begin[, end]])`**：返回一个新数组
>
> **`splice(position, numberOfItemsToRemove, item)`**：**原地**修改数组
>
> **`arr.shift()/arr.pop()`**：删开头/删结尾

```javascript

```



### 查

```javascript
const arr = [5, 12, 8, 130, 44];
// arr.findIndex - 返回第一个符合条件的元素的下标，找不到则返-1
arr.findIndex(e => e > 5);
```



## 改



# 6 字典和散列表

## 6.2 散列表 - Map类

```javascript
let myMap = new Map();

// 添加或修改
myMap.set(1, 'first');
myMap.set(2, 'second');
myMap.set(2, '二');

// 删除
myMap.delete(1);

// 查询
myMap.has(1); // false
myMap.has(2); // true

myMap.get(1); // undefined
myMap.get(2); // '二'

// 清空
myMap.clear();
```

### 6.2.2 使用map计数

> 由于Map中不存在的元素默认值为undefined，因此把未存在的元素的值转为0

```javascript
let m = new Map();

// 查询是否有该元素：m.get(key) === undeifined/0
if (!m.get(key)) {
  // 无key
}

// ++
if (!m.get(key)) m.set(key, 0);
m.set(key, m.get(key) + 1);

// --
if (!m.get(key)) m.set(key, 0);
m.set(key, m.get(key) - 1);
```





# 11 heap

实现如下操作

1. 插入一个数
2. 求集合中的最值
3. 删除最值
4. 删除任意一个元素
5. 修改任意一个元素

## 11.1 堆的存储

使用一维数组`a[]`来存，注意`a[0]`被废置

`k结点`的父节点位置——`k/2`（cpp会自动向下取整）

`k结点`的左孩子节点位置——`2k`

`k结点`的右孩子节点位置——`2k+1`

