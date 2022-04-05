import React from 'react';
import './App.css';
import { Field } from './Form/Field';
import { Form } from './Form/Form';

function App() {
  return (
    <div className="App">
      <div>
      <Form 
        onSubmit={v => console.log(v)}
        validate={v => {
          const errors: {b?: string} = {};
          if (v.b.length < 3) {
            errors.b = 'Min 3 chars'
          }
          return errors;
        }}
        render={({handleSubmit}) => (
          <>
            <Field 
              name="a"
              render={({input}) => <input {...input}/>}
            />
            <Field 
              name="b"
              render={({input, meta}) => (
                <>
                  <input {...input}/>
                  {meta.error ? <span>{meta.error}</span> : null}
                </>
              )}
            />
            <button onClick={handleSubmit}>Send</button>
          </> 
        )}
      />
      </div>
      <div>
        <Form 
          onSubmit={v => console.log(v)}
          render={({handleSubmit}) => (
            <>
              <Field 
                name="c"
                render={({input}) => <input type="checkbox" {...input}/>}
              />
              <Field 
                name="d"
                render={({input}) => <input type="checkbox" {...input}/>}
              />
              <button onClick={handleSubmit}>Send</button>
            </> 
          )}
        />
      </div>
      <div>
        <Form 
          onSubmit={v => console.log(v)}
          render={({handleSubmit}) => (
            <>
              <Field 
                name="e"
                render={({input}) => <textarea {...input}/>}
              />
              <Field 
                name="f"
                render={({input}) => <textarea {...input}/>}
              />
              <button onClick={handleSubmit}>Send</button>
            </> 
          )}
        />
      </div>
      <div>
        <Form 
          onSubmit={v => console.log(v)}
          render={({handleSubmit}) => (
            <>
              <Field 
                name="g"
                render={({input}) => <input type="radio" {...input}/>}
              />
              <Field 
                name="h"
                render={({input}) => <input type="radio" {...input}/>}
              />
              <button onClick={handleSubmit}>Send</button>
            </> 
          )}
        />
      </div>
    </div>
  );
}

export default App;
