package com.example.demo.service;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;
import java.util.NoSuchElementException;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    private final BookRepository repository;

    public BookService(BookRepository repository) {
        this.repository = repository;
    }

    public Book addBook(Book book) {
        if (book.getTitle() == null || book.getTitle().isBlank()) {
            throw new IllegalArgumentException("Book title is required");
        }
        if (book.getPrice() != null && book.getPrice().signum() < 0) {
            throw new IllegalArgumentException("Price cannot be negative");
        }
        return repository.save(book);
    }

    public Book getBookById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Book not found"));
    }
}
