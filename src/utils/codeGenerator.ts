/**
 * Gera um código promocional fixo
 * Retorna sempre o código SHIP300
 * @returns string - Código fixo (SHIP300)
 */
export function generatePromoCode(): string {
  // Código fixo único
  return 'SHIP300';
}

/**
 * Gera um código promocional com prefixo específico
 * @param prefix - Prefixo do código (ex: "PROMO")
 * @param length - Comprimento total do código (padrão: 5)
 * @returns string - Código com prefixo (ex: PROMO300, PROMO7A9B)
 */
export function generatePromoCodeWithPrefix(prefix: string, length: number = 5): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let suffix = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    suffix += characters[randomIndex];
  }
  
  return `${prefix}${suffix}`;
}

/**
 * Gera um código promocional com formato específico
 * @param format - Formato desejado (ex: "XXX-XXX" para A7B-9C2)
 * @returns string - Código formatado
 */
export function generateFormattedPromoCode(format: string): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  
  for (let i = 0; i < format.length; i++) {
    if (format[i] === 'X') {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    } else {
      result += format[i];
    }
  }
  
  return result;
}
