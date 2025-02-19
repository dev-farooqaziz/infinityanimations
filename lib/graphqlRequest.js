export default async function graphqlRequest(query) {
    const res = await fetch(
        `https://inhouse.cryscampus.com/wordpress/animation/graphql?query=${encodeURIComponent(query)}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
    );

    const { data } = await res.json();
    return data;
}