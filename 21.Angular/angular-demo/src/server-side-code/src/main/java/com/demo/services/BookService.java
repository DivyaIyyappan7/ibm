package com.demo.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entities.Book;
import com.demo.repositories.BookRepository;

@Service
public class BookService {
	
	@Autowired
	BookRepository bookRepository;

	public Book findBookById(int id) {
		
		Optional<Book> optional = bookRepository.findById(id);
		Book book = optional.orElse(null);
		
		System.out.println(book);
		
		return book;
	}

	public List<Book> findBooks(){
		Iterable<Book> iterable = bookRepository.findAll();
		Iterator<Book> iterator = iterable.iterator();
		List<Book> books = new ArrayList<Book>();

		while(iterator.hasNext()){
			books.add(iterator.next());
		}

		return books;
	}
	
	public int createBook(Book book) {
		
		// verify if book is valid
		
		book = bookRepository.save(book);
		return book.getId();
	}
	
	public boolean editBook(int id, Book book) {
		book.setId(id);
		bookRepository.save(book);
		return true;
	}
	
	public void deleteBook(int id) {
		// bookRepository.delete(findBookById(id));
		bookRepository.deleteById(id);
	}
}
