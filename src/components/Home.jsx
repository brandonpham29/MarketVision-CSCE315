import React, { useState } from "react";
import logo from '../images/MarketVisionLogo.JPG'
import gray from '../images/gray3.png'
import { IntlProvider, FormattedMessage } from "react-intl";
import Carousel from 'react-bootstrap/Carousel'

const messages = {
  en: {
    stockTitle: "Stock Screener",
    stockDesc: "The stock screener will allow users to filter a list of predefined stocks inside our databasebased on statistical factors provided by thecompanies who own those stocks. This page will output a list of stocks that the user can view based on the specific criteria they defined. Possible inputs include Debt/Equity, ROE, ROI, Price to earnings ratio, Market cap and more.",
    intrinsicTitle: "Intrinsic Value Screener",
    intrinsicDesc: "The intrinsic value page will allow users to search for any stock that we have inside our database, which will be an estimated 3000-5000 stocks available, and calculate there true intrinsic value. This page will display important statistical information about the company as well as a graph of there current stock price and the target price defined by the intrinsic value calculation.",
    newsTitle: "News Screener",
    newsDesc: "The news screener will allow users to search news based off a certain stock ticker and will display recent relevant news articles.",
    cryptoTitle: "Crypto Screener",
    cryptoDesc: "The cryptocurrency screener will show the top 10 crypto coins based on their total market volume. The main page also shows a graph of the cryptocurrency market evaluation to see the performance of entire cryptocurrency market. There is also an exchange rate container at the bottom of the main page. The search bar at the top of the page can be used to look up a certain cryptocurrency based based on their symbol and will display more indepth details about the coin.",
    NFTTitle: "NFT Screener",
    NFTDesc: "NFT stands for non-fungible token and are a new and upcoming currency in the market. Because of its recent popular trend, the NFT page shows the top most visited NFTs based off data given from the opensea api. Each NFT will show its name, description and price in Ethereum.",
    homeTitle: "Home Page",
    welcome: "Welcome to MarketVision! Here you can find all the information you need to make the right investment decisions!"
  },
  es: {
    stockTitle: "Stock Screener",
    stockDesc: "El evaluador de acciones permitirá a los usuarios filtrar una lista de acciones predefinidas dentro de nuestra base de datos en función de factores estadísticos proporcionados por las empresas propietarias de esas acciones. Esta página generará una lista de acciones que el usuario puede ver en función de los criterios específicos que definieron . Las posibles entradas incluyen deuda / capital, ROE, ROI, relación precio / ganancias, capitalización de mercado y más ",
    intrinsicTitle: "Intrinsic Value Screener",
    intrinsicDesc: "La página de valor intrínseco permitirá a los usuarios buscar cualquier acción que tengamos dentro de nuestra base de datos, que será un estimado de 3000-5000 acciones disponibles, y calcular el verdadero valor intrínseco. Esta página mostrará información estadística importante sobre la empresa así como un gráfico del precio actual de las acciones y el precio objetivo definido por el cálculo del valor intrínseco. ",
    newsTitle: "News Screener",
    newsDesc: "El evaluador de noticias permitirá a los usuarios buscar noticias en función de una determinada cotización bursátil y mostrará artículos de noticias relevantes recientes.",
    cryptoTitle: "Crypto Screener",
    cryptoDesc: "El examinador de criptomonedas mostrará las 10 principales criptomonedas en función de su volumen total de mercado. La página principal también muestra un gráfico de la evaluación del mercado de criptomonedas para ver el rendimiento de todo el mercado de criptomonedas. También hay un contenedor de tipos de cambio en el parte inferior de la página principal. La barra de búsqueda en la parte superior de la página se puede utilizar para buscar una determinada criptomoneda en función de su símbolo y mostrará más detalles sobre la moneda. ",
    NFTTitle: "NFT Screener",
    NFTDesc: "NFT significa token no fungible y es una moneda nueva y próxima en el mercado. Debido a su reciente tendencia popular, la página NFT muestra los NFT más visitados según los datos proporcionados por la API de opensea. Cada NFT mostrará su nombre, descripción y precio en Ethereum. ",
    homeTitle: "Pagina de inicio in Spanish",
    welcome: "¡Bienvenido a MarketVision! ¡Aquí puede encontrar toda la información que necesita para tomar las decisiones de inversión correctas!"
  }
};



function Home() {
  const [local, setLocal] = useState("en");

  return (
    <div class="jumbotron">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={logo}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <select onChange={(e) => setLocal(e.target.value)} defaultValue={local}>
              {["en","es"].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
            <IntlProvider local={local} messages={messages[local]}>
              <h1 class="font-weight-light">
                <FormattedMessage 
                id="homeTitle" 
                defaultMessage="Default" 
                value={{local}}>
                </FormattedMessage>
                </h1>
            </IntlProvider>
            <IntlProvider local={local} messages={messages[local]}>
              <p>
                <FormattedMessage 
                id="welcome" 
                defaultMessage="Default" 
                value={{local}}>
                </FormattedMessage>
              </p>
            </IntlProvider>
          </div>
        </div>
        <div>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption style={{top: "0", bottom: "auto"}}>
                <IntlProvider local={local} messages={messages[local]}>
                  <h3>
                  <FormattedMessage 
                  id="stockTitle" 
                  defaultMessage="Default" 
                  value={{local}}>
                  </FormattedMessage>
                  </h3>
                </IntlProvider>
                <IntlProvider local={local} messages={messages[local]}>
                  <p>
                  <FormattedMessage 
                  id="stockDesc" 
                  defaultMessage="Default" 
                  value={{local}}>
                  </FormattedMessage>
                  </p>
                </IntlProvider>
              </Carousel.Caption>
              <img
                className="w-100"
                src={gray}
                alt="First slide"
              />
            </Carousel.Item>
           
            <Carousel.Item>
              <Carousel.Caption style={{top: "0", bottom: "auto"}}>
                <IntlProvider local={local} messages={messages[local]}>
                  <h3>
                  <FormattedMessage 
                  id="intrinsicTitle" 
                  defaultMessage="Default" 
                  value={{local}}>
                  </FormattedMessage>
                  </h3>
                </IntlProvider>
                <IntlProvider local={local} messages={messages[local]}>
                  <p>
                  <FormattedMessage 
                  id="intrinsicDesc" 
                  defaultMessage="Default" 
                  value={{local}}>
                  </FormattedMessage>
                  </p>
                </IntlProvider>
              </Carousel.Caption>
              <img
                className="w-100"
                src={gray}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <Carousel.Caption style={{top: "0", bottom: "auto"}}>
                <IntlProvider local={local} messages={messages[local]}>
                  <h3>
                  <FormattedMessage 
                  id="newsTitle" 
                  defaultMessage="Default" 
                  value={{local}}>
                  </FormattedMessage>
                  </h3>
                </IntlProvider>
                <IntlProvider local={local} messages={messages[local]}>
                  <p>
                  <FormattedMessage 
                  id="newsDesc" 
                  defaultMessage="Default" 
                  value={{local}}>
                  </FormattedMessage>
                  </p>
                </IntlProvider>
              </Carousel.Caption>
              <img
                className="w-100"
                src={gray}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <Carousel.Caption style={{top: "0", bottom: "auto"}}>
                <IntlProvider local={local} messages={messages[local]}>
                  <h3>
                  <FormattedMessage 
                  id="cryptoTitle" 
                  defaultMessage="Default" 
                  value={{local}}>
                  </FormattedMessage>
                  </h3>
                </IntlProvider>
                <IntlProvider local={local} messages={messages[local]}>
                  <p>
                  <FormattedMessage 
                  id="cryptoDesc" 
                  defaultMessage="Default" 
                  value={{local}}>
                  </FormattedMessage>
                  </p>
                </IntlProvider>
              </Carousel.Caption>
              <img
                className="w-100"
                src={gray}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <Carousel.Caption style={{top: "0", bottom: "auto"}}>
                <IntlProvider local={local} messages={messages[local]}>
                  <h3>
                  <FormattedMessage 
                  id="NFTTitle" 
                  defaultMessage="Default" 
                  value={{local}}>
                  </FormattedMessage>
                  </h3>
                </IntlProvider>
                <IntlProvider local={local} messages={messages[local]}>
                  <p>
                  <FormattedMessage 
                  id="NFTDesc" 
                  defaultMessage="Default" 
                  value={{local}}>
                  </FormattedMessage>
                  </p>
                </IntlProvider>
              </Carousel.Caption>
              <img
                className="w-100"
                src={gray}
                alt="First slide"
              />
            </Carousel.Item>
            
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;