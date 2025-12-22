package com.example.demo.repository;

import com.example.demo.model.Book;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class BookRepository {

    private final Map<Long, Book> bookStore = new HashMap<>();
    private final AtomicLong idGenerator = new AtomicLong();

    public Book save(Book book) {
        Long id = idGenerator.incrementAndGet();
        book.setId(id);
        bookStore.put(id, book);
        return book;
    }

    public Optional<Book> findById(Long id) {
        return Optional.ofNullable(bookStore.get(id));
    }
}
