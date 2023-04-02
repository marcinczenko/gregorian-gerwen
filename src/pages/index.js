import { Today } from '../components/mdx'

const Index = () => {
  return (
    <div>
      <h1 className='font-sans text-5xl font-extralight'>Gregorian Gerwen</h1>
      <Today />
      <div>
        <p>Quick Links:</p>
        <ul>
          <li>
            <a href='/latin-pronunciation' target='_blank'>
              The Correct Pronunciation of Latin
            </a>
          </li>
          <li>
            <a href='/pdf/liber-usualis.pdf' target='_blank'>
              Liber Usualis
            </a>{' '}
            (notice that this is a large download: <code>120.8 MB</code>)
          </li>
          <li>
            <a href='/use-of-musical-instruments' target='_blank'>
              Use of musical instruments
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export const Head = () => (
  <>
    <title>Gregorian Gerwen</title>
    <meta
      name='description'
      content='Gregorian Gerwen - Information site for the Gregorian chant in the old St. Clemens church in Gerwen, the Netherlands'
    />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0'
    />
  </>
)

export default Index
