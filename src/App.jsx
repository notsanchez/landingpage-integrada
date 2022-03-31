import React, { Component } from 'react';
import api from './server/api';
import './Main.css'

class App extends Component {

  state = {
    apicontent: [],
  }

  async componentDidMount() {
    const response = await api.get('');
    this.setState({ apicontent: response.data });
    // console.log(response.data);
  }

  render() {

    const { apicontent } = this.state;

    return (
      <>
        <body>
            <header>
                <div class="menu-content">
                    {apicontent.map(content => (
                      <h1 class="logo">{content.name}</h1>
                    ))}
                    <nav class="header-menu">
                        <ul class="list-itens">
                            {apicontent.map(content => (
                              <li><a href="#">{content.li}</a></li>
                            ))}
                            {apicontent.map(content => (
                              <li><a href="#">{content.li2}</a></li>
                            ))}
                            {apicontent.map(content => (
                              <li><a href="#">{content.li3}</a></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <div class="main-content">
                    {apicontent.map(content => (
                      <h1 class="primary-text">{content.title}</h1>
                    ))}
                    {apicontent.map(content => (
                      <h2 class="second-text">{content.subtitle}</h2>
                    ))}

                    <div class="btns">
                        {apicontent.map(content => (
                          <button class="btn-exp">{content.buttonhome}</button>
                        ))}
                        {apicontent.map(content => (
                          <button class="btn-personal">{content.buttonhome2}</button>
                        ))}
                    </div>
                </div>
                {apicontent.map(content => (
                  <img src={content.image1}/>
                ))}
            </main>
            <main className='second-section'>
            {apicontent.map(content => (
                  <img src={content.image2}/>
                ))}
                <div class="second-content">
                    {apicontent.map(content => (
                      <h1 class="primary-text secondsec-text">{content.secondtitle}</h1>
                    ))}
                    {apicontent.map(content => (
                      <h2 class="second-text">{content.secondsubtitle}</h2>
                    ))}
                    <div class="btns">
                    {apicontent.map(content => (
                      <button class="btn-exp">{content.buttonsecond}</button>
                    ))}
                    </div>
                </div>
                
            </main>
            <main className='third-section'>
                <div class="main-content">
                    {apicontent.map(content => (
                      <h1 class="primary-text thirdsec-text">{content.thirdtitle}</h1>
                    ))}
                    {apicontent.map(content => (
                      <h2 class="second-text">{content.thirdsubtitle}</h2>
                    ))}
                </div>
            </main>
        </body>
      </>
    );
  };
};

export default App;