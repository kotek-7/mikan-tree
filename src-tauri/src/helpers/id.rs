use std::{cmp::Ordering, fmt};

use rand::Rng;

const ID_LENGTH: i32 = 8;

#[derive(Debug)]
pub struct Id {
    pub value: String,
}

impl fmt::Display for Id {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.value)
    }
}

impl PartialEq for Id {
    fn eq(&self, other: &Self) -> bool {
        self.value == other.value
    }
}

impl Eq for Id { }

impl PartialOrd for Id {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl Ord for Id {
    fn cmp(&self, other: &Self) -> Ordering {
        self.value.cmp(&other.value)
    }
}

impl Id {
    pub fn from_string(string: &str) -> Result<Id, ParceError> {
        if string.len() != ID_LENGTH as usize {
            return Err(ParceError(
                "The length of the string is not correct".to_string(),
            ));
        }
        if string.chars().all(|char| char.is_ascii_alphanumeric()) {
            return Err(ParceError(
                "The string contains non-alphanumeric charactors".to_string(),
            ));
        }
        Ok(Id {
            value: string.to_string(),
        })
    }

    pub fn new() -> Id {
        let mut rand = rand::prelude::thread_rng();
        const CHARSET: &[u8] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let mut random_id = String::new();

        for _i in 0..ID_LENGTH {
            let random_index = rand.gen_range(0..CHARSET.len());
            random_id.push(CHARSET[random_index] as char);
        }

        Id { value: random_id }
    }
}

#[derive(Debug, Clone)]
pub struct ParceError(String);

#[cfg(test)]
mod tests {
    #[test]
    fn gen_id() {
        println!("{:?}", super::Id::new());
    }
}
