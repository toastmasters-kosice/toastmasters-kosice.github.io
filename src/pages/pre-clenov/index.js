import React from 'react'

import Layout from '../../components/Layout'
import AnnouncementRoll from '../../components/AnnouncementRoll'

export default class AnnouncementIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/announcement-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #074367, -0.5rem 0 0 #074367',
              backgroundColor: '#074367',
              color: 'white',
              padding: '1rem',
            }}
          >
            Oznamy pre členov
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <AnnouncementRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
