# String的构造函数
```rust
pub struct String {
  vec: Vec<u8>,
}
```
从上面的文字可以看出
String中包裹了一层Vec<u8>的
String中持有一段字节数组，并且保存了数组的长度。
String在构析的时候持有该Vec的所有权。
## Rust中String的特点
- 包装了一个Vec<u8>, 内部使用它来管理内存
- 内部编码使用UTF-8
- 可修改内部的Vec<u8>

# String的使用

```rust
let str1 = String::new();
let str2 = String::from("hello");
let str3 = "abc".to_string();
let str4: &str = "abc"; // 这个是str 上面的都是String

```

## String迭代的方法

bytes系列方法有：as_bytes、bytes、into_bytes
这三个方法各自特点如下：

as_bytes：借用内部Vec<u8>，返回&[u8]
bytes：借用内部Vec<u8>，返回Bytes（按字节迭代的迭代器）
into_bytes：消耗String产生一个Vec<u8, Global>


# 参考链接

- [Rust中如何使用String](https://zhuanlan.zhihu.com/p/481041461)
