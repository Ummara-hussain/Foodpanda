import './App.css';
import FbImageLibrary from 'react-fb-image-grid'
import Facebook from './components/Facebook'
import FbButtons from './components/FbButton';


function App() {
  const images = ['https://hips.hearstapps.com/hmg-prod/images/dior-bag-1623678623.jpg',
    'https://m.media-amazon.com/images/I/51vcC5BWNlL.jpg',
    'https://flairworld.pk/cdn/shop/products/Black1.jpg?v=1675417081',
    'https://zara.pk/wp-content/uploads/2022/10/Air-Combo-Hand-Bag-3-600x574.jpeg?v=1666961762',
    'https://www.bagx.pk/cdn/shop/products/yellow_1024x1024.png?v=1655825660',
    'https://image.shutterstock.com/image-photo/stylish-womens-brown-handbag-trendy-260nw-2143560027.jpg']

  const currentDate = new Date()
  return (
    <div className="App">
      <header className="App-header">
        <Facebook
          profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96HAqHVeY1xDB2d52o9T547EcrcnGB9E09w&usqp=CAU'
          userName='Ummara Hussain'
          date={currentDate}
          description='Here are the some new bags...' />
        <div style={{ width: 400 }}>
          <FbImageLibrary images={images} />
        </div>
        <br />
        <FbButtons />
      </header>
    </div>
  );
}

export default App;
