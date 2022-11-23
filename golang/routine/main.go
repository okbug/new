package main

import "fmt"

func task(from string) {
  for i := 0; i <= 10; i++ {
    fmt.Println(from, " => ",i)
  }
}
func main() {
  go task("routine")
  task("main")
}
