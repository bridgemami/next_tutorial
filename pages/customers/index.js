//runs at build time to retrieve the API
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      customers: data,
    },
  };
};

export default function Customers({ customers }) {
  return (
    <section>
      <h2>Customers</h2>
      {customers.map((customer) => (
        <div key={customer.id}>
          <Link href={`/customers/${customer.id}`}><h3>Name: {customer.name}</h3></Link>
          <ul>
            <li>username: {customer.username}</li>
            <li>email: {customer.email}</li>
          </ul>
        </div>
      ))}
    </section>
  );
}
