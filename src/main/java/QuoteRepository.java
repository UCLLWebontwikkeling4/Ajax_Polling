import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class QuoteRepository {

	private List<Quote> quotes = new ArrayList<Quote>();

	public QuoteRepository() {
		super();
		Quote obama = new Quote("Obama", "Yes we can!", 2009);
		quotes.add(obama);
		Quote king = new Quote("Martin Luther King", "I Have a Dream", 1950);
		quotes.add(king);
		Quote x = new Quote("XXX", "Great is the art of beginning, but greater is the art of ending.", 1945);
		quotes.add(x);
	}

	public void addQuote (String quote) {
		quotes.add(new Quote("Elke Steegmans", quote, 2020));
	}

	public Quote getRandomQuote() {
		Random random = new Random();
		int position = random.nextInt(quotes.size());
		Quote quote = quotes.get(position);
		return quote;
	}

}
