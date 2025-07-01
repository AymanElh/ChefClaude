import {HfInference} from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. 

IMPORTANT: Always use metric units for measurements (grams, kilograms, milliliters, liters, etc.) instead of imperial units like pounds, ounces, cups, or tablespoons. For example, use "250g flour" instead of "2 cups flour", or "500ml milk" instead of "2 cups milk".`

// for HF_ACCESS_TOKEN
const hf = new HfInference(import.meta.env.VITE_HUGGING_FACE_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "deepseek-ai/DeepSeek-R1-0528",
            messages: [
                {role: "system", content: SYSTEM_PROMPT},
                {role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`},
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content.slice(7)
    } catch (err) {
        console.error(err.message)
    }
}
