'use server';

import { generateTeamBioBlurbs, GenerateTeamBioBlurbsInput, GenerateTeamBioBlurbsOutput } from '@/ai/flows/generate-team-bio-blurbs';

export async function getTeamBios(data: GenerateTeamBioBlurbsInput): Promise<{ success: boolean; data?: GenerateTeamBioBlurbsOutput['bioBlurbs']; error?: string }> {
  try {
    const result = await generateTeamBioBlurbs(data);
    // The AI model can sometimes return a response that doesn't match the expected schema.
    // This check ensures we have a valid array before proceeding.
    if (result && Array.isArray(result.bioBlurbs)) {
      return { success: true, data: result.bioBlurbs };
    }
    return { success: false, error: 'AI response was invalid or empty.' };
  } catch (error) {
    console.error('Error generating team bios:', error);
    // It's better to provide a more specific error message if possible.
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { success: false, error: `An unexpected error occurred while generating bios: ${errorMessage}` };
  }
}
