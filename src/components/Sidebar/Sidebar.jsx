import React, { useState, useEffect, useRef, memo } from 'react';
import { ColorDivItem } from './ColorDivItem';

const Sidebar = (props) => {
  let state = props.sidebarPage;
  let coloredElements = state.colors.map(el => <ColorDivItem id={el.id} color={el.color} />);
  let newColorBody = state.newColorBody;
  let title = state.title;

  let onSendColorClick = () => {
    props.sendColor();
  };

  let onNewColorChange = (e) => {
    let body = e.target.value;
    props.updateNewColorBody(body);
  }

  let OnUpdateName = () => {
    console.log(props.updateName());
    console.log(state.title);
    props.updateName();
    // setState(prev => {
    //   return {
    //     ...prev, // с помощью деструктуризации получаем предыдущий объект ПОЛНОСТЬЮ и меняем только тайтл.
    //     title: 'New message'
    //   }
    // });
  }

  // useState:

  const [color, setColor] = useState({ // color передаем
    color: '#eee',
    fontSize: ''
  })

  const setStateColorforuseState = e => {
    // console.log(color.standartColor);
    setColor({
      standartColor: '#11b9c5'
    })
  }

  const handlerMoveColor = e => {
    setColor({
      xd: e.target.value,
    });
  }
  
  useEffect(() => {
    // console.log('Color Component Did Mount');
    let sidebarInput = document.querySelector('#input-color-sidebar');
    sidebarInput.addEventListener('change', handlerMoveColor);
    return () => {
      sidebarInput.removeEventListener('change', handlerMoveColor) // Всегда нужна отписка. Удаление слушателя событий.
    }
  }, [color]);


  // ХУКИ
  // useState
  function computeInitialCounter() {
    // console.log('Some calculation');
    return Math.trunc(Math.random() * 42);
  }

  // const [counter, setCounter] = useState(10); // Изначальное состояние в скобочках
  // const [counter, setCounter] = useState(computeInitialCounter()); // Проблема в снижении производительности. Постоянно вызывается функция.
  const [counter, setCounter] = useState(function () { // Начальное значение - функция, которая вызывается только один раз.
    return computeInitialCounter();
  })

  const [stateTitle, setState] = useState({
    title: 'Name counter',
    date: new Date()
  });

  function inc() {
    // setCounter(counter + 1);
    // setCounter(counter + 1); Цикл рендеринга не отрисовывает каунтер дважды. Поэтому будет только +1 - один раз
    setCounter((prevCounter) => { // prevCounter - это Предыдущее состояние
      return prevCounter + 1;
    });
  }

  function dec() {
    setCounter(counter - 1);
  }

  // USEEFFECT ХУК
  // Синтаксис: useEffect(() => {}, []) // Два аргумента Функция и массив. Массив - это зависимости которые можно передавать
  const [type, setType] = useState('Users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({ // pos передаем
    x: 0, y: 0
  })

  // useEffect(() => {
  //   console.log('Type change', type);
  // }, [type]); // В этом примере, мы передаём [type] вторым аргументом. Что это вообще значит? Это значит, что если type будет равен post например и наш компонент повторно рендерится с тем же значением type = post, React сравнит [post] из предыдущего рендера и [post] из следующего рендера. Так как, все элементы массива остались без изменений (post === post), React пропустит этот эффект. Это и есть оптимизация данного процесса.

  useEffect(() => { // side Effects наблюдаем за чем-либо и выполняем определенную логику.
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json));
      console.log(data);
  }, [type]); // Следим только за изменение type И дальше изменяем UI

  const mouseMovehandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    });
  }

  useEffect(() => {
    // console.log('Component Did Mount');
    window.addEventListener('mousemove', mouseMovehandler);
    return () => {
      window.removeEventListener('mousemove', mouseMovehandler) // Всегда нужна отписка. Удаление слушателя событий.
    }
  }, []);
  // console.log(...new Set(a));


  // USEREF
  // USEREF - очень похож на useState. Также создаёт своё состояние. 
  // Сохраняет состояние при работе с компонентами. НО при этом не вызывает сам рендер. Можно также сохранить ПРЕДЫДУЩЕЕ СОСТОЯНИЕ.

  // const [renderCount, setRenderCount] = useState(0);
  // const [renderCountValue, setrenderCountValue] = useState('initial');
  const [value, setValue] = useState('initial');

  const renderCount = useRef(1); // Это не значение, а объект у которого есть свойство current
  const inputRef = useRef(null);
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => { // таким образом вызвается ПРЕДЫДУЩЕЕ состояние.
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  // useMEMO
  function List() {
    // console.log('List Render');
    return (<h2>Memo list</h2>)
  }
  const MemoList = memo(List);

  return (
    <div className="card" style={{
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: `${color.xd ? color.xd : color.standartColor}`

    }}>

      <button className="primary btn btn-info">Chose background color<input type="color" onChange={handlerMoveColor} id="input-color-sidebar" /></button>
      <button className="btn btn-success" onClick={setStateColorforuseState}>Standart Color</button>

      <div className="card-body">
        <MemoList />
        {coloredElements}
        <button onClick={onSendColorClick}>Give me new Color</button>
        <button className="primary color-choice">Pick me: <input type="color" value={newColorBody} onChange={onNewColorChange} id="input-color" /></button>

      </div>

      <div className='counter'> Counter: {counter}
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>

      <pre>
        {JSON.stringify(stateTitle, null, 2)}
        <div>{title}</div>
        <button onClick={OnUpdateName} className="btn btn-warning">Give me randome num</button>
      </pre>

      {/* useEffect Hook */}
      <div className='useEffect'>
        <h2>use Effect</h2>
        <h3>Resurs: {type}</h3>
        <button onClick={() => setType('users')}>Users</button>
        <button onClick={() => setType('todos')}>Todo</button>
        <button onClick={() => setType('posts')}>Posts</button>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre>  */}
        <pre>{JSON.stringify(pos, null, 2)}</pre>
      </div>

      {/* useRef Hook*/}
      <div className='useRef'>
        <h1>useRef</h1>
        <h3>Количество рендеров: {renderCount.current}</h3>
        <h4>Предыдущее значение: {prevValue.current}</h4>
        <input ref={inputRef} type='text' value={value} onChange={events => setValue(events.target.value)}></input>
        <button className="btn-success" onClick={focus}>Focus</button>
      </div>

    </div>

  )
}

export default Sidebar;