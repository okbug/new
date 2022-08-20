// use std::io;
use std::{io, cmp::Ordering};
use rand::Rng;
// use std::cmp::Ordering;

fn main() {
    println!("Welcome");
    println!("Please input at your terminal");
    let rand_num = rand::thread_rng().gen_range(1..=100);
    println!("the rand_num is {rand_num}.");
    let mut guess = String::new();

    io::stdin().read_line(&mut guess).expect("have some error");
    let guess: u32 = guess
        .trim()
        .parse()
        .expect("please input a u32 type string");
    println!("you input is {guess}");

    match guess.cmp(&rand_num) {
        Ordering::Less => println!("too small"),
        Ordering::Greater => println!("too big"),
        Ordering::Equal => println!("winner"),
    }
}
