import Link from "next/link";
import Avatar from "./avatar";
import Details from "./details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.image} />
      </div>
      <div className="bottom">
        <Link href={`https://twitter.com/${props.twt}`}>
          <Details detailInfo={props.twt} />
        </Link>
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
