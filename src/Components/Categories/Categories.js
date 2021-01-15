import React, { Component } from 'react';
import Category from '../Category/Category';
import MenuDivs from '../MenuDivs'
import './Categories.css';
import axios from 'axios'
// import theList from './testdata.js'
import theList  from './data.js'


export default class Categories extends Component {
    constructor() {
        super();

        this.state = {
            menu:[],
            menuObj:{
                cake:['cake'],
                cookies:['cookies'],
                bread:['bread'],
                pastries:['pastries']
            },
            toggle:true,
            theList:theList
        }
        this.toggleOpen = this.toggleOpen.bind(this)
    }

    componentDidMount(){
        // componentDidUpdate(){
        // if (prevProps !== this.props) {
        //     this.setState({ menu : {} })
        // }
        axios.get('/api/products/all').then(res => {

            this.setState({ menu: res.data})
            // console.log('catttts',this.state.menu[0].category)

            

        })

    }

    toggleOpen(){
        this.setState({ toggle: !this.state.toggle})
        console.log(this.state.toggle)
    }

    render() {
        const { menu, theList } = this.state
        const mappedMenu = menu.map(element => {
            return <Category menu={element} key={element.product_id} toggleOpenFn={this.toggleOpen} toggleFn={this.state.toggle}/>
        })

        // console.log('mmmeeennnu',this.state.menu[1].ategory)

        const mappedlist = menu.map(element => {
            return <MenuDivs menu={element} key={element.product_id}
        />})

        // {console.log('this.is the maaaaap',mappedMenu)}
        // const mappedList = =theList.map(element => {
        //     return element
        // })


        // <Category 
        // console.log('checking this unit',menu[0])
            
        return( 
            <div className="main-page">
                <div className={`page ${this.state.toggle ? true : 'hide-page'}`}>
                    {mappedMenu}
                </div>
                <div className={`cat-list-hide ${this.state.toggle ? false : 'cat-list'}`}>
                    {mappedlist}
                </div>
                {/* <div className="cat-list"></div> */}
            </div>

        )
    }
}