import CharCard from "../CharCard";
import { CardOverFlow } from "./styles";

const Character = ({ charactersList }) => {
  return (
    <CardOverFlow>
      <div>
        <div>
          <ul>
            {charactersList.map(({ id, name, image, species, status }) => (
              <CharCard
                key={id}
                name={name}
                image={image}
                species={species}
                status={status}
              />
            ))}
          </ul>
        </div>
      </div>
    </CardOverFlow>
  );
};

export default Character;
