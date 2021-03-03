import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContextData';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountDown } = useContext(CountdownContext);

  function handleChallengeSucceeded(){
    completeChallenge();
    resetCountDown();
  }
  
  function handleChallengeFailed() {
    resetChallenge();
    resetCountDown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header> Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
            </main>
            <footer>
              <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
              >
                Falhei</button>

              <button 
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}              
              >Completei
              </button>
            </footer>
          
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level up"/>
          Avance de level completanto desafios
        </p>
      </div>
      )}
      
    </div>
  )
}