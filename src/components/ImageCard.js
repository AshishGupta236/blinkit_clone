function ImageCard(params) {

    var image = params.image;
    var style = params.style;
    console.log(style)
    return(<>
        <img src={image} style={{width:"100%"}}/>
    </>);
}
export default ImageCard;  // export the component for use in other files.