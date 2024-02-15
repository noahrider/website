function convertSize() {
    // Get values from the input fields
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const inputSize = parseFloat(document.getElementById("inputSize").value);

    // Perform the conversion
    let result;
    switch (fromUnit) {
        case "KB":
          result = convertFromKB(inputSize, toUnit);
          break;
        case "MB":
          result = convertFromMB(inputSize, toUnit);
          break;
        case "GB":
          result = convertFromGB(inputSize, toUnit);
          break;
        case "TB":
          result = convertFromTB(inputSize, toUnit);
          break;
        case "PB":
          result = convertFromPB(inputSize, toUnit);
          break;
        default:
          result = "Invalid input";
      }      

    // Display the result
    document.getElementById("result").innerText = `${inputSize} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit} (in binary)`;
  }

  function convertFromKB(size, toUnit) {
    switch (toUnit) {
      case "KB":
        return size;
      case "MB":
        return size / 1024;
      case "GB":
        return size / Math.pow(1024, 2);
      case "TB":
        return size / Math.pow(1024, 3);
      case "PB":
        return size / Math.pow(1024, 4);
      default:
        return NaN;
    }
  }
  
  function convertFromMB(size, toUnit) {
    switch (toUnit) {
      case "KB":
        return size * 1024;
      case "MB":
        return size;
      case "GB":
        return size / 1024;
      case "TB":
        return size / Math.pow(1024, 2);
      case "PB":
        return size / Math.pow(1024, 3);
      default:
        return NaN;
    }
  }
  
  function convertFromGB(size, toUnit) {
    switch (toUnit) {
      case "KB":
        return size * Math.pow(1024, 2);
      case "MB":
        return size * 1024;
      case "GB":
        return size;
      case "TB":
        return size / 1024;
      case "PB":
        return size / Math.pow(1024, 2);
      default:
        return NaN;
    }
  }
  
  function convertFromTB(size, toUnit) {
    switch (toUnit) {
      case "KB":
        return size * Math.pow(1024, 3);
      case "MB":
        return size * Math.pow(1024, 2);
      case "GB":
        return size * 1024;
      case "TB":
        return size;
      case "PB":
        return size / 1024;
      default:
        return NaN;
    }
  }
  
  function convertFromPB(size, toUnit) {
    switch (toUnit) {
      case "KB":
        return size * Math.pow(1024, 4);
      case "MB":
        return size * Math.pow(1024, 3);
      case "GB":
        return size * Math.pow(1024, 2);
      case "TB":
        return size * 1024;
      case "PB":
        return size;
      default:
        return NaN;
    }
  }