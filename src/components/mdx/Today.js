import { useEffect, useState, useRef } from 'react'
import { calendar } from '../../app-data/calendar-2023'

const Today = () => {
  const [title, setTitle] = useState('')
  const [nextEventTitle, setNextEventTitle] = useState('')
  const [nextEventLink, setNextEventLink] = useState('')
  const [link, setLink] = useState(undefined)
  const [currentDate, setCurrentDate] = useState(new Date())
  const interval = useRef(undefined)

  useEffect(() => {
    const setNextEvent = (existingKeys) => {
      console.log('keys sorted:', existingKeys.sort())
      const nextEvent =
        existingKeys[
          (existingKeys.indexOf(todayString) + 1) % existingKeys.length
        ]
      console.log('nextEvent=', nextEvent)
      const nextEventDate = nextEvent.replace('T00:00:00', '')
      const { title: nextEventTitle, link: nextEventLink } = calendar[nextEvent]
      setNextEventLink(nextEventLink)
      setNextEventTitle(
        `${nextEventDate}: ${nextEventTitle.replace(/^\d+:/, '')}`
      )
    }
    const today = currentDate
    const todayString = `${today.getFullYear()}-${(
      '0' + `${today.getMonth() + 1}`
    ).slice(-2)}-${('0' + today.getDate()).slice(-2)}T00:00:00`
    console.log('todayString=', todayString)
    const existingKeys = Object.keys(calendar)
    if (existingKeys.indexOf(todayString) === -1) {
      existingKeys.push(todayString)
    }
    setNextEvent(existingKeys)
    if (calendar[todayString]) {
      const { title, link } = calendar[todayString]
      setTitle(title)
      setLink(link)
    } else {
      setTitle('we are not singing today')
    }
  }, [currentDate])

  useEffect(() => {
    interval.current && clearInterval(interval.current)
    interval.current = setInterval(() => {
      setCurrentDate(new Date())
    }, 60000)
    return () => {
      interval.current && clearInterval(interval.current)
    }
  }, [])

  const renderLink = () => {
    if (link !== undefined) {
      return (
        <>
          <p className='font-bold text-blue-900'>
            <b>We are singing today:</b> <a href={link}>{title}</a>
          </p>
          <p>
            <b>Next event:</b> <a href={nextEventLink}>{nextEventTitle}</a>
          </p>
        </>
      )
    } else {
      return (
        <>
          <p className='font-bold text-blue-900'>We are not singing today!</p>
          <p>
            <b>Next event:</b> <a href={nextEventLink}>{nextEventTitle}</a>
          </p>
        </>
      )
    }
  }

  return (
    <div>
      <p>{renderLink()}</p>
    </div>
  )
}

export { Today }
