import styled from "styled-components";

interface SelectProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function Select({ selected, setSelected }: SelectProps) {
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <SelectStyle>
      <select onChange={selectHandler} value={selected}>
        <option value="default" disabled>
          필터를 선택하세요
        </option>
        {selectList.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </SelectStyle>
  );
}

const selectList = ["All", "Personal", "Team", "Experience"];

const SelectStyle = styled.div`
  position: relative;

  & > select {
    position: absolute;
    top: -61px;
    right: 10px;
    padding: 5px 8px;
    font-size: 12px;
    outline-color: #222;
    border-color: #ddd;
  }

  @media screen and (max-width: 768px) {
    & > select {
      font-size: 10px;
    }
  }
`;
