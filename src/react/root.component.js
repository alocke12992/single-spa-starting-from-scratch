import React from 'react';
import {navigateToUrl} from 'single-spa';

const React = () => (
      <div>
        <a href="/home" onClick={navigateToUrl}class="waves-effect waves-light btn">Router App</a>
        <a href="/angular1" onClick={navigateToUrl} class="waves-effect waves-light btn">Gif App</a>
      </div>
    )

export default React