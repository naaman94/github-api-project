import React, { Component } from 'react'

export class Slice extends Component {
    render() {
        const { item, i } = this.props
        return (
            <>
                <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.private ? "privet" : "public"}</td>
                    <td><input type="checkbox" name="check" defaultChecked={item.private} /> </td>
                    <td>{item.private ? "YES" : "NO"}</td>
                    <td>{item.language}</td>
                    <td><a href={item.html_url} target="_blank">{item.html_url}</a></td>
                </tr>
            </>
        )
    }
}


export default Slice

