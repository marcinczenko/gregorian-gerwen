import { Today } from '../components/mdx'

const Index = () => {
  return (
    <div>
      <h1 className='font-sans text-5xl font-extralight'>Gregorian Gerwen</h1>
      <Today />
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
