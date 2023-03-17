```rust
fn main() {
    let r: &i32;
    {
        let x = 5;
        r = &x; // borrowed value does not live long enough
    }
    println!("r: {}", r);
}

```