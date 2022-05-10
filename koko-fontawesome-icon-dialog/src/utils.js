export const smartString = (string, charLimit = 60) => {
    if (!string) return "";
    if (!charLimit) return string;
    if (string.length > charLimit) return string.substr(0, charLimit) + "...";
    return string;
  };