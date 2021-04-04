import Image from "next/image";

import { getAllData, getAllPostIds } from "../../services/api";

const Pokemons = ({ results }) => {
  console.log(results);
  
  return (
    <>
      {results.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
};

export default Pokemons;

export async function getStaticProps() {
  const { results } = await getAllData();

  return {
    props: {
      results,
    },
  };
}
