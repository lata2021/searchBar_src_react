import React from 'react'


const searchinput = (props) => {

    return <div className="input-group searchbtn ">
        <input type="text" className="form-control serch" placeholder="Search" name="search" onChange={props.searchval}></input>
        <div className="input-group-btn">
        <button className="btn btn-default btnserch" type="submit" onClick={props.searchbutton} ><i className="glyphicon glyphicon-search"></i></button>
      </div>
    </div> 
}

export default searchinput