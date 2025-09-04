import { useState, useCallback } from 'react';
import { generatePromoCode } from '../utils/codeGenerator';

/**
 * Hook personalizado para gerenciar códigos promocionais
 * Permite gerar novos códigos e manter o estado atual
 */
export function usePromoCode(initialCode?: string) {
  const [currentCode, setCurrentCode] = useState<string>(
    initialCode || generatePromoCode()
  );

  /**
   * Gera um novo código promocional
   */
  const generateNewCode = useCallback(() => {
    const newCode = generatePromoCode();
    setCurrentCode(newCode);
    return newCode;
  }, []);

  /**
   * Gera um novo código e retorna o anterior
   */
  const regenerateCode = useCallback(() => {
    const oldCode = currentCode;
    const newCode = generatePromoCode();
    setCurrentCode(newCode);
    return { oldCode, newCode };
  }, [currentCode]);

  return {
    currentCode,
    generateNewCode,
    regenerateCode,
    setCurrentCode
  };
}
