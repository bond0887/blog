import { gql, GraphQLClient } from "graphql-request";
import { NextResponse } from 'next/server'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export async function POST(req, res){
    const body = await req.json()
    const { name, email, comment, slug } = body;
    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers:{
            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
        }
    })

    const query = gql`
        mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!){
            createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}} }) { id }
        }
    `;

    const result = await graphQLClient.request(query, {name,email,comment,slug});
    const data = await result;

    return NextResponse.json(data)
}