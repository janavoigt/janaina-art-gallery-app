import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import { useArtPiecesStore } from "@/stores/pieces";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        </li>
      ))}
    </div>
  );
}
