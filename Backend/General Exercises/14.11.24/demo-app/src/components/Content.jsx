import React from "react";

const Content = () => {
  return (
    <div className="contentCon">
      <div className="ingredients">
        <h2 className="hl2">Ingredients</h2>
        <ul className="ul2">
          <li>2-3 large eggs</li>
          <li> Salt, to taste</li>
          <li> Pepper, to taste</li>
          <li> 1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </div>
      <hr className="hr" />
      <div className="instructions">
        <h2 className="hl2">Instructions</h2>
        <ol>
          <li>
            <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt
            and pepper until they are well mixed. You can add a tablespoon of
            water or milk for a fluffier texture.
          </li>
          <li>
            <b>Heat the pan:</b> Place a non-stick frying pan over medium heat
            and add butter or oil.
          </li>
          <li>
            <b>Cook the omelette:</b> Once the butter is melted and bubbling,
            pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
            surface.
          </li>
          <li>
            <b>Add fillings (optional):</b> When the eggs begin to set at the
            edges but are still slightly runny in the middle, sprinkle your
            chosen fillings over one half of the omelette.
          </li>
          <li>
            <b>Fold and serve:</b> As the omelette continues to cook, carefully
            lift one edge and fold it over the fillings. Let it cook for another
            minute, then slide it onto a plate.
          </li>
          <li> Enjoy: Serve hot, with additional salt and pepper if needed.</li>
        </ol>
      </div>
      <hr />
      <div className="nutrition">
        <h2 className="hl2">Nutrition</h2>
        <p className="p">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <div className="table">
          <div className="column">
            Calories <hr /> Carbs <hr /> Protein <hr /> Fat
          </div>
          <div className="column" id="column2">
            277kcal <hr /> 0g <hr /> 20g <hr /> 22g
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
