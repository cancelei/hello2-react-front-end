import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchGreeting from '../actions/greetingActions';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      {error ? (
        <p>
          Error:
          {error.message}
        </p>
      ) : <h1>{greeting}</h1>}
    </div>
  );
}

export default Greeting;
