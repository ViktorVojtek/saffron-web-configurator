import * as React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../../utils/store';
import { domainUri } from '../../../utils/constants';
import {
  Container,
  CloseBtn,
  Form,
  FormControl,
  H2,
  H3,
  HR,
  Input,
  Img,
  ImagesContainer,
  P,
  SubmitBtn,
  TextArea,
  Wrapper,
} from './styled';

const { Fragment } = React;

export default function ({
  show,
  data,
  images,
}: {
  show: boolean;
  data: any;
  images: string[];
}): JSX.Element {
  const {
    dispatch,
    state: { headTitle, legMatTitle, legTitle, matTitle, tuftTitle },
  } = useStore();
  const htmlTimes = '&times;';

  /* const handleCloseOrderForm = () => {
    dispatch({ type: 'TOGGLE_FORM', payload: false });
  }; */

  const handleSubmitForm: (
    event: React.FormEvent<HTMLFormElement>
  ) => Promise<void> = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const firstName = (form.firstname as HTMLInputElement).value;
    const lastName = (form.surname as HTMLInputElement).value;
    const email = (form.email as HTMLInputElement).value;
    const phone = (form.phone as HTMLInputElement).value;
    const message = (form.message as HTMLInputElement).value;

    const formData: string = JSON.stringify({
      firstName,
      lastName,
      message,
      email,
      phone,
    });

    const url: string = `${domainUri}/send-mail`;

    const resp: Response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData,
    });

    if (resp.status === 200) {
      const mailResp = await resp.json();

      // console.log(mailResp);
    }
  };

  return (
    <Fragment>
      <Link to="/">
        <CloseBtn dangerouslySetInnerHTML={{ __html: htmlTimes }} />
      </Link>
      <Wrapper>
        <Form onSubmit={handleSubmitForm}>
          <H2>Zhrnutie</H2>
          <HR />
          <H3>Objednaný produkt:</H3>
          {data
            ? [
                <P key="op-0">
                  Typ postele <strong>{data.title}</strong>, typ materiálu
                  postele <strong>{matTitle.toLowerCase()}</strong>.
                </P>,
                <P
                  key="op-1"
                  dangerouslySetInnerHTML={{
                    __html:
                      headTitle.toLowerCase() !== 'frame'
                        ? `Typ čela <strong>${headTitle}</strong>.`
                        : `Typ čela <strong>${headTitle}</strong> materiál rámu <strong>${legMatTitle.toLowerCase()}</strong>.`,
                  }}
                />,
                <P key="op-2">
                  Typ farby prešitia <strong>{tuftTitle.toLowerCase()}</strong>.
                </P>,
                <P key="op-3">
                  Typ nôh <strong>{legTitle}</strong>, typ materiálu nôh{' '}
                  <strong>{legMatTitle.toLowerCase()}</strong>.
                </P>,
                <HR key="div-0" />,
              ]
            : null}
          <FormControl>
            <Input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Zadajte svoje meno"
            />
          </FormControl>
          <FormControl>
            <Input
              type="text"
              id="surname"
              name="surname"
              placeholder="Zadajte priezvisko"
            />
          </FormControl>
          <FormControl>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Zadajte svoj e-mail"
            />
          </FormControl>
          <FormControl>
            <Input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Zadajte tel. číslo"
            />
          </FormControl>
          <FormControl marginOff>
            <TextArea
              id="message"
              placeholder="Napíšte nám správu..."
              rows={3}
            />
          </FormControl>
          <ImagesContainer>
            {images && images.length > 0
              ? images.map((item: string, i: number) => (
                  <Img src={item} key={`img-${i}`} />
                ))
              : null}
          </ImagesContainer>
          <FormControl>
            <input type="checkbox" /> Súhlas so spracovaním osobných údajov.
          </FormControl>
          <FormControl>
            <input type="checkbox" /> Chcem aby sa mi ozval predajca Saffronu.
          </FormControl>
          <SubmitBtn type="submit" disabled>
            Poslať zhrnutie na môj email
          </SubmitBtn>
        </Form>
      </Wrapper>
    </Fragment>
  );
}
