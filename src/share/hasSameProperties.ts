export function hasSameProperties(obj: any, className: any): boolean {
  const classProperties = Object.getOwnPropertyNames(className);
  return classProperties.every((prop) => prop in obj);
} 