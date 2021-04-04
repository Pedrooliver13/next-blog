import { getPokemonData, getAllPostIds } from "../../services/api";

const Pokemon = (props) => {
  return (
    <section className="container">
      <img
        src={props.sprites.front_default}
        alt={props.name}
        width="350"
        height="350"
      />
      <h1>{props.name}</h1>
    </section>
  );
};

export default Pokemon;

export async function getStaticPaths() {
  // ele faz uma leitura de todos params da URL possíveis
  const paths = await getAllPostIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // ele pega o params e faz a requisição que vai como props para o componente
  const results = await getPokemonData(params.id);
  console.log(results);

  return { props: results };
}
