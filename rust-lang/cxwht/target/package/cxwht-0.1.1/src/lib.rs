/// MOD CWHT IMPL
///
/// # Examples
///
/// ```
/// cxwht::get_url();
/// ```
pub mod cxwht {
    pub const MESSAGE: &str = "cxwht";
    pub const URL: &str = "https:cxwht.cn";

    pub fn get_url() {
        println!("{}", URL);
    }
}

/// Return A Function To Add
///
/// # Examples
///
/// ```
/// let add_fn = curry_add(1);
/// let sum = add_fn(2);
/// println!("{}", sum);
/// assert_eq!(3, res);
/// ```
pub fn curry_add(x: i32) {
    |y: i32| -> i32 {
        x + y
    }
}

/// A Fucntion To Add Two i32 type values
///
/// # Examples
/// ```
/// let res = add(1, 3);
/// assert_eq!(4, res);
/// ## Remind
/// This Function Only i32 type free
/// ```
pub fn add(x: i32, y: i32) -> i32 {
    x + y
}
