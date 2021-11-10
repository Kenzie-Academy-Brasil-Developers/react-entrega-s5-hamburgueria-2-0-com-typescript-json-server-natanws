import { BiSearch } from "react-icons/bi";
import { SearchForm } from "./styles";

export const Search = () => {
  return (
    <SearchForm>
      <input type="text" placeholder="Digitar Pesquisa" />
      <button>
        <BiSearch />
      </button>
    </SearchForm>
  );
};
