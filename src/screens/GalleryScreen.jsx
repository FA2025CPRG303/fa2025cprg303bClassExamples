import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import ArtworkComp from '../components/gallery/artwork';

export default function GalleryScreen() {
  const [singleArtwork, setSingleArtwork] = useState(null);
  const [artworkChange, setArtworkChange] = useState(0);

  const validIds = [
    '436598',
    '436188',
    '438624',
    '437547',
    '438644',
    '436598',
    '437589',
    '437460',
    '435907',
    '435968',
  ];

  async function getArtworkByID(artId) {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`,
      );
      // console.dir(response);
      if (!response.ok) console.log(response.status);
      const data = await response.json();
      setSingleArtwork(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let validIdIndex = Math.floor(Math.random() * validIds.length);
    getArtworkByID( validIds[validIdIndex] );
  }, [artworkChange]);

  return (
    <View style={{ padding: 20 }}>
      <Text>API Art Gallery</Text>
      {singleArtwork ? (
        <ArtworkComp artworkObj={singleArtwork} />
      ) : (
        <Text>Loading...</Text>
      )}
      <Button title="Get Random Artwork" onPress={ () => setArtworkChange( Math.random() ) } />
    </View>
  );
}
