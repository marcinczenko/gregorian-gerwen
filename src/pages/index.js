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
          <li>
            <a
              href='/pdf/de-musica-sacra-et-sacra-liturgia.pdf'
              target='_blank'
            >
              De musica sacra et sacra liturgia
            </a>{' '}
            (preserved local copy from{' '}
            <a
              href='https://www.ccwatershed.org/2013/04/11/de-musica-sacra-et-sacra-liturgia-1958/'
              target='_blank'
              rel='noreferrer'
            >
              www.ccwatershed.org
            </a>
            )
          </li>
          <li>
            <a
              href='/pdf/de-musica-sacra-et-sacra-liturgia-2.pdf'
              target='_blank'
            >
              De musica sacra et sacra liturgia (alternative translation)
            </a>{' '}
            (preserved local copy from{' '}
            <a
              href='https://www.ccwatershed.org/2013/04/11/de-musica-sacra-et-sacra-liturgia-1958/'
              target='_blank'
              rel='noreferrer'
            >
              www.ccwatershed.org
            </a>
            )
          </li>
          <li>
            <a
              href='https://adoremus.org/1958/09/instruction-on-sacred-music/'
              target='_blank'
              rel='noreferrer'
            >
              De musica sacra et sacra liturgia
            </a>{' '}
            (web version from{' '}
            <a href='https://adoremus.org' target='_blank' rel='noreferrer'>
              adoremus.org
            </a>
            )
          </li>
          <li>
            <a
              href='/pdf/guidelines-for-liturgical-services.pdf'
              target='_blank'
            >
              Guidelines for Liturgical Services according to the 1962 Missale
              Romanum - Music for High Mass
            </a>{' '}
            (preserved local copy from{' '}
            <a
              href='https://media.musicasacra.com/pdf/highmass.pdf'
              target='_blank'
              rel='noreferrer'
            >
              media.musicasacra.com
            </a>
            )
          </li>
          <li>
            <a
              href='/pdf/guidelines-for-liturgical-services.pdf'
              target='_blank'
            >
              Guidelines for Liturgical Services according to the 1962 Missale
              Romanum - Music for Low Mass
            </a>{' '}
            (preserved local copy from{' '}
            <a
              href='https://media.musicasacra.com/pdf/lowmass.pdf'
              target='_blank'
              rel='noreferrer'
            >
              media.musicasacra.com
            </a>
            )
          </li>
          <li>
            <a
              href='https://www.ewtn.com/catholicism/library/music-of-the-mass-11089'
              target='_blank'
              rel='noreferrer'
            >
              Music of the Mass
            </a>{' '}
            from Catholic Encyclopedia
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
