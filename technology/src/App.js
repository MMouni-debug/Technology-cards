import './App.css'
import CardItem from './components'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://www.careerguide.com/career/wp-content/uploads/2021/06/Data-Scientistsjpg.jpg',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://tse2.mm.bing.net/th?id=OIP.sAW3ol_dRduMYl1fSOsohQHaEr&pid=Api&P=0&h=180',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://tse3.mm.bing.net/th?id=OIP.2c7XWLD1t63GBwsUAiHI6gHaD4&pid=Api&P=0&h=180',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://tse1.mm.bing.net/th?id=OIP.WxiW64lO5n_vBhLemuZO4gHaD4&pid=Api&P=0&h=180',
    className: 'card-4',
  },
]

const App = () => (
  <div className="list-container">
    <div className="main-container">
      <h1 className="head">Learn 4.0 Technologies</h1>
      <p className="paragraph">
        Get trained by alumni IITs and top companies like Amazon, Microsoft,
        Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved
        in Product development.
      </p>
      <ul className="technology-list">
        {cardsList.map(each => (
          <CardItem cardsList={each} key={each.id} />
        ))}
      </ul>
    </div>
  </div>
)

export default App