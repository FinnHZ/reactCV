import React, { Component, Fragment } from 'react'
import collectionCSS from './index.module.css'

export default class CollectionPage extends Component {

  state = {collectionsDetail: []}

  componentDidMount() {
    const knowledges = [["1", "knowledge brief description", "type", "knowledge location"], ["2", "content1", "content2", "content3"],
    ["q1", "knowledge brief description", "type", "knowledge location"], ["q2", "content1", "content2", "content3"],
    ["w1", "knowledge brief description", "type", "knowledge location"], ["w2", "content1", "content2", "content3"],
    ["e1", "knowledge brief description", "type", "knowledge location"], ["e2", "content1", "content2", "content3"],
    ["r1", "knowledge brief description", "type", "knowledge location"], ["r2", "content1", "content2", "content3"],
    ["t1", "knowledge brief description", "type", "knowledge location"], ["t2", "content1", "content2", "content3"],
    ["y1", "knowledge brief description", "type", "knowledge location"], ["y2", "content1", "content2", "content3"],
    ["u1", "knowledge brief description", "type", "knowledge location"], ["u2", "content1", "content2", "content3"],
    ["i1", "knowledge brief description", "type", "knowledge location"], ["i2", "content1", "content2", "content3"],
    ["o1", "knowledge brief description", "type", "knowledge location"], ["o2", "content1", "content2", "content3"],
    ["p1", "knowledge brief description", "type", "knowledge location"], ["p2", "content1", "content2", "content3"],
    ["a1", "knowledge brief description", "type", "knowledge location"], ["a2", "content1", "content2", "content3"],
    ["s1", "knowledge brief description", "type", "knowledge location"], ["s2", "content1", "content2", "content3"],
    ["d1", "knowledge brief description", "type", "knowledge location"], ["d2", "content1", "content2", "content3"],
    ["f1", "knowledge brief description", "type", "knowledge location"], ["f2", "content1", "content2", "content3"],
    ["g1", "knowledge brief description", "type", "knowledge location"], ["g2", "content1", "content2", "content3"],
    ["h1", "knowledge brief description", "type", "knowledge location"], ["h2", "content1", "content2", "content3"],
    ["j1", "knowledge brief description", "type", "knowledge location"], ["j2", "content1", "content2", "content3"],
    ["k1", "knowledge brief description", "type", "knowledge location"], ["k2", "content1", "content2", "content3"],
    ["l1", "knowledge brief description", "type", "knowledge location"], ["l2", "content1", "content2", "content3"],
    ["z1", "knowledge brief description", "type", "knowledge location"], ["z2", "content1", "content2", "content3"],
    ["x1", "knowledge brief description", "type", "knowledge location"], ["x2", "content1", "content2", "content3"],
    ["c1", "knowledge brief description", "type", "knowledge location"], ["c2", "content1", "content2", "content3"],
    ["v1", "knowledge brief description", "type", "knowledge location"], ["v2", "content1", "content2", "content3"],
    ["b1", "knowledge brief description", "type", "knowledge location"], ["b2", "content1", "content2", "content3"],
    ["n1", "knowledge brief description", "type", "knowledge location"], ["n2", "content1", "content2", "content3"],
    ["m1", "knowledge brief description", "type", "knowledge location"], ["m2", "content1", "content2", "content3"],
    ["*1", "knowledge brief description", "type", "knowledge location"], ["*2", "content1", "content2", "content3"]
  ]  // this should be from back-end
    this.setState({collectionsDetail: knowledges})
  }



  render() {
    const {collectionsDetail} = this.state

    return (
      <Fragment>
        <table className={collectionCSS.colTable}>
          <thead><tr className={collectionCSS.colTr}><th style={{width:"10%"}}>No.</th><th>Description</th><th>Type</th><th>Location</th></tr></thead>
          <tbody className={collectionCSS.colTBody}>
            {collectionsDetail.map((col) => {
              return (<tr key={col[0]} className={collectionCSS.colTr}><td style={{width:"10%"}}>{col[0]}</td><td>{col[1]}</td><td>{col[2]}</td><td>{col[3]}</td></tr>)
            })}
          </tbody>
        </table>
      </Fragment>
    )
  }
}
