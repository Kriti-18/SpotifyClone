import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';




export const SpotifyApi = createApi({
    reducerPath: 'SpotifyApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://spotify23.p.rapidapi.com/',
      prepareHeaders: (headers) =>{
        headers.set('x-rapidapi-key' , 'ae64f09f44mshe4176fd4f783442p143e6ajsn9bbcdc719d19' );
        return headers;
      },
    }),
    endpoints: (builder) => ({
    getTopAlbums: builder.query({ query: () => 'albums' }),
    getSongsByGenre: builder.query({ query: (genre) => `genre_view?genre_code=${genre}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `album_metadata?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `search?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `artist_overview?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `tracks?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `recommendations?track_id=${songid}` }),
  }),
});

export const {
  useGetTopAlbumsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = SpotifyApi;
    