package main

import "fmt"
import "github.com/gin-gonic/gin"
import "net/http"



func run_http() {
  http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
   fmt.Fprintf(w, "Hello World By Origin Http") 
  })
  err := http.ListenAndServe(":9091", nil)
  if err != nil {
    fmt.Println("have someting wrong.")
  }
  fmt.Println("Server Running at http://localhost:9091 ")
}

func run_gin() {
  r := gin.Default()
  r.GET("/", func(c *gin.Context) {
    c.String(200, "Hello World By Gin")
  })
  r.Run()
  fmt.Println("Server Running at http://localhost:8080")
}

func main() {
  // run_gin()
  // run_http()
}
