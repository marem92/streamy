import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamCreate from './streams/StreamCrate';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

//Client ID:
//470263565421-lhsarbtj7mibq0eui4s1c5llcd9t2s5h.apps.googleusercontent.com
