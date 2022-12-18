import { createClient } from "urql";

const url = "https://swapi-graphql.netlify.app/.netlify/functions/index";

export const client = createClient({url})