export const scenarios = [
  { key: 'celebration', label: 'Positive Note' },
  { key: 'academic', label: 'Academic Update' },
  { key: 'behavior_followup', label: 'Behavior Follow-up' },
  { key: 'iep_recap', label: 'IEP/Meeting Recap' }
]

export function draftForScenario(s: string, opts: { studentName: string; familyName?: string; detail?: string; nextStep?: string; }) {
  const { studentName, familyName = 'there', detail = '', nextStep = '' } = opts
  const base = {
    celebration: `Hi ${familyName},\n\nI wanted to share a quick win from ${studentName} today: ${detail}. Thank you for your partnership — is there anything you’re seeing at home we can build on?`,
    academic: `Hi ${familyName},\n\nA brief update on ${studentName}'s learning: ${detail}. I’ll keep sharing specific examples. Would you prefer quick Friday summaries or a midweek note?`,
    behavior_followup: `Hi ${familyName},\n\nI want to partner with you about ${studentName}. Today I observed: ${detail} (what I saw/heard). At school we’ll try: ${nextStep}. What works well at home that we can try here?`,
    iep_recap: `Hi ${familyName},\n\nThank you for meeting today about ${studentName}. Here are the key points we reviewed in plain language: ${detail}. I’ll follow up by ${nextStep}. Please reply with questions or additions.`
  } as const
  return (base as any)[s] ?? ''
}
