function meeting(s) {
  s = s.toUpperCase();
  console.log(s);
  let nameList = [];
  let name = "";
  let fullName = [];
  let finalString = "";
  for(let i = 0; i < s.length; i++)
  {
    if(s.charAt(i) != ":" && s.charAt(i) != ";")
    {
      name = name.concat(s.charAt(i));
      // Push LAST last name 
      if(i == s.length - 1)
      {
        fullName.push(name);
      }
    }
    else if(s.charAt(i) == ":")
    {
      fullName.push(name);
      name = "";
    }
    else if(s.charAt(i) == ";")
    {
      fullName.push(name);
      name = "";
    }

    if(fullName.length == 2)
    {
      nameList.push(fullName);
      fullName = [];
    }
  }

  nameList.sort(function(a, b) { 
    if ( a[0] == b[0] ) return 0;
    return a[0] < b[0] ? -1 : 1;
  });
  nameList.sort(function(a, b) { 
    if ( a[0] < b[0] && a[1] == b[1] ) return -1;
    return a[1] < b[1] ? -1 : 1;
  });

  for(let i = 0; i < nameList.length; i++)
  {
    finalString = finalString.concat("(" + nameList[i][1] + ", " + nameList[i][0] + ")");
  }

  console.log(nameList);
  return finalString;
}
meeting("Anna:Wahl;Grace:Gates;James:Russell;Elizabeth:Rudd;Victoria:STAN;Jacob:Wahl;Alex:Wahl;Antony:Gates;Alissa:Meta;Megan:Bell;Amandy:Stan;Anna:Steve");

/*  
  Other Solution:

  function meeting(s) {
    let string = s.toUpperCase().split(';')
                  .map(x => x.split(':').reverse().join(', '))
                  .sort()
                  .join(')(')
    return '(' + string + ')'
  }
*/