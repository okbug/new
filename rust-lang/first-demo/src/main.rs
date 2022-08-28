// use std::io;
// use std::cmp::Ordering;
use rand::Rng;
// is same to next line
use std::{cmp::Ordering, io};



struct Person {
    name: String,
    age: i32,
}

struct Pair(i32, i32);


// useless function
#[allow(dead_code)]
fn guess_game() {
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

fn fib(n: i32) -> i32 {
    match n {
        2 => {
            2
        }
        1 => {
            1
        }
        _ => {
            fib(n - 1) + fib(n - 2)
        }
    }
}

#[allow(dead_code)]
fn get_fib() {
    println!("please input n");
    let mut str = String::new();
    io::stdin().read_line(&mut str)
        .expect("please input a i32 ");
    let str: i32 = str.trim().parse().expect("to string error");
    let res = fib(str);
    println!("fib {str}'s answer is {res}");
}

#[allow(dead_code)]
fn use_array() {
    let a = 1;
    let my_array: [i32; 1] = [2];
    println!("hello, {a}"); // array 不可以用这种方法打印
    println!("my_array[0] is {}", my_array[0]);
    let fill_array: [i32; 10] = [0; 2 * 5]; // 类似 let fillArray = new Array(10).fill(0);
    println!("fill_array[0] is {}", fill_array[0]);
    let mut new_array: [i32; 3] = [0; 3]; // 可修改的数组
    new_array[1] = 100;
    println!("new_array[1] is {}", new_array[1]);
}

#[allow(dead_code)]
fn use_slice() {
    // slice 是引用 和JS中数组的slice不一样
    let mut arr: [i32; 5] = [1, 2, 3, 4, 5];
    #[allow(unused_mut)]
    let mut slice = &mut arr[0..3]; // [1, 2, 3] [0, 3) 和Python一样的
    println!("slice[0] is {}, slice.length is {}", slice[0], slice.len());
    slice[1] = 100;
    println!("arr[1] is {}, slice[1] is", arr[1]);
}

#[allow(dead_code)]
fn use_struct() {
   let zhang_san = Person {
       name: String::from("张三"),
       age: 18,
   };
   let pair = Pair(100, 200);
   println!("{}", zhang_san.age);

   println!("name is {}, pair.0 is {}", zhang_san.name, pair.0);
}

#[allow(dead_code)]
fn use_iterate() {
    let mut arr = [1, 2, 3];

    for i in arr.iter_mut() {
        *i *= 2; // 找到内存地址 然后改变值
    }

    for i in arr.iter() {
        println!("{}", i);
    }
}

fn main() {
    // 猜数字游戏
    // guess_game();
    // get_fib();
    // 数组
    // use_array();
    // 切片
    // use_slice();
    // 结构体
    // use_struct();
    // 迭代器
    // use_iterate();
}
