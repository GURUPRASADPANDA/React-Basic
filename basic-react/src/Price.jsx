export default function Price({oldPrice ,newPrice}){
    return (
        <div>
            <span><del>{oldPrice}</del></span>
            &nbsp;&nbsp;
            <span><ins><b>{newPrice}</b></ins></span>
        </div>
    );
}