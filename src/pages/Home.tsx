import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import Main from '../components/main';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen >
        <Main></Main>
      </IonContent>
    </IonPage>
  );
};

export default Home;
