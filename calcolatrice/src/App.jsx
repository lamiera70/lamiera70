
import './App.css'
import { useState } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Display from './components/Display';
import Tastiera from './components/Tastiera';

export default function App() {

  const [count, setCount] = useState('')
  const [deposito, setDeposito] = useState('')
  const [piu, setPiu] = useState(false)
  const [meno, setMeno] = useState(false)
  const [per, setPer] = useState(false)
  const [diviso, setDiviso] = useState(false)
  const [display, setDisplay] = useState(false)

  function handleClickUno() {
    setDisplay(false)
    setCount(count + '1')
  }

  function handleClickDue() {
    setDisplay(false)
    setCount(count + '2')
  }

  function handleClickTre() {
    setDisplay(false)
    setCount(count + '3')
  }

  function handleClickQuattro() {
    setDisplay(false)
    setCount(count + '4')
  }

  function handleClickCinque() {
    setDisplay(false)
    setCount(count + '5')
  }

  function handleClickSei() {
    setDisplay(false)
    setCount(count + '6')
  }

  function handleClickSette() {
    setDisplay(false)
    setCount(count + '7')
  }

  function handleClickOtto() {
    setDisplay(false)
    setCount(count + '8')
  }

  function handleClickNove() {
    setDisplay(false)
    setCount(count + '9')
  }

  function handleClickZero() {
    setDisplay(false)
    setCount(count + '0')
  }

  function handleClickPunto() {
    setDisplay(false)
    setCount(count + '.')
  }

  function handleClickPiuMeno() {
    setDisplay(false)
    setCount(parseFloat(count * -1))
  }

  function handleClickPiu() {
    setPiu(true)
    setMeno(false)
    setPer(false)
    setDiviso(false)

    if (count != 0) setDeposito(count)
    setDisplay(true)
    if (count != deposito) setCount('')
  }

  function handleClickMeno() {
    setMeno(true)
    setPiu(false)
    setPer(false)
    setDiviso(false)

    if (count != 0) setDeposito(count)
    setDisplay(true)
    if (count != deposito) setCount('')
  }

  function handleClickPer() {
    setPer(true)
    setPiu(false)
    setMeno(false)
    setDiviso(false)

    if (count != 0) setDeposito(count)
    setDisplay(true)
    if (count != deposito) setCount('')
  }

  function handleClickDiviso() {
    setDiviso(true)
    setPiu(false)
    setMeno(false)
    setPer(false)

    if (count != 0) setDeposito(count)
    setDisplay(true)
    if (count != deposito) setCount('')
  }

  function handleClickQuadrato() {
    setCount(count * count)
  }

  function handleClickRadice() {
    setCount(Math.sqrt(count))
  }

  function handleClickCancella() {
    setDeposito('')
    setCount('')
    setPiu(false)
    setMeno(false)
    setPer(false)
    setDiviso(false)
    setDisplay(false)
  }

  function handleClickUguale() {
    {piu && setCount(parseFloat(deposito) + parseFloat(count))}
    {meno && setCount(parseFloat(deposito) - parseFloat(count))}
    {per && setCount(parseFloat(deposito) * parseFloat(count))}
    {diviso && setCount(parseFloat(deposito) / parseFloat(count))}
    setPiu(false)
    setMeno(false)
    setPer(false)
    setDiviso(false)
  }

  return (
    <>
      <Container>
        <Display count={count} deposito={deposito} display={display}/>
        <Tastiera>
          <Button onClickButton={handleClickRadice}>√</Button>
          <Button onClickButton={handleClickQuadrato}>x²</Button>
          <Button onClickButton={handleClickCancella}>C</Button>
          <Button onClickButton={handleClickDiviso}>÷</Button>
          <Button onClickButton={handleClickSette}>7</Button>
          <Button onClickButton={handleClickOtto}>8</Button>
          <Button onClickButton={handleClickNove}>9</Button>
          <Button onClickButton={handleClickPer}>x</Button>
          <Button onClickButton={handleClickQuattro}>4</Button>
          <Button onClickButton={handleClickCinque}>5</Button>
          <Button onClickButton={handleClickSei}>6</Button>
          <Button onClickButton={handleClickMeno}>─</Button>
          <Button onClickButton={handleClickUno}>1</Button>
          <Button onClickButton={handleClickDue}>2</Button>
          <Button onClickButton={handleClickTre}>3</Button>
          <Button onClickButton={handleClickPiu}>+</Button>
          <Button onClickButton={handleClickPiuMeno}>+/-</Button>
          <Button onClickButton={handleClickZero}>0</Button>
          <Button onClickButton={handleClickPunto}>.</Button>
          <Button onClickButton={handleClickUguale}>=</Button>
        </Tastiera>
      </Container>
    </>
  );
}


