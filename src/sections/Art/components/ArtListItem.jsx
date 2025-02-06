import { baseUrl } from "../../utils/misc";
import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({ item }) {
  return (
    <li>
      <div className="frame">
        <img src={new URL(item.imageURL, baseUrl).href} alt={item.title} />
      </div>
      <h3>{item.title}</h3>
      <p>Artist: {item.artist}</p>
      <PublicationHistoryList history={item.publicationHistory} />
    </li>
  );
}

export default ArtListItem;
