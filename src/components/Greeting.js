import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../actions/greetingActions';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector(state => state.greeting.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export default Greeting;