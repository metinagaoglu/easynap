import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
		<div id="app">
    <div class="container">
        <div class="header">
            <div class="logo">
                <h2 class="logo__title">easysnap</h2>
            </div>

            <div class="header_menu">
                <div class="active">
                    snaps
                </div>
                <div>
                    login
                </div>
                <div>
                    join
                </div>
            </div>
        </div>

        <div class="description">
            <p class="sub_header__desc">simple snap app with <span>react</span>.</p>
        </div>

        <div>
            <form>
                <input class="add-snap__input" type="text" placeholder="add snap" />
            </form>
        </div>
        <div>
            <ul class="snaps">
                <li>
                    <div class="title">Lorem ipsum dolor sit amet</div>
                    <div class="date">
                        <span>now</span>
                    </div>
                </li>
                <li>
                    <div class="title">Curabitur gravida arcu ac tortor dignissim.</div>
                    <div class="date">
                        <span>5 minutes ago</span>
                    </div>
                </li>
                <li>
                    <div class="title">Tristique risus nec feugiat in fermentum.</div>
                    <div class="date">
                        <span>7 minutes ago</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="counter">3 snap(s)</div>
    </div>
</div>
    );
  }
}

export default App;
