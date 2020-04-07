
// display helpers

// slurped from https://www.codeproject.com/Articles/11009/Proper-Case-JavaScript-Function
export const toProperCase = (s) => {
    return s.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) {
      return $1.toUpperCase();
    });
  };
  

  const format = (s) => {
    if (Object.keys(s).length === 0) return s;
    const f = { ...s };
    f.nextEvent = new Date(f.nextEvent * 1e3)
      .toISOString()
      .replace("T", " ")
      .replace(".000", " ");
    return f;
  };

  const formatProperty = (o,p, f) =>{
      const t = p.split(/(?=[A-Z])/).join(' ');
      o[t]=f(o[p])
      delete o[p];
  }