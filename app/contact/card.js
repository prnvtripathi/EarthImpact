import Avatar from "./Avatar";
import Details from "./details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.image} />
      </div>
      <div className="bottom">
        <Details detailInfo={props.twt} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
