const TextWithSuggestion = () => {
    return (
        <>
            <input type="text" className="input" placeholder="Which skills do you have" list="skills" />
            <datalist id="skills">
                <option value="React"></option>
                <option value="Node"></option>
                <option value="JavaScript"></option>
                <option value="TypeScript"></option>
                <option value="Frontend"></option>
            </datalist>
        </>
    )
}

export default TextWithSuggestion;