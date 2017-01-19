import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

class ProductsListContainer extends Component {

    componentWillMount() {
        this.props.getAllProducts();
    }

    renderProduct(product, index) {
        const price = (Math.random() * 100).toFixed(2);
        const image = product.images.fixed_height.url;
        const name = product.slug.split('-').slice(0, -1).map(w => w[0].toUpperCase() + w.slice(1, w.length)).join(" ");

        return (
            <div className="panel panel-primary" key={index}>
                <div className="panel-body">
                    <img src={image} alt={product.id}/>
                    <h4 className="card-title">{name || 'BUY ME! :)'}</h4>
                    <p className="card-text">$ {price}</p>
                    <a href={`https:stuffstore.foxycart.com/cart?name=${name}&price=${price}&image=${image}`} className="btn btn-primary">Add To Cart</a>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="product-list"> 
                {this.props.products.map(this.renderProduct)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { products: state.products.productsArray }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer);



