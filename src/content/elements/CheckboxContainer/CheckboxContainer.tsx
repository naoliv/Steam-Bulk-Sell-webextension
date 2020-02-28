import React from 'react';
import { observer } from 'mobx-react-lite';
import { useItem } from 'content/hooks';
import { Checkbox } from '../';

export interface Props {
  id?: string;
  itemId: string;
}

export const CheckboxContainer: React.FC<Props> = observer(({ id, itemId }) => {
  const { selected, toggleSelected } = useItem(itemId);

  return (
    <Checkbox id={id} checked={selected} onChange={toggleSelected}/>
  );
});

export default CheckboxContainer;