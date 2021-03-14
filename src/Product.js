import React from "react";
import { gql, useQuery } from "@apollo/client";
import "./Product.css";
import Zoom from 'react-reveal/Zoom';


const apiUrl = "http://144.126.218.251";
const query = gql`
  query {
    products {
      id
      title
      description
      price
      photo {
        url
      }
    }
  }
`;
export default function Products() {
  const { loading, data } = useQuery(query);
  if (loading) return <h1 className="text-red">Please wait while loading</h1>;
  return (
    <div className="container">
      <div className="row">
        <div className="p-2 text-dark text-center">
          <p className="h1">Our Bars</p>
        </div>
        {data.products.map((items) => {
          return (
            <Zoom>
            <div key={items.id} className="col-md-4 col-12">
              <div className="card">
                <img
                  className="card-img-top"
                  src={`${apiUrl}${items.photo.url}`}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{items.title}</h5>
                  <p className="card-text">{items.description}</p>
                  <p className="card-text">$ {items.price} CAD</p>
                </div>
              </div>
            </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
}
