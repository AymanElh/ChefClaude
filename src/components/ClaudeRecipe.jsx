import ReactMarkdown from 'react-markdown';

// eslint-disable-next-line react/prop-types
export default function ClaudeRecipe({recipe}) {
    return (
        <section className="suggested-recipe-container">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
    )
}