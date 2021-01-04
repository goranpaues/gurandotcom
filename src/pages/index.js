import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `database`, `oracle`, `sql`, `postgresql`, `postgres`, `tips`]}
        />
        <img style={{ margin: 0 }} src="./GoranPaues.jpg" alt="Gatsby Scene" />
        <script language="JavaScript">
        (function(i,s,o,g,r,a,m){i['TDConversionObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script', 'https://svht.tradedoubler.com/tr_sdk.js', 'tdconv');
        </script>
        <h1>
          Göran Paues - Database Developer
        </h1>
        <p>
          Hi, welcome to my page! More information coming shortly.{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </p>
      </Layout>
    )
  }
}

export default IndexPage
