fn main() {
    let avg = my_func(8, 4);
    println!("Hello, world! The average of 8 and 4 is: {avg}");
}

fn my_func (x: i32, y: i32) -> i32 {
    (x + y) / 2
}

#[cfg(test)]
mod test {
    use crate::{*};

    #[test]
    fn test_my_func_int_div() {
        assert_eq!(my_func(4, 2), 3);
    }

    #[test]
    fn test_my_func_zeroes() {
        assert_eq!(my_func(0, 0), 0);
    }
}
