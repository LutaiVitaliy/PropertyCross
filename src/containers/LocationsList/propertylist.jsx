import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import s from "../../components/App/styles.scss"
import selectProperty from "../../actions/index"

class Propertylist extends Component {
    createListItems(){
        console.log(this.props)
        // return this.props.property.map((i) => {
        //     return(
        //         <div key={i.latitude} className={s.list} onClick={() => this.props.selectProperty(i)}>
        //             <img src={i.img_url} width={i.thumb_width} height={i.thumb_height}/>
        //             <ul className={s.listContainer}>
        //                 <li>{i.title}</li>
        //                 <li>Price: {i.price_formatted}</li>
        //             </ul>
        //         </div>
        //     )
        // })
    }

    render() {
        return(
            <div >
                {this.createListItems()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        property: state.propertyList
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Propertylist);