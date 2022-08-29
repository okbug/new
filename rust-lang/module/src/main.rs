mod router;
mod request;
use cxwht::cxwht as okbug;

mod first {
    const PRIVATE_MESSAGE: &str = "PRIVATE_MESSAGE";
    pub const PUBLIC_MESSAGE: &str = "Hello Wprld";
    pub const A_MESSAGE: &str = "hhh";

    pub mod second {
        const SECONE_MESSAGE: &str = "SECOND";
        pub fn get_second() {
            println!("{}", SECONE_MESSAGE);
        }

    }

    pub mod third {
        pub const THIRD_MESSAGE: &str = "THIRD_MESSAGE";
        pub fn get_message() {
            println!("{}", super::A_MESSAGE);
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
    first::get_secone_message();
    router::router();
    request::core::axios();
    okbug::get_url();
}

