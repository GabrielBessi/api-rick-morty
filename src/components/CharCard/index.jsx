import { CardStyle } from "./styles";

const CharCard = ({ name, image, species, status }) => {
  return (
    <CardStyle status={status}>
      <div className="textPerson">
        <img src={image} alt="" />
        <div className="textPerson-position">
          <p>{name}</p>
          <p className="textSpecies">{species}</p>
          <div className="textStatus">
            <span className="circle-style"></span>
            <span>{status}</span>
          </div>
        </div>
      </div>
    </CardStyle>
  );
};

export default CharCard;
