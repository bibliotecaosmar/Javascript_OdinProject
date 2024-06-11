// Logical Calc
// ===========================================

const negation = (p, pos, no = 'não') => {
  const words = p.split(' ')
  words.splice(2, 0, no)
  return words.join(' ')
}

const conditional = (p, q) => {
  return `se ${p}, então ${q}`
}

const orNonExclusionary = (p, q) => {
  return `${p} ou ${q}`
}

const andLogical = (p, q) => {
  return `${p} e ${q}`
}

const conditionalNegation = (p, q, no = negation, an6 = andLogical) => {
  return `    -${an6(p, no(q))}`
}

const disjunctionEquivalence = (p, q, no = negation, cond = conditional) => {
  return `    -${cond(no(q), p)}` // Negação da conjunção primeiro
}

const conditionalEquivalence = (p, q, no = negation, cond = conditional, orNon = orNonExclusionary) => {
  return `    -${cond(no(q), no(p))}\n    -${orNon(no(p), q)}`
}

const morganEquivalenceAnd = (p, q, no = negation, cond = conditional) => {
  return `    -${cond(no(q), no(p))}\n    -${orNon(no(p), q)}`
}


// =================================================================================

const statementEquivalence = (p, q, logicalOperator) => { 
    return `${logicalOperator(p, q)} equivale a . . .\n`
}

const statementNegation = (p, q, logicalOperator) => { 
    return `${logicalOperator(p, q)} negado é . . .\n`
}


const p = 'o corpo sobrevive'
const q = 'o cérebro interpretou'

console.log(statementEquivalence(p, q, conditional), conditionalEquivalence(p, q))