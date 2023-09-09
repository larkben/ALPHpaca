use bevy::prelude::*; // used in almost all apps

// Entities - a simple type containing a unique integer
struct Entity(u64);

fn main() {
    App::new()
        .add_systems(Update, hello_world)
        .run();
}

// My first System 
fn hello_world() {
    println!("hello world!");
}

