import com.fasterxml.jackson.annotation.JsonIgnore;

public class Quote {
	
	private String author;
	private String text;
	@JsonIgnore
	private int year;
	
	public Quote(String author, String text, int year) {
		super();
		setAuthor(author);
		setText(text);
		setYear(year);
	}
	
	public String getAuthor() {
		return author;
	}
	
	public void setAuthor(String author) {
		this.author = author;
	}
	
	public String getText() {
		return text;
	}
	
	public void setText(String text) {
		this.text = text;
	}
	
	public int getYear() {
		return year;
	}
	
	public void setYear(int year) {
		this.year = year;
	}
	
}
