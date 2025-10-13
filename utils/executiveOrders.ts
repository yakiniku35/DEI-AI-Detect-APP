/**
 * Executive Orders Data Structure
 * 
 * This file contains the three executive orders that ComplianceLens uses as context
 * for AI analysis. Each order should be populated with the complete text content.
 * 
 * IMPORTANT: Replace the placeholder text below with the actual executive order content.
 * The AI will use these texts to determine compliance violations and provide suggestions.
 */

// Executive Order 1: Placeholder for the first executive order
// TODO: Replace this placeholder with the actual executive order text
export const EXECUTIVE_ORDER_1 = `
PLACEHOLDER: Executive Order 1
================================

This is a placeholder for the first executive order. Please replace this entire string
with the complete text of the actual executive order.

The executive order should contain:
- Full title and number
- Complete text including all sections and subsections
- Any appendices or attachments
- All legal language and specific requirements

Example format:
"EXECUTIVE ORDER 12345
Title of the Executive Order

By the authority vested in me as President by the Constitution and the laws of the United States of America, it is hereby ordered as follows:

Section 1. Policy.
[Content here]

Section 2. Definitions.
[Content here]

Section 3. Implementation.
[Content here]

[Continue with all sections...]

THE WHITE HOUSE,
[Date]
[President's name]"
`;

// Executive Order 2: Placeholder for the second executive order
// TODO: Replace this placeholder with the actual executive order text
export const EXECUTIVE_ORDER_2 = `
PLACEHOLDER: Executive Order 2
================================

This is a placeholder for the second executive order. Please replace this entire string
with the complete text of the actual executive order.

The executive order should contain:
- Full title and number
- Complete text including all sections and subsections
- Any appendices or attachments
- All legal language and specific requirements

Example format:
"EXECUTIVE ORDER 12346
Title of the Second Executive Order

By the authority vested in me as President by the Constitution and the laws of the United States of America, it is hereby ordered as follows:

Section 1. Policy.
[Content here]

Section 2. Definitions.
[Content here]

Section 3. Implementation.
[Content here]

[Continue with all sections...]

THE WHITE HOUSE,
[Date]
[President's name]"
`;

// Executive Order 3: Placeholder for the third executive order
// TODO: Replace this placeholder with the actual executive order text
export const EXECUTIVE_ORDER_3 = `
PLACEHOLDER: Executive Order 3
================================

This is a placeholder for the third executive order. Please replace this entire string
with the complete text of the actual executive order.

The executive order should contain:
- Full title and number
- Complete text including all sections and subsections
- Any appendices or attachments
- All legal language and specific requirements

Example format:
"EXECUTIVE ORDER 12347
Title of the Third Executive Order

By the authority vested in me as President by the Constitution and the laws of the United States of America, it is hereby ordered as follows:

Section 1. Policy.
[Content here]

Section 2. Definitions.
[Content here]

Section 3. Implementation.
[Content here]

[Continue with all sections...]

THE WHITE HOUSE,
[Date]
[President's name]"
`;

/**
 * Combined executive orders context for AI prompts
 * This combines all three executive orders into a single string for use in AI analysis
 */
export const EXECUTIVE_ORDERS_CONTEXT = `
EXECUTIVE ORDER 1:
${EXECUTIVE_ORDER_1}

EXECUTIVE ORDER 2:
${EXECUTIVE_ORDER_2}

EXECUTIVE ORDER 3:
${EXECUTIVE_ORDER_3}
`;

/**
 * Executive order metadata for reference
 */
export const EXECUTIVE_ORDER_METADATA = {
  order1: {
    title: "Executive Order 1 (Placeholder)",
    date: "TBD",
    description: "First executive order regarding compliance requirements"
  },
  order2: {
    title: "Executive Order 2 (Placeholder)", 
    date: "TBD",
    description: "Second executive order regarding compliance requirements"
  },
  order3: {
    title: "Executive Order 3 (Placeholder)",
    date: "TBD", 
    description: "Third executive order regarding compliance requirements"
  }
};
