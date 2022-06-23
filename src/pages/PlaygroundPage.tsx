import {CdsButton} from '@cds/react/button';
import {
  Card,
  CardBlock,
  CardFooter,
  CardFooterAction,
  CardHeader,
  CardText,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '@tmc/clr-react';
import {useState} from 'react';

import logo from '@/assets/logo.svg';
import AppLoading from '@/components/common/AppLoading';
import {formatDate, l10n} from '@/i18n/i18nUtils';

export default function PlaygroundPage() {
  const [count, setCount] = useState(0);

  return (
    <header className="flex flex-col justify-center p-20">
      <img src={logo} className="w-20" alt="logo" />
      <p>Hello Vite + React!</p>
      <AppLoading size="lg" />
      <p>
        <button type="button" onClick={() => setCount(count => count + 1)}>
          count is: {count}
        </button>
      </p>
      <CdsButton>solid clarity button</CdsButton>
      <p className="text-red-500">Tailwind color</p>
      <p>{l10n('common.back')}</p>
      <p>{formatDate(new Date(), 'MMMM d, y, h:mm:ss a')}</p>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBlock>
          <CardTitle>Card content can contain text, links, images, lists and more.</CardTitle>
          <CardText>Block</CardText>
        </CardBlock>
        <CardFooter>
          <CardFooterAction>Action 1</CardFooterAction>
          <CardFooterAction>Action 2</CardFooterAction>
          <Dropdown>
            <DropdownToggle family="link" small>
              Dropdown 1
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Harder</DropdownItem>
              <DropdownItem>Better</DropdownItem>
              <DropdownItem>Faster</DropdownItem>
              <DropdownItem>Stronger</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardFooter>
      </Card>
    </header>
  );
}
