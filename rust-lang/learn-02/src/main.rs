fn main () {
    let mut s = String::from("hello");

    let r1 = &s; // 没问题
    let r2 = &s; // 没问题
    println!("{} and {}", r1, r2);
    println!("{} and {}", r1, r2);
    println!("{} and {}", r1, r2);
    let r3 = &mut s;

}
