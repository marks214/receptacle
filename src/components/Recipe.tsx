export const Recipe = (props: any) => {
  return (
    <>
      <h1>{props.title}</h1>
      <ol>
        {props.ingredients.map((ingredient: any) => {
          <li>{ingredient}</li>;
        })}
      </ol>
    </>
  );
};
