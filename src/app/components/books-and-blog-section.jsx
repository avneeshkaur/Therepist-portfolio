import { Button } from "./ui/button"

export default function BooksAndBlogSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Books Section */}
        <div className="mb-20">
          {/* Authored Works Badge */}
          <div className="flex justify-start mb-6">
            <span className="bg-[#FEF3C7] text-[#1E4145] px-3 py-1 rounded-lg text-[13px] shadow-md tracking-wide">
              Authored Works
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1E4145] mb-12">Serena's Books</h2>

          {/* Books Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Book Cards */}
            {[{
              title: "Baby Dolls & Ninja Swords: 6 True Tales of Play Therapy",
              image: "/image/books/baby-dolls.jpg",
              link: "https://www.amazon.com/Baby-Dolls-Ninja-Swords-Therapy/dp/B0BPGJPSCL",
              availability: "Available on Amazon",
              format: "Formats: Kindle & Paperback"
            }, {
              title: "Frozen Tears: 15 Stories of Blindness & Hope after Abortion",
              image: "/image/books/frozen-tear.jpg",
              link: "https://www.amazon.com/Frozen-Tears-Stories-Blindness-Abortion/dp/B0CNKPVJJS",
              availability: "Available on Amazon",
              format: "Formats: Kindle & Paperback"
            }, {
              title: "99 Devotionals: Heart Reactions and Soul Stretches from the Book of Acts",
              image: "/image/books/99.jpg",
              link: "https://www.amazon.com/99-Devotionals-Heart-Reactions-Stretches-ebook/dp/B07Z6LVHPN",
              availability: "Available on Amazon",
              format: "Format: Kindle format"
            }].map((book, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                <img src={book.image} alt={`${book.title} Cover`} className="aspect-[3/4] object-cover w-full" />
                <div className="flex flex-col justify-between flex-grow p-6">
                  <div>
                    <h3 className="font-bold text-teal-800 mb-3 text-lg leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{book.availability}</p>
                    <p className="text-gray-600 text-sm mb-4">{book.format}</p>
                  </div>
                  <a href={book.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#B5DBDF] text-teal-800 border-0 cursor-pointer hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] transition-all duration-300">
                      View on Amazon
                    </Button>
                  </a>
                </div>
              </div>
            ))}

            {/* Book 4: Passion with Principle - Coming Soon */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative flex flex-col h-full">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                  Coming Soon
                </span>
              </div>
              <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm text-center px-4">Cover Image Coming Soon</span>
              </div>
              <div className="flex flex-col justify-between flex-grow p-6">
                <div>
                  <h3 className="font-bold text-teal-800 mb-3 text-lg leading-tight">
                    Passion with Principle: How to Turn Romance into Lifelong Love
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">Coming Soon</p>
                  <p className="text-gray-400 text-sm mb-4">&nbsp;</p>
                </div>
                <Button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-600 border-0" disabled>
                  Details Coming Soon
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1E4145] mb-6">Latest Blogs</h2>
          <p className="text-[#000000] mb-12 max-w-2xl font-medium">
            Discover helpful insights and strategies from Serena Blake to improve your relationships and personal
            well-being.
          </p>

          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No posts available at the moment.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
