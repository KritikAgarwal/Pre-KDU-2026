package com.example.demo.controller;

import com.example.demo.model.Book;
import com.example.demo.service.BookService;
import java.util.NoSuchElementException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookService service;

    public BookController(BookService service) {
        this.service = service;
    }

    // POST /api/books
    @PostMapping
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book savedBook = service.addBook(book);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedBook);
    }

    // GET /api/books/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        try {
            Book book = service.getBookById(id);
            return ResponseEntity.ok(book);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
