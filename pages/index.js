import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
//import Map from '../components/map'
import SiteList from '../components/sitelist'
import ProjectUsage from '../components/projectusage'
import LiveMetrics from '../components/livemetrics'

import dynamic from 'next/dynamic'

export default function Home() {
  const Map = dynamic(
    () => import('../components/map'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )
  return (
    <>
      <Head>
        <title>GP-ARGO</title>
        <link rel="icon" type="image/png" href="/GPN_favicon4.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DerekWeitzel" />
        <meta name="twitter:creator" content="@DerekWeitzel" />
        <meta name="twitter:title" content="The Great Plains Augmented Regional Gateway to the Open Science Grid
" />
        <meta name="twitter:description" content="GP-ARGO creates a regional distributed Open Science Grid (OSG) Gateway led by the Great Plains Network (GPN) to support computational and data-intensive research across the region through the development of specialized CI resources, workforce training, and cross-support methodologies and agreements." />
        <meta name="twitter:image" content="https://gp-argo.greatplains.net/twitter-card.png" />
      </Head>
      <NavBar></NavBar>


      <section className='top-section'>
        <div className="container">
          <div className='row'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-md-12'>
                  <h1>
                    The Great Plains Augmented Regional Gateway to the Open Science Grid
                  </h1>
                  <p>
                    GP-ARGO creates a regional distributed <a href="https://opensciencegrid.org">Open Science Grid</a> (OSG) Gateway
                    led by the <a href="https://www.greatplains.net/">Great Plains Network</a> (GPN) to support computational and data-intensive
                    research across the region through the development of specialized CI resources,
                    workforce training, and cross-support methodologies and agreements.
                  </p>
                </div>
              </div>

            </div>
            <div className='col-md-6'>
              <Map />

            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>

          <div className='row'>
            <div className='col-md-12 '>
              <h3 className='text-center'>
                Resources contributed to the <a href="https://opensciencegrid.org">Open Science Grid</a>
              </h3>
            </div>
            <LiveMetrics />

          </div>
        </div>
      </section>
      <section className='middle-section'>
        <div className="container">
          <div className='row'>
            <div className='col-md-4'>
              <SiteList />
            </div>
            <div className='col-md-4'>
              <ProjectUsage />
            </div>
            <div className='col-md-4'>
              <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src="https://gracc.opensciencegrid.org/d-solo/9u1-Q3vVz/cpu-payload-jobs?orgId=1&var-ReportableVOName=All&var-Project=All&var-Facility=All&var-ExitCode=All&var-Probe=All&var-interval=1d&var-Filters=OIM_Facility%7C%3D%7CGreat+Plains+Network&from=1673230100575&to=1675822100575&panelId=3" width="100%" height="400" frameBorder="1"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  )
}
