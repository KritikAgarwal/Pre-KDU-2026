package com.example.demo.service;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;
import java.math.BigDecimal;
import java.util.NoSuchElementException;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class BookServiceTest {

    private BookService bookService;

    @BeforeEach
    void setUp() {
        bookService = new BookService(new BookRepository());
    }

    @Test
    void shouldAddBookSuccessfully() {
        Book book = new Book(null,
                "Clean Code",
                "Robert Martin",
                new BigDecimal("35.99"),
                "ISBN123");

        Book savedBook = bookService.addBook(book);

        assertNotNull(savedBook.getId());
        assertEquals("Clean Code", savedBook.getTitle());
    }

    @Test
    void shouldThrowExceptionWhenTitleIsMissing() {
        Book book = new Book(null,
                "",
                "Author",
                new BigDecimal("20.00"),
                "ISBN456");

        assertThrows(IllegalArgumentException.class,
                () -> bookService.addBook(book));
    }

    @Test
    void shouldRetrieveBookByIdSuccessfully() {
        Book savedBook = bookService.addBook(
                new Book(null,
                        "Java Basics",
                        "James Gosling",
                        new BigDecimal("25.00"),
                        "ISBN789")
        );

        Book retrievedBook = bookService.getBookById(savedBook.getId());

        assertEquals(savedBook.getId(), retrievedBook.getId());
        assertEquals(savedBook.getTitle(), retrievedBook.getTitle());
    }

    @Test
    void shouldThrowExceptionWhenBookNotFound() {
        assertThrows(NoSuchElementException.class,
                () -> bookService.getBookById(999L));
    }
}
