export function ConvertWeiToEther(wei) {
  return wei / Math.pow(10, 18);
}

export function ConvertHexToWei(hexValue) {
  let hexArray = new Array();
  if (hexValue) {
    hexArray = hexValue.split("").reverse();
    let wei = 0;
    for (let i = 0; i < hexArray.length; i++) {
      wei += calculateHexToDecimalValue(hexArray[i], i);
    }
    return wei;
  }
  else {
    return 0;
  }
}

const calculateHexToDecimalValue = (hexValue, power) => {
  if (hexValue) {
    const decimalValue = convertHexToDecimal(hexValue);
    return decimalValue * Math.pow(16, power);
  } else {
    return 0;
  }
}
const convertHexToDecimal = (hex) => {
  switch (hex.toUpperCase()) {
    case 'A': {
      return 10;
    }
    case 'B': {
      return 11;
    }
    case 'C': {
      return 12;
    }
    case 'D': {
      return 13;
    }
    case 'E': {
      return 14;
    }
    case 'F': {
      return 15;
    }
    default:
      return hex;
  }
}