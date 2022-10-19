export const PictureItem = ({ description, url }) => {
    return(
        <div className="card">
            <img src={ url } alt={ description } />
            {/* <p>{ description }</p> */}
        </div>
    );
}