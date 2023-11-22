import "./styles/QuoteBox.css"
const QuoteBox = ({quote, handleChangeQuote}) => {
    const {phrase, author} = quote
    return (
        <article className="quotebox">
            <h1 className="quotebox__title box">
                INFOGALAX
            </h1>
            <div>
                <b><p className="quotebox__box">{phrase}</p></b>
            </div>
            <button className="quotebox__btn" onClick={handleChangeQuote}>
                <img src="/boton.svg" alt="" />
            </button>
            <span className="quotebox__author">
                {author}
            </span>
        </article>
    )
}
export default QuoteBox