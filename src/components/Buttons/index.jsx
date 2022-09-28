import { NumberPage } from "./style";

const Buttons = ({ page, setPage }) => {
  function previousPage(event) {
    event.preventDefault();
    if (page > 1) {
      return setPage(page - 1);
    }
  }

  function nextPage(event) {
    event.preventDefault();
    if (page < 42) {
      setPage(page + 1);
    }
  }
  return (
    <NumberPage>
      <button onClick={previousPage}>Anterior</button>
      <span className="spanNumber">{page}</span>
      <button onClick={nextPage}>Próximo</button>
    </NumberPage>
  );
};

export default Buttons;
