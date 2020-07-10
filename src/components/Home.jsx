import React from "react";
import cheveuxrose from '../../src/components/image/cheveuxrose.webp'
import escapade from '../../src/components/image/escapade.webp'
import logements from '../../src/components/image/logements.webp'
import recette from '../../src/components/image/recette.webp'
import recette2 from '../../src/components/image/recette2.webp'
import recette3 from '../../src/components/image/recette3.webp'

export default function Home() {
  return (
    <div className='accueilGénéral'>
    <h1>Inutile de s'éloigner pour trouver ce qui compte.</h1>
  
  <div className='accueil'>
  <div className='accueil-infos1'>
            <img src = { cheveuxrose } alt = "cheveuxrose" />
            <h3>Expériences en ligne</h3>
            <p>Des activités uniques à faire ensemble, organisées par des hotes du monde entier.</p>
        </div>

        <div className='accueil-infos2'>
            <img src = { escapade } alt = "cheveuxrose" />
            <h3>Escapades à proximité</h3>
            <p>Faites un break et ressourcez-vous à deux pas de chez vous.</p>
        </div>

        <div className='accueil-infos3'>
            <img src = { logements } alt = "cheveuxrose" />
            <h3>Logements entiers</h3>
            <p>Des logements entiers confortables, avec de la place pour accueillir les amis ou la famille.</p>
        </div>
  </div>
  
  
       <div className="infosRecette">
             <h3>Des expériences en ligne avec des grands chefs</h3>
             <p>Cuisinez avec des légendes culinaires et découvrez l'histoire de leurs plats préférés. Participez à des activités interactives, exclusives et animées par des hôtes exceptionnels, sans sortir de chez vous.</p>
           </div>
        
        
        <div className='accueil2'>
           <div className='accueil2-photo1'>
           <img src = { recette } alt = "recette" />
            <p>Apprenez des recettes estivales avec le célèbre chef Rōze Traore</p>
           </div>

           <div className='accueil2-photo2'>
           <img src = { recette2 } alt = "recette" />
            <p>Fruits de mer avec le chef Michelin Marc Favier</p>
           </div>

           <div className='accueil2-photo1'>
           <img src = { recette3 } alt = "recette3" />
            <p>Association de saveurs et dressage avec le chef Michelin Soo Ahn</p>
           </div>

        </div>

        
    </div>
  );
}
