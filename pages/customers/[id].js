export const getStaticPaths = async() => {
const resp = await fetch('https://jsonplaceholder.typicode.com/users/')
const data = await resp.json();
const paths= data.map(user => {
    return {
        params: {id: user.id.toString()}
    }
})
return {
   paths: paths,
   //fallback will show 404 page
   fallback: false
}
}

export const getStaticProps = async (context) => {
    //id for each user
    const id = context.params.id
    const resp= await fetch('https://jsonplaceholder.typicode.com/users/'+ id)
    const data = await resp.json();
    return {
        props: {
            customers: data
        }
    }
}
//{} to destructed the customers and no map
export default function Details ({customers}) {
    return (
        <section>
            <h1>{customers.name}</h1>
            <ul>
                <li>username:{customers.username}</li>
                <li>email: {customers.email}</li>
            </ul>
        </section>
    )
}