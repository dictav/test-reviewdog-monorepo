package main

import (
	"os"
	"fmt"
)

func main() {
	var x int
	x += 1
	if x < -1 {
		println("not reach")
	}




	fmt.Fprintln(os.Stdout, "hello, world!", x)

	f, _ := os.Open("file")
	buf := []byte{}
	f.Read(buf)
}
