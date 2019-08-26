function meeting(s) {
  s = s.toUpperCase();
  let nameList = [];
  let name = "";
  let fullName = [];
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

  nameList.sort()

  console.log(nameList);
}
meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull");