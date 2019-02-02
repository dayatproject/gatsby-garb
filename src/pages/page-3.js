import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`

const ThirdPage = () => (
  <Layout>
    <h1>Page 3</h1>
    <h3>Images File Data</h3>
    <StaticQuery
      query={getImageData}
      render={data => (
        <table>
          <thead>
            <tr>
              <th>Relative Path</th>
              <th>Size of Image</th>
              <th>Extension</th>
              <th>Birthtime of Image</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(edge => (
              <tr key={edge.node.relativePath}>
                <td>{edge.node.relativePath}</td>
                <td>{edge.node.size}</td>
                <td>{edge.node.extension}</td>
                <td>{edge.node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    />
    <Link to="/page-2">Go to page 2</Link>
  </Layout>
)

export default ThirdPage
