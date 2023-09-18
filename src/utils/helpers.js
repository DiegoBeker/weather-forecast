export function kelvinToCelsius(kelvin) {
    const celsius = kelvin - 273.15;
    return celsius.toFixed(1);
}

export function capitalizeString(str) {
    if (str.length === 0) {
      return str;
    }
    
    const firstLetter = str.charAt(0).toUpperCase();
    const restOfString = str.slice(1);
    
    return firstLetter + restOfString;
  }