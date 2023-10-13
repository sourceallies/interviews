package main

import "fmt"

func SayHello(name string) string {
	return fmt.Sprintf("Hello %s", name)
}


func main() {
	fmt.Println(SayHello("world!"))
}
