enum ProgrammingLanguage {
  JavaScript,
  TypeScript,
  HTML,
  CSS,
  Java,
}

describe('universe-demo-describeProgrammingLanguage', () => {
  it('it describes javascript', () => {
    const result = describeProgrammingLanguage(ProgrammingLanguage.JavaScript)
    expect(result).toBe('Yeah.. It is pretty good.')
  })

  it('it can not descripe java', () => {
    const result = describeProgrammingLanguage(ProgrammingLanguage.Java)
    expect(result).toBe(`Don't know what you are talking about..`)
  })
})
