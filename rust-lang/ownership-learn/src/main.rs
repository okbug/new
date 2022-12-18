/// 不能使用nodemon来热更新
/// nodemon --exec cargo run --signal SIGTERM
/// https://crates.io/crates/cargo-watch 得用这个
/// cargo watch -x run


fn main() {
    let a: i32 = 1;
    log(a);
    println!("num in main is {}", a);

    // let b = String::from("okbug");
    // log_string(b);
    // println!("str in main is {}", b); value borrowed here after move

    let c = String::from("okbug");
    log_ref_string(&c);
    println!("str in main is {}", c);

    // let d: String = String::from("okbug");
    // log_and_change(&mut d); // cannot borrow `d` as mutable, as it is not declared as mutable
    
    let mut e: String = String::from("okbug");
    log_and_change(&mut e);
    println!("str in main is {}", e);
}

fn log(num: i32) {
    println!("num is {}", num);
}

// fn log_string(str: String) {
//     println!("str is {}", str);
// }

fn log_ref_string(str: &String) {
    println!("str is {}", str)
}

fn log_and_change(str: &mut String) {
    println!("str changed before is {}", str);
    str.push_str(" is handsome");
    println!("str changed after is {}", str);
}

