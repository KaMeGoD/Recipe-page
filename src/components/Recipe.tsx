import './style.css';

interface PropsRecipePage{
  imgRecipe: string;
  titleRecipe: string;
  descriptionRecipe: string;
  timeTotal: number;
  timePreparation: number;
  timeCooking: number;
  ingredients1: string;
  ingredients2: string;
  ingredients3: string;
  ingredients4: string;
  ingredients5: string;
  titleInstruction1: string;
  titleInstruction2: string;
  titleInstruction3: string;
  titleInstruction4: string;
  titleInstruction5: string;
  titleInstruction6: string;
  textInstruction1: string;
  textInstruction2: string;
  textInstruction3: string;
  textInstruction4: string;
  textInstruction5: string;
  textInstruction6: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
}
export const RecipePage: React.FC<PropsRecipePage> = ({ 
  imgRecipe, 
  titleRecipe,
  descriptionRecipe,
  timeTotal,
  timePreparation,
  timeCooking,
  ingredients1,
  ingredients2,
  ingredients3,
  ingredients4,
  ingredients5,
  titleInstruction1,
  titleInstruction2,
  titleInstruction3,
  titleInstruction4,
  titleInstruction5,
  titleInstruction6,
  textInstruction1,
  textInstruction2,
  textInstruction3,
  textInstruction4,
  textInstruction5,
  textInstruction6,
  calories,
  carbs,
  protein,
  fat
}) => {
  return (
    <>
      <section role="page" className="recipePage">
        <img className='imgRecipe' src={imgRecipe} alt="Recipe" />
        <div className=''>
          <h1 className='tituloPrincipal'>{titleRecipe}</h1>
          <p className='textPrincipal'>{descriptionRecipe}</p>
          <div className='preparationTime'>
            <h3>Preparation time</h3>
            <nav>
              <ul>
                <li className='red'>
                  <p className='textNav'><span className='titleNav'>Total: </span>Approximately {timeTotal} minutes</p>
                </li>
                <li className='red'>
                  <p className='textNav'><span className='titleNav'>Preparation: </span>{timePreparation} minutes</p>
                </li>
                <li className='red'>
                  <p className='textNav'><span className='titleNav'>Cooking: </span>{timeCooking} minutes</p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='bottonLine'>
          <h2 className='tituloSecundario'>Ingredients</h2>
          <nav>
            <ul>
              <li className='red'><p className='textNav'>{ingredients1}</p></li>
              <li className='red'><p className='textNav'>{ingredients2}</p></li>
              <li className='red'><p className='textNav'>{ingredients3}</p></li>
              <li className='red'><p className='textNav'>{ingredients4}</p></li>
              <li className='red'><p className='textNav'>{ingredients5}</p></li>
            </ul>
          </nav>
        </div>
        <div className='bottonLine'>
          <h2 className='tituloSecundario'>Instructions</h2>
          <nav>
            <ol>
              <li className='red'><p className='textNav'><span className='titleNav'>{titleInstruction1}: </span>{textInstruction1}</p></li>
              <li className='red'><p className='textNav'><span className='titleNav'>{titleInstruction2}: </span>{textInstruction2}</p></li>
              <li className='red'><p className='textNav'><span className='titleNav'>{titleInstruction3}: </span>{textInstruction3}</p></li>
              <li className='red'><p className='textNav'><span className='titleNav'>{titleInstruction4}: </span>{textInstruction4}</p></li>
              <li className='red'><p className='textNav'><span className='titleNav'>{titleInstruction5}: </span>{textInstruction5}</p></li>
              <li className='red'><p className='textNav'><span className='titleNav'>{titleInstruction6}: </span>{textInstruction6}</p></li>
            </ol>
          </nav>
        </div>
        <div className='nutrition'>
          <h2 className='tituloSecundario'>Nutrition</h2>
          <p className='textNav textNutrition'>The table below shows nutritional values per serving without the additional fillings.</p>
          <table className='tableNutrition'>
            <tr>
              <td className='textNav bottonLine'>Calories</td>
              <td className='titleNav bottonLine red'>{calories}kcal</td>
            </tr>
            <tr>
              <td className='textNav bottonLine'>Carbs</td>
              <td className='titleNav bottonLine red'>{carbs}g</td>
            </tr>
            <tr>
              <td className='textNav bottonLine'>Protein</td>
              <td className='titleNav bottonLine red'>{protein}g</td>
            </tr>
            <tr>
              <td className='textNav'>Fat</td>
              <td className='titleNav red'>{fat}g</td>
            </tr>
          </table>
        </div>
      </section>
    </>
  )
}