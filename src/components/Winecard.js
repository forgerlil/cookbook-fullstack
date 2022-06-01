export default function Winecard ({wine}) {

  // Winecard component that populates a wine card in relation to the chosen recipe (the idea is that each recipe has a specific
  // wine suggestion attached to it)
  return (
    <div className="col-12 col-lg-6 mb-4 wine-card">
      <div className="card wine-card-style">
        <img className="card-img-top img-fluid" src={wine.wine_image_url} alt="Wine suggestion" />
          <div className="card-body">
            <h5 className="card-title">{wine.wine_name}</h5> 
              <p className="card-text winecard-text">{wine.wine_description}</p>
              <a href={wine.wine_url} className="btn btn-primary btn-block">Order our wine suggestion</a>                 
          </div>
      </div>
    </div>
  )
}