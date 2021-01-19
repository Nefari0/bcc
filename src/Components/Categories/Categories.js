import React, { Component } from 'react';
import Category from '../Category/Category';
import MenuDivs from '../MenuDivs'
import './Categories.css';
import axios from 'axios'
import { connect } from 'react-redux'
import { requestProducts } from './../../ducks/productsReducer'
// import theList from './testdata.js'
import theList  from './data.js'


// export default class Categories extends Component {
class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu:[],
            menuObj:{},
            toggle:true,
            theList:theList
        }
        this.toggleOpen = this.toggleOpen.bind(this)
    }

    // componentDidUpdate(){
    // if (prevProps !== this.props) {
    //     this.setState({ menu : {} })
    // }
    componentDidMount(){
        axios.get('/api/products/all').then(res => {

            this.setState({ menu: res.data})
        })
    }

    // componentDidMount(){
    //     this.props.requestProducts()
    // }

    toggleOpen(){
        this.setState({ toggle: !this.state.toggle})
        console.log(this.state.toggle)
    }

    render() {
        const { menu, theList } = this.state
        const mappedMenu = menu.map(element => {
            return <Category menu={element} key={element.product_id} toggleOpenFn={this.toggleOpen} toggleFn={this.state.toggle}/>
        })

        
        const mappedlist = menu.map(element => {
            return <MenuDivs menu={element} key={element.product_id}
            />})
            
        return( 
            <div className="main-page">
                {console.log(this.props.products)}
                <div className={`page ${this.state.toggle ? true : 'hide-page'}`}>
                    {mappedMenu}
                </div>

                {/* <div className={`page ${this.state.toggle ? true : 'hide-page'}`}>
                    {this.props.products}
                </div> */}

                <div className={`cat-list-hide ${this.state.toggle ? false : 'cat-list'}`}>
                    {mappedlist}
                </div>
                {/* <div className="cat-list"></div> */}
            </div>

        )
    }
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, {requestProducts})(Categories)