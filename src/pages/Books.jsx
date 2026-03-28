import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, BookOpen } from 'lucide-react'

const Books = () => {
  const books = [
    { title: 'Leveraging the Potential of Artificial Intelligence in the Real World', subtitle: 'Smart Cities and Healthcare', publisher: 'Routledge (Taylor & Francis)', year: '2024', link: 'https://www.routledge.com/Leveraging-the-Potential-of-Artificial-Intelligence-in-the-Real-World-Smart-Cities-and-Healthcare/Tran-Onyema-Abougreen/p/book/9781032667485', image: './book2.jpg', editors: 'Tran, T.A., Onyema, E.M., & Abougreen, A.N. (Eds.)', isbn: '9781032667485' },
    { title: 'Hybrid Intelligence', subtitle: 'Theories and Applications', publisher: 'Springer', year: '2025', link: 'https://link.springer.com/book/9789819677528', image: './book6.jpeg', editors: '', isbn: '9789819677528' },
    { title: 'Defending the Metaverse', subtitle: 'Cybersecurity Strategies for the Next Generation Internet', publisher: 'Routledge (Taylor & Francis)', year: '2025', link: 'https://www.routledge.com/Defending-the-Metaverse-Cybersecurity-Strategies-for-the-Next-Generation-Internet/Sheth-Ouaissa-Ouaissa-Onyema-Parekha/p/book/9781032946832', image: './book1.jpeg', editors: 'Sheth, R., Ouaissa, M., Ouaissa, M., Onyema, E.M., & Parekha, C. (Eds.)', isbn: '9781032946832' },
    { title: 'Transformative Role of Transformer Models in Healthcare', subtitle: '', publisher: 'IGI Global', year: '2025', link: 'https://www.igi-global.com/book/transformative-role-transformer-models-healthcare/367328', image: './book7.jpeg', editors: 'Sbai, A., Khan, M., Dutta, P., Davim, J., & Onyema, EM. (Eds.)', isbn: '' },
    { title: 'Artificial Intelligence and Cognitive Sciences for Emerging Technologies', subtitle: 'Volume 1', publisher: 'Springer', year: '2022', link: 'https://link.springer.com/book/9783032114105', image: './book9.PNG', editors: '', isbn: '9783032114105' },
    { title: 'Artificial Intelligence and Cognitive Sciences for Emerging Technologies', subtitle: 'Volume 2', publisher: 'Springer', year: '2023', link: 'https://link.springer.com/book/9783032144294', image: './book9.PNG', editors: '', isbn: '9783032144294' },
    { title: 'Introduction to Compiler Construction', subtitle: '2nd Edition', publisher: 'Cropsworld Concepts', year: '2025', image: './book3.jpg', editors: 'Udeh, CC; and Edeh, MO. (Eds.)', isbn: '' },
    { title: 'Computer Installation Management', subtitle: '', publisher: 'Cropsworld Concepts', year: '2025', image: './book4.jpg', editors: 'Udeh, CC; Ngene, N; and Edeh, MO. (Eds.)', isbn: '' },
    { title: 'Discrete Structures', subtitle: 'Foundations and Applications for Computer Science', publisher: 'Cropsworld Concepts', year: '2024', image: './book5.jpg', editors: 'Ngene, N; Udeh, CC; and Edeh, MO. (Eds.)', isbn: '' },
    { title: 'Introduction to Computer Architecture and Embedded Design with Arduino', subtitle: '', publisher: 'Cropsworld Concepts', year: '2025', image: './book8.jpg', editors: 'Udeh, CC; and Onyema EM', isbn: '9789877745632' },
    { title: 'Introductions To Digital Systems Designs', subtitle: '', publisher: 'Cropsworld Concepts', year: '2025', image: './book10.jpeg', editors: '', isbn: '' },
  ]

  return (
    <div className="pt-20">
      <section className="relative py-20  text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-amber-500" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-amber-500">Book Publications</h1>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">Authored and edited books indexed in Scopus and Web of Science</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }}>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="block group h-full">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                    <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.src = '/book2.jpg' }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white font-medium flex items-center">View Book <ExternalLink className="ml-2 w-4 h-4" /></span>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-amber-600 font-semibold uppercase tracking-wider">{book.publisher}</span>
                        <span className="text-xs text-gray-400">{book.year}</span>
                      </div>
                      <h3 className="text-gray-900 font-semibold text-base mb-1 line-clamp-2 flex-1">{book.title}</h3>
                      {book.subtitle && <p className="text-gray-600 text-sm mb-2 line-clamp-1">{book.subtitle}</p>}
                      {book.editors && <p className="text-gray-500 text-xs line-clamp-2 mt-auto">{book.editors}</p>}
                      {book.isbn && <p className="text-gray-400 text-xs mt-2">ISBN: {book.isbn}</p>}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Books
