import {CdsCheckbox, CdsCheckboxGroup} from '@cds/react/checkbox';
import {CdsControlMessage} from '@cds/react/forms';
import {useState} from 'react';

interface CheckboxItem {
  name: string;
  id: string; // used for value
}

export default function MultiCheckbox({
  label,
  inputName,
  defaultCheckedItems,
  allItems,
  description,
  selectChange,
}: {
  label: string;
  inputName: string;
  defaultCheckedItems?: CheckboxItem[];
  allItems: CheckboxItem[];
  description?: string;
  selectChange?: (items: string[]) => void;
}) {
  const [selectedValues, setSelectedValues] = useState(() =>
    defaultCheckedItems ? defaultCheckedItems.map(i => i.id) : [],
  );

  return (
    <CdsCheckboxGroup>
      <label>{label}</label>
      {allItems.map(item => (
        <CdsCheckbox key={item.id}>
          <label>{item.name}</label>
          <input
            type="checkbox"
            name={inputName}
            value={item.id}
            checked={selectedValues.includes(item.id)}
            onChange={e => {
              const value = e.target.value;
              if (e.target.checked) {
                const newState = [...selectedValues, value];
                setSelectedValues(newState);
                selectChange && selectChange(newState);
              } else {
                const newState = selectedValues.filter(v => v !== value);

                setSelectedValues(newState);
                selectChange && selectChange(newState);
              }
            }}
          />
        </CdsCheckbox>
      ))}
      {description && <CdsControlMessage>{description}</CdsControlMessage>}
    </CdsCheckboxGroup>
  );
}
