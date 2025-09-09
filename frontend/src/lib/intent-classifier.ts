import { type ClassifyResponse } from "../shared/schema";
import { apiRequest } from "./queryClient";

export class IntentClassifier {
  async classifyIntent(text: string, sessionId: string): Promise<ClassifyResponse> {
    try {
      const response = await apiRequest('POST', '/api/classify-intent', {
        text,
        sessionId,
      });
      
      return await response.json();
    } catch (error) {
      console.error('Intent classification failed:', error);
      throw new Error('Failed to classify intent. Please try again.');
    }
  }

  async analyzeImage(file: File, sessionId: string): Promise<{ success: boolean; message: string; fileName: string }> {
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('sessionId', sessionId);

      const response = await fetch('/api/analyze-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Image analysis failed:', error);
      throw new Error('Failed to analyze image. Please try again.');
    }
  }
}

export const intentClassifier = new IntentClassifier();
