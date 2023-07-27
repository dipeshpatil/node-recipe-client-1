/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";

import { getRecipes } from "../../scripts/dashboard";

export default function Dashboard() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes()
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {recipes.length > 0 &&
        recipes.map((recipe) => {
          console.log(recipe);
          const {
            createdBy,
            description,
            instructions,
            ingredients,
            title,
            image,
          } = recipe;
          return (
            <div key={Math.random()}>
              <div className="w-full md:w-3/5 md:mx-auto md:rounded bg-white">
                {image && (
                  <img
                    className="w-full h-40 object-cover"
                    src={image}
                    alt={title}
                  />
                )}
                <div className="px-6 py-4">
                  <div className="flex font-bold text-xl mb-2">
                    <span className="flex-1">{title}</span>
                    <span className="text-gray-500">~ {createdBy.name}</span>
                  </div>
                  <div className="float-right space-x-2">
                    <button
                      onClick={() => null}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => null}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                    >
                      Delete
                    </button>
                  </div>
                  <p className="text-gray-700 text-base">{description}</p>

                  <p className="font-bold text-base mt-4">Ingredients:</p>
                  <div class="flex flex-wrap space-x-2 my-4">
                    {ingredients.map(({ name, quantity }) => (
                      <div
                        key={Math.random()}
                        className="custom-pill-container"
                      >
                        <div className="pill-item">{name}</div>
                        <div className="pill-quantity">{quantity}</div>
                      </div>
                    ))}
                  </div>
                  {/* <ul className="list-disc ml-5 mb-4">
                    {ingredients.map(({ name, quantity }) => (
                      <li key={Math.random()}>{name + " - " + quantity}</li>
                    ))}
                  </ul> */}
                  <p className="font-bold text-base mt-4">Recipe Procedure:</p>
                  {instructions.split("\n").map((instruction) => (
                    <p key={Math.random()}>{instruction}</p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

// https://cdn.gencraft.com/prod/user/d4c375cb-2866-41e0-b5d9-20482fccaa22/bf1ee4d6-f00e-4eb5-8914-4592b4240754/images/image0_1024_1024_watermark.jpg?Expires=1690566437&Signature=S5a-U~KrBScyaoXEtbypI3ska7T-EXUm9A2ZFUDVYQ4LzwpWwOsW50A0DklgEl3mjT26KUz0lLi5v3RJW61Ay-Z4DkbCqN03a22dzYobaP5CJwzBjCEkd8KUF4ribFDb15U9ExVUPKQEekaWihawOh6KL-LoObqo9rDmOy7VfcgGlu2g~LWiUSPYgNLEjz1yhMdXLHz9bZ5eDQj0Bv9pMcgLep3vmZugbrl8YiiaN9o75rFpHBKBFKKXkj6~lHCPMKh9WzDZ8jjXCqk53v~2b8QPvvU65S4jc~5m054KklbZ1zgqGWhxJVcGltm3RlqeeRxYVQmbKno9wTUFLxmdcw__&Key-Pair-Id=K3RDDB1TZ8BHT8
// https://cdn.gencraft.com/prod/user/d4c375cb-2866-41e0-b5d9-20482fccaa22/c609c388-6b5c-437e-bc65-cdda6f8bee47/images/image0_1024_1024_watermark.jpg?Expires=1690567329&Signature=mlWsrommkZSD8ju4ZtHvI3XM5CMz82nI~4D4AHL02tr~uTtlXTgdHpCJux~1fLTFCgIHR2j7kFnmRmh2WVUbMLqFrjgd3uHPEKGilYXaUfURsBAp1xBacvWDhaCVUZMTlQudDizdQtKdvJCmc8te1-f6WWnCeohN1sa~4OcPqaKUSHhznYNrjs~NbC1fS-YgDrHCSD3fIv8ggdwuf1a8dKgI8pyTuCmvQy0uVm8H7Yvx9rRPOKk1SpWQgK~bdvJY9JCQt6jJ5T6qkGbw22C1GTGWYtwDU4g8JqNH9NttmmJsxmMhHN7uhdqWFYr9VR0r7DckwxBEmtZppoPtTem-LA__&Key-Pair-Id=K3RDDB1TZ8BHT8
