export const FILMS = `
    query AllFilms($after: String, $before: String, $first: Int, $last: Int) {
      allFilms(after: $after, before: $before, first: $first, last: $last) {
        films {
          created
          director
          edited
          episodeID
          id
          openingCrawl
          producers
          releaseDate
          title
        }
      }
    }
`;