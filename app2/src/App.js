import React, { Component } from 'react';


import './App.css';


import SearchBar from './SearchBar';



const dataMau = [
  {name: "name1", price: "price1"},
  {name: "name1", price: "price1"},
  {name: "name1", price: "price1"},
  {name: "name1", price: "price1"},
  {name: "name1", price: "price1"},
  {name: "name1", price: "price1"},
]

const Product = (props) =>

    <div className="item">
            <div className="name-1">   {props.name }  </div>
            <div className="price">  {props.price}   </div>
    </div>


// props | static
/*
var arr1 = [1, 2, 3];

var arr2 = arr1.map( e => e + 1 );
arr2 = [2, 3, 4];

*/



const ListProducts = (props) => <div className="list-products">
    {
        props.products.map((product, index) =>  
          <Product 
                  key={index} 
                  name={product.name} 
                  price={product.price} />
        )
    }
</div>


const ListProductOfCategory = (props) => 
    <div>
        <h4>{props.category}</h4>
        <ListProducts products={props.products}/>
    </div>


const API_URL = "http://localhost:8080/categories";

class App extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        value: 1,
        is_data_loaded_from_server: false,
        list_data_from_server: []
      };
  }

  componentDidMount() {

    fetch(API_URL)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        this.setState({
          is_data_loaded_from_server: true,
          list_data_from_server: json,

        })
    })
  }

  // override 
  // loop cycle
  // render 1
  // render 2
  // props
  // state

  // shouldComponentUpdate() {
  //     return false;

  // }

  render() {
    // is ListProductOfCategory da duoc render chua ?

    return (
      <div className="module-1">
          
          <SearchBar />


          <button onClick={()=> {
            this.setState({
              value: 2
            })
          }}>
          LOAD DU LIEU TU SERVER CHO TAO
          </button>

          {
            this.state.is_data_loaded_from_server &&
          
            <ListProductOfCategory 
              products={this.state.list_data_from_server} 
              category={"Sporting Gooods"}
              />
          }
          {
            !this.state.is_data_loaded_from_server &&

            <h2> DOI TY NHE </h2>
          } 
          
        
      </div>
    );
  }
}

export default App;
