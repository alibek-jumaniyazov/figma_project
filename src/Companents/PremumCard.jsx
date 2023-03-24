export default function PremumCard({item}) {
    return(
        <div className="PremumCard">
            <span className="premumTitle">{item.name}</span>
            <h1><span className="priceDolar">$</span>{item.price}<span className="priceMuddat">/mo</span> </h1>
            <p>5 Psd fles included</p>
            <p>24 hours free support</p>
            <p>Multiple features installed</p>
            <p>100 Elements PSD + Al</p>
            <a  className="btn-footer"> Subscribe</a>
        </div>
    )
}