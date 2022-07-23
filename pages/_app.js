import '../styles/globals.css';
import { ChakraProvider, extendTheme ,} from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { Global } from '@emotion/react';

const breakpoints = createBreakpoints({
  watchS:"198px",
  watchM:"225px",
  watchL:"228px",
  phoneS:"321px",
  phoneM:"361px",
  phoneL:"413px",
  padS:"768px",
  padM:"811px",
  padL:"1025px",
  pcS:"1281px",
  pcM:"1367px",
  pcL:"1441px",
  pcXL:"1621px",
  pcXXL:"1921px",

  T869:"869",
  T655:"655",
  T555:"540",
  T460:"460",
  T370:"360",
  T1412:"1410",
  T1650:"1660",
})


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}


const theme = extendTheme({ config , breakpoints })



function MyApp({ Component, pageProps:{session, ...pageProps}, router }) {
  return (
    

      <ChakraProvider theme={theme}>


<Global
    styles={`
    

    .small-divider {
      margin:0.5rem;
      height: 15px;
      background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' height='100%' width='100%'><defs><pattern id='small' width='4' height='15' patternTransform='rotate(0 0 0)' patternUnits='userSpaceOnUse'> <circle cx='0.5' cy='1.5' r='0.5' fill='%23F05346'/> <circle cx='0.5' cy='4.5' r='0.5' fill='%23F05346'/> <circle cx='0.5' cy='7.5' r='0.5' fill='%23F05346'/> <circle cx='2.5' cy='2.5' r='0.5' fill='%23F05346'/> <circle cx='2.5' cy='5.5' r='0.5' fill='%23F05346'/> <circle cx='2.5' cy='8.5' r='0.5' fill='%23F05346'/> </pattern></defs><rect width='100%' height='100%' fill='url(%23small)'/></svg>");
      }

 

      `}
  />

      <Component {...pageProps} />

    </ChakraProvider>
    
   
  )
}

export default MyApp
