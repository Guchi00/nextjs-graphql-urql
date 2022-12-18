import Head from 'next/head'
import Image from 'next/image'
import { useQuery } from 'urql'
import { FILMS } from '../lib/graphql/queries';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [{ data, fetching }] = useQuery({
    query: FILMS
  });

  if (fetching && !data) return <>loading...</>

  console.log(data, 'tatata >>>>>>')

  return (
    <div className={styles.container}>
      {
        data.allFilms.films.map((film: any) => (
          <div>
            <p><span style={{ color: 'red'}}>title</span>{film.title}</p>
            <p><span style={{ color: 'blue'}}>director</span>{film.director}</p>
            <p><span style={{ color: 'green'}}>producers</span>{film.producers}</p>
          </div>
        ))
      }
    </div>
  )
}
