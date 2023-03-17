# 学习

> 官方文档
> https://github.com/rust-lang/rust-by-example


## 执行单个文件

创建一个 main.rs 文件
在里面写入
```
fn main() {
  println!("hello world");
}
```

然后切换到Terminal 输入 
```
rustc main.rs
./main
```

就可以看到Hello World输出在Terminal中了



## 使用Cargo创建一个项目

这个操作类似 npm init -y

`cargo new first-demo`


就会创建一个文件夹名为 first-demo 
并且生成了src文件夹和一个叫做Cargo.toml 的文件
这个文件类似package.json
如果是已经创建好的项目 就是 `cargo init`

```shell
npm init -y
cargo init
go mod init ${anything}
```
## 项目的编译
在 `first-demo` 文件夹下运行 `cargo build`

就会生成target文件夹
然后进入里面的debug文件夹就可以看到一个和项目名称一样的可执行文件
执行这个文件就会输出默认的代码 也就是Hello World

## 项目的运行
运行 `cargo run` 就可以编译代码并且执行

## 项目的检查
`cargo check`
check命令比build要快
因为它不生成可执行文件
只是检查能不能编译

## 第一个练习

hooks test

## Rust中的数据结构


### 结构体
使用struct关键字创建三种类型的结构
- 元组
- 类似C的结构体
- 无字段的单元结构

```Rust
struct Pair(i32, i32);

struct Person {
    name: String,
    age: i32,
}

struct Unit; // 可以在泛型中使用

fn main() {
    let pair = Pair(1, 2);
    let zhang_san = Person {
        name: String::from("zhang san"),
        age: 18,
    };
    let unit = Unit;
    println!("{} = {}", pair.0, zhang_san.name);
  }
```


```shell
# 热更新
cargo watch -x run
```