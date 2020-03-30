import React, { Component } from 'react'
import Searchinput from "../Search/SearchInput/SearchInput"
import List from "../Search/List/List"
import Database from "../../data/search-list.json"

class Search extends Component{

    state = {
        searchdata:null,
        showdata:[],
        datarecieved: true
    }
    searchvalhandler = (event) =>{
        this.setState({searchdata: event.target.value})
    }
    searchbuttonhandler = () =>{
        if(this.state.searchdata){
            const filterdata = Database.filter(item => {
                return item.name.toLowerCase().includes(this.state.searchdata.toLowerCase());
            })
        if(filterdata.length !== 0)
            this.setState({showdata: filterdata,datarecieved: true})
        else
            this.setState({datarecieved: false})
        }
        else
            this.setState({datarecieved: false})
    }

    render(){
        let list = "Sorry No Matches found"
        if(this.state.datarecieved){
            list = <List showdata={this.state.showdata}></List>
        }
        return <div>
           <div className="" >
               <Searchinput searchval={this.searchvalhandler} searchbutton={this.searchbuttonhandler}></Searchinput>
            {list}
         </div>
        </div>
    }

}

export default Search