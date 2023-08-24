import "./Quote.css"
function Quote(params) {
    return (
        <div className="quote" key={params.key}>
            <strong>
                {params.author}, {params.title}
            </strong>
            <p className="quoteText">
                {params.quote}
            </p>
        </div>
    )
}

export default Quote;