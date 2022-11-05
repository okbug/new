结论：
Rust中的数组是拷贝 不是引用

```rust
fn main() {
    let mut arr = [3; 1];
    let mut arr_2 = arr; // 拷贝 不是引用
    arr[0] = 1;
    arr_2[0] = 7;
    println!("{:?}", arr_2);
    println!("{:?}", arr);
}
```
