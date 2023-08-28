import styled from "@emotion/styled"

const Cotizacion = styled.div `
    color: #fff;
    font-family: 'Lato' sans-serif;

    display:flex;
    align-items:start;
    gap: 1rem;
    margin-top: 30px;
`
const Imagen = styled.img `
    display: block;
    width: 80px;
`

const Info = styled.p `
     font-size: 20px;
    span {
        font-weight: 700;
        font-style: italic;
        color:#949fff;
        padding-left: 10px;
    }
`
const Precio = styled.p `
    font-size: 30px;
    span {
        font-weight: 700;
        font-style: italic;
        color:#9497ff;
        padding-left: 10px;
    }
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
  return (
    <Cotizacion>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} />
        <div>
        <Precio>El Precio es de: <span>{PRICE}</span></Precio>
        <Info>Precio mas alto del dia: <span>{HIGHDAY}</span></Info>
        <Info>Precio mas bajo del dia: <span>{LOWDAY}</span></Info>
        <Info>Variación últimas 24 hr: <span>{CHANGEPCT24HOUR}</span></Info>
        <Info>Última actualización: <span>{LASTUPDATE}</span></Info>
        </div>
    </Cotizacion>
  )
}

export default Resultado