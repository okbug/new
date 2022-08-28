Rust中的Module

简单示例

```rust
mod first {
    const PRIVATE_MESSAGE: &str = "PRIVATE_MESSAGE";
    pub const PUBLIC_MESSAGE: &str = "Hello Wprld";
    pub const a_message: &str = "hhh";

    pub mod second {
        const SECONE_MESSAGE: &str = "SECOND";
        pub fn get_second() {
            println!("{}", SECONE_MESSAGE);
        }

    }

    pub mod third {
        pub const THIRD_MESSAGE: &str = "THIRD_MESSAGE";
        pub fn get_message() {
            println!("{}", super::a_message);
        }
    }
    pub fn get_secone_message() {
        second::get_second();
    }
}

fn main() {
    println!("{}", first::PUBLIC_MESSAGE);
    println!("{}", first::third::THIRD_MESSAGE);
    first::third::get_message();
    first::get_secone_message(); // second中公有方法获取的私有变量也是可以拿到的
}
```

## 导入模块


其中use std::fs; 就是类似 import fs from 'std::fs';
而且可以 `use std::fs as ff`;
不过use更像是从库里面导入
在相同目录下导入的话需要用到mod关键字
在main.rs旁边新建一个 xx.ts
然后在里面写入 pub 的一些东西
在main里面
mod xx;
fn main() {
  xx::some_fn();
}

### 文件夹做为mod
上面讲的是单个文件作为mod
如果要使用一个文件夹作为mod的话 那么那个文件夹中需要有一个主入口
主入口不是main 不是index 而是 **mod.rs**
主入口中可能有多个子文件，其实和其他语言一样的，要在mod.rs中导入这些模块，并且设置为pub
就可以在外面接着调用到子文件东西。

