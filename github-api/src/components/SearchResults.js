import React, { Component } from 'react'
import Slice from './Slice'
export class SearchResults extends Component {
    state = {
        c: 5//counter for number on conntent in search result 
    };

    seeMore = () => {
        this.setState({ c: this.state.c + 5 })
    }
    render() {
        const { items } = this.props
        let searchItem = [...items.slice(0, this.state.c)]
        let list = searchItem.map((item, i) => (<Slice key={i} i={i} item={item} />));
        if (items[0]) {
            return (<>
                <div className="col-xl-9  mt-4  mx-auto">
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Number</th>
                                <th scope="col">name</th>
                                <th scope="col">repo state</th>
                                <th scope="col">check</th>
                                <th scope="col">private</th>
                                <th scope="col">language</th>
                                <th scope="col">url</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                    <button className="btn btn-link" style={{ visibility: this.state.c === 50 ? 'hidden' : 'visible' }} onClick={this.seeMore.bind(this.state.c)} >See more</button>
                </div>
            </>
            );
        }
        else { return (<></>); }
    }
}
export default SearchResults

