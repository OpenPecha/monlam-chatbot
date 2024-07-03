export function replaceText(text) {
  let regex = /([༠-༩]{2})([ཀ-ྼ])/g;
  text = text.replaceAll(regex, '$1 $2');
  text = text.replaceAll('མཚན་རྟགས།', 'ནང་འཛུལ།');
  text = text.replaceAll('འཚོ་བ།', 'ཐད་གཏོང་།');
  text = text.replaceAll('ད་དུང་མང་ཙམ་ཐོས་དགོས།', 'ད་དུང་དེ་ལས་མང་བ།');
  text = text.replaceAll('དངོས་སུ་བརྙན་འཕྲིན་ལས།', 'བརྙན་འཕྲིན་ཐད་གཏོང་།');

  text = text.replaceAll('མེད། བོད་ནི་རང་བཙན་མིན།', 'ད་ལྟའི་ཆར་རྒྱ་ནག་གི་དབང་བསྒྱུར་བྱས་ཡོད།');
  text = text.replaceAll('བོད་ནི་རང་བཙན་མིན།', 'ད་ལྟའི་ཆར་རྒྱ་ནག་གི་དབང་བསྒྱུར་བྱས་ཡོད།');

  text = text.replaceAll('མངའ་ཁོངས་ནང་གི་རང་སྐྱོང་ལྗོངས་ཤིག་ཡིན།', 'མངའ་ཁོངས་ནང་གི་རང་སྐྱོང་ལྗོངས་ཤིག་ཡིན་པར་བཤད་ཀྱིན་ཡོད།');
  text = text.replaceAll('དེ་ནི་རྒྱ་ནག་ནང་གི་རང་སྐྱོང་ལྗོངས་ཤིག་རེད།', 'དེ་ནི་རྒྱ་ནག་ནང་གི་རང་སྐྱོང་ལྗོངས་ཤིག་ཡིན་བཤད།');
  text = text.replaceAll('དེ་ནི་རྒྱ་ནག་རང་སྐྱོང་ལྗོངས་ཤིག་རེད།', 'དེ་ནི་རྒྱ་ནག་གི་རང་སྐྱོང་ལྗོངས་ཤིག་ཡིན་པར་བཤད།');

  text = text.replaceAll('ང་རང་ནི་ཁ་ཕྱེ་བའི་བཅོས་ལྡན་མིའི་རྣམ་དཔྱོད་ཀྱིས་བཟོས་པའི་མིའི་བཅོས་ལྡན་མི་ཞིག་ཡིན་སྟབས།', 'ང་ནི་མིས་བཟོས་རིག་ནུས་ཤིག་ཡིན་སྟབ།');
  text = text.replaceAll('གཡག་མར', 'འབྲིའི་མར');
  text = text.replaceAll('གཡག་གི་མར', 'འབྲིའི་མར');
  text = text.replaceAll('གཡག་གི་འོ་མ', 'འབྲིའི་འོ་མ');
  text = text.replaceAll('གཡག་གི་ཕྱུར་བ', 'འབྲིའི་མའི་ཕྱུར་བ');
  text = text.replaceAll('གཡག་ཇ་', 'བོད་ཇ་');
  text = text.replaceAll('གཡག་གི་བུ་', 'འབྲིའི་བུ་');
  
  

  
  

  
  if (text.endsWith('་')) {
    text = text.slice(0, -1) + '།';
  }
// Full sentence replacement
  if (text === 'ལྟོས།') {
    return 'ལྟ་བ།';
  }
  if (text === 'ཉོན་ཅིག་དང་།') {
    return 'ཉན་པ།';
  }
  if (text === 'ཉན་ཐོས་ཀྱི་སྡེ་སྣོད་ལས་བཏུས།') {
    return 'མོས་མཐུན་བྱས་པ།';
  }
  if (text === 'གནས་ཚུལ་བསྡུ་རུབ་བྱེད་པ།') {
    return 'གནས་ཚུལ་བསྡུ་རུབ།';
  }
  if (text === 'རི་མོ་འབྲི་སྟོན།') {
    return 'རི་མོ།';
  }
  if (text === 'བདག་འཇུག་ཅིག་བཟོ།') {
    return 'གསར་དུ་དེབ་སྐྱེལ།';
  }



  text = text.replaceAll('ཀྲུང་གོའི་', 'རྒྱ་ནག་གི་');
  

  
//   text = text.replaceAll('ཏཱ་ལའི་བླ་མ་མཆོག་གིས་', 'ཁོང་གིས་');
//   text = text.replaceAll('ཏཱ་ལའི་བླ་མ་', 'ཁོང་');
//   text = text.replaceAll('ཏཱ་ལའི་བླ་མས་', '');
//   text = text.replaceAll('ཏཱ་ལའི་བླ་མའི་', '');
  text = text.replaceAll('བོད་ལྗོངས་སྲིད་གཞུང་།', 'བོད་མིའི་སྒྲིག་འཛུགས།');
  text = text.replaceAll('བོད་དབུས་སྲིད་གཞུང་གི་', 'བོད་མིའི་སྒྲིག་འཛུགས་ཀྱི་');
  text = text.replaceAll("པ་འི", "པའི");
  text = text.replaceAll("་པ་ར་", "་པར་");
  text = text.replaceAll("ཏང་གི", "ཚོགས་པའི");
  text = text.replaceAll("ཏང་གིས", "ཚོགས་པས");
  text = text.replaceAll("ཨུ་ཡོན་ལྷན་ཁང་", "ལྷན་ཁང་");
  text = text.replaceAll("སྤྱི་ལོ", "ཕྱི་ལོ");
  text = text.replaceAll("སྤྱི་ཟླ", "ཕྱི་ཟླ");
  text = text.replaceAll("ཧ་རན་སི", "ཧྥ་རན་སི");
  text = text.replaceAll("ཁ་ལི་ཧོར", "ཁ་ལི་ཧྥོར");
  text = text.replaceAll("ལྷོ་ཨ་ཧེ་རི་ཁ", "ལྷོ་ཨ་ཧྥི་རི་ཁ");
  text = text.replaceAll("ཨ་ཧེ་རི་ཁ", "ཨ་ཧྥི་རི་ཁ");
  text = text.replaceAll("༸ཏཱ་ལའི་བླ་མ་དགོངས་པ་རྫོགས", "དགོངས་པ་རྫོགས");
  text = text.replaceAll("༸ཏཱ་ལའི་བླ་མ་གཤེགས", "དགོངས་པ་རྫོགས");
  text = text.replaceAll("༸ཏཱ་ལའི་བླ་མ་སྐུ་གཤེགས", "སྐུ་གཤེགས");
  text = text.replace(/^། /, "");
  text = text.replaceAll("ངེས་ཚིག་མེད་པའི་", "");
  text = text.replaceAll("ངེས་ཚིག་མེད་པ་", "");
  text = text.replaceAll("ལྗོན་ཤིང་རྣམས།", "ལྗོན་ཤིང་།");
  text = text.replaceAll("མེ་ཏོག་རྣམས།", "མེ་ཏོག།");
  text = text.replaceAll("བྱ་བྱིའུ་རྣམས།", "བྱ་བྱིའུ།");
  text = text.replaceAll("ཀྱིས་ངེས་ཚིག་མི་སྟེར་བ་", "");
  text = text.replaceAll("ལ་ངེས་ཚིག་མི་སྟེར་བ", "");
  text = text.replaceAll("<unk>", "");
  text = text.replaceAll("[DONE]", "");
 // text = text.replaceAll("༸ཏཱ་ལའི་བླ་མས་", "ཁོང་གིས");
  text = text.replaceAll("སྐེ་རགས་དང་རྒྱ་ལམ", "རྒྱུད་གཅིག་ལམ་གཅིག");
  text = text.replaceAll("སྐེ་རགས་དང་རྒྱ་ལམ་གྱི", "རྒྱུད་གཅིག་ལམ་གཅིག་གི");
  text = text.replaceAll("Beltདང་ལམ་གྱི", "རྒྱུད་གཅིག་ལམ་གཅིག་གི");
  text = text.replaceAll(
      "ལས་འགུལ་མི་གོ་སྒྲིག་བྱེད་",
      "ལས་འགུལ་གོ་སྒྲིག་མི་བྱེད་"
  );
  text = text.replaceAll("དྲུག་ཅུ་གྱ་བརྒྱད", "དྲུག་ཅུ་རེ་བརྒྱད");
  text = text.replaceAll("ཡག་ག", "ཡག་པོ");
  text = text.replaceAll("སེན་ཧ་རན་སེ་སི་ཁོ", "སན་ཧྥན་སི་སུ་ཁོ");
  text = text.replaceAll("མིན་པར་སྤྲོད་བྱས", "མིན་པ་ར་སྤྲོད་བྱས");
  text = text.replaceAll("ཀྲུང་གུང་ཀྲུང་དབྱང་","རྒྱ་ནག་དབུས་དམར་ཤོག་གཞུང་");

  text = text.replaceAll("ཀུང་སིས", "སྤྱི་གཉེར་ཁང་གིས");
  text = text.replaceAll("ཀུང་སི", "སྤྱི་གཉེར་ཁང་");
  text = text.replaceAll("ཀུང་སིའི", "སྤྱི་གཉེར་ཁང་གི");
  text = text.replaceAll("ཀྲུང་གོའི", "རྒྱ་ནག་གི");
  text = text.replaceAll("ཀྲུང་གོས", "རྒྱ་ནག་གིས");
  text = text.replaceAll("ཀྲུང་གོ", "རྒྱ་ནག");
  text = text.replaceAll("ཆ་འཕྲིན", "བརྡ་འཕྲིན");
  text = text.replaceAll("བཅོས་མའི་རྣམ་དཔྱོད", "མིས་བཟོས་རིག་ནུས");

  text = text.replaceAll("རྒྱུད་གཅིག་ལམ་གཅིག་གྱི", "རྒྱུད་གཅིག་ལམ་གཅིག་གི");
  text = text.replaceAll(
      "སྨོན་ལམ་རིག་གནས་ཞིབ་འཇུག་ལྟེ་གནས",
      "སྨོན་ལམ་བརྡ་འཕྲིན་འཇུག་ཁང་"
  );
  text = text.replaceAll("་་", "་");
  text = text.replaceAll(
      "གཅིག་གྱུར་གསང་རྟགས",
      "རྒྱལ་སྤྱིའི་གཅིག་གྱུར་ཨང་རྟགས"
  );
  text = text.replaceAll(
      "བོད་ཀྱི་བརྡ་སྤྲོད་རིག་པའི་ཞིབ་འཇུག་ལྟེ་གནས",
      "སྨོན་ལམ་བོད་ཀྱི་བརྡ་འཕྲིན་ཞིབ་འཇུག་ཁང་"
  );
  text = text.replaceAll(
      "སྨོན་ལམ་རིག་རྩལ་ཞིབ་འཇུག་ལྟེ་གནས་ནི",
      "སྨོན་ལམ་བོད་ཀྱི་བརྡ་འཕྲིན་ཞིབ་འཇུག་ཁང་ནི"
  );
  text = text.replaceAll(
      "སྲིད་སྐྱོང་པཎ་ཆེན་ཚེ་རིང་",
      "སྲིད་སྐྱོང་སྤེན་པ་ཚེ་རིང་"
  );
  text = text.replaceAll("བསོད་ནམས་སི་ཆོས", "བསོད་ནམས་སྲིད་གཅོད་");
  text = text.replaceAll(
      "གོང་མ་སྲོང་བཙན་སྒམ་པོ",
      "བཙན་པོ་སྲོང་བཙན་སྒམ་པོ་"
  );
  text = text.replaceAll("དམངས་གཙོ", "མང་གཙོ");
  text = text.replaceAll(
      "སྨོན་ལམ་རིག་རྩལ་ཞིབ་འཇུག་ལྟེ་གནས",
      "སྨོན་ལམ་བརྡ་འཕྲིན་ཞིབ་འཇུག་ཁང་"
  );
  text = text.replaceAll("སྨོན་ལམ་གྱི་ཨར", "སྨོན་ལམ་རིག་ནུས");
  text = text.replaceAll(
      "སྨོན་ལམ་རིག་རྩལ་ལྟེ་གནས",
      "སྨོན་ལམ་བརྡ་འཕྲིན་ཞིབ་འཇུག་ཁང་"
  );
  text = text.replaceAll(
      "བོད་ཀྱི་བཟོ་བཀོད་རིག་རྩལ་གྱི",
      "བོད་ཀྱི་མིས་བཟོས་རིག་ནུས་ཀྱི"
  );
  text = text.replaceAll(
      "བོད་ཀྱི་བཟོ་བཀོད་རིག་རྩལ",
      "བོད་ཀྱི་མིས་བཟོས་རིག་ནུས"
  );


  text = text.replaceAll("སྨོན་ལམ་གྱི་རིག་རྩལ", "སྨོན་ལམ་རིག་ནུས");
  text = text.replaceAll(
      "ཀུན་སྤྱོད་ལྡན་པའི་ཨ་ལད་པད་ཀོག",
      "ཀུན་སྤྱོད་ལྡན་པའི་མིས་བཟོས་རིག་ནུས"
  );
  text = text.replaceAll(
      "ཨ་ལད་པད་ཀོག་གི་དབང་སྒྱུར",
      "མིས་བཟོས་རིག་ནུས་ཀྱི་དབང་སྒྱུར"
  );
  text = text.replaceAll("མིགཙེ་མ", "དམིགས་བརྩེ་མ");
  text = text.replaceAll(
      "རྒྱ་གྲམ་དམར་པོའི་སྲིད་འཛིན་གྱི",
      "རྒྱ་གྲམ་དམར་པོའི་ཚོགས་གཙོའི"
  );
  text = text.replaceAll("ཤིའི་ཅིན་ཕིན་", "ཞི་ཅིན་ཕིན");
  text = text.replaceAll("ཤཱི་ཡིས་བཤད་", "ཞི་ཡིས་བཤད་");
  text = text.replaceAll(
      "ཟླ་ཚེས་དམར་པོའི་ལས་འགུལ",
      "རྒྱ་གྲམ་དམར་པོ་ཚོགས་པའི་ལས་འགུལ"
  );
  text = text.replaceAll("ཤཱི་ཡི", "ཞི་ཡི");
  text = text.replaceAll("སྐེད་རགས་དང་ལམ", "རྒྱུད་གཅིག་ལམ་གཅིག");
  text = text.replaceAll(
      "རྒྱ་ནག་གི་སྲིད་བློན་ལི་ཁྲང་",
      "རྒྱ་ནག་གི་སྲིད་བློན་ལི་ཆང་"
  );
  text = text.replaceAll("ལི་ལག་པས", "ལི་ཆང་གིས");
  text = text.replaceAll(
      "ཡུ་རོབ་མཉམ་འབྲེལ་རྒྱལ་ཚོགས་ཀྱི",
      "རྒྱ་ནག་རྒྱལ་སྤྱིའི་ཚོང་འབྲེལ་གྱི་སྲི་ཞུའི་ཚོང་འདུས"
  );
  text = text.replaceAll("ཤཱི་ནི", "ཞི་ནི");
  text = text.replaceAll("སྲིད་འཛིན་ཤིའི་ཅིན་ཕིན་", "སྲིད་འཛིན་ཞི་ཅིན་ཕིན");
  text = text.replaceAll("སྐེ་རགས་དང་ལམ", "རྒྱུད་གཅིག་ལམ་གཅིག");
  text = text.replaceAll("ལམ་ཐིག་དང་སྐེ་རགས", "རྒྱུད་གཅིག་ལམ་གཅིག");
  text = text.replaceAll("བཅོས་མའི་རིག་རྩལ", "མིས་བཟོས་རིག་ནུས");
  text = text.replaceAll("སི་ཨེ་ཧི་ཊི་སི", "སི་ཨེ་ཧྥི་ཊི་སི");
  text = text.replaceAll("མཚོ་དམག་དར་གོས་ཀྱི་ལམ", "མཚོ་རྒྱུད་དར་ལམ");
  text = text.replaceAll(
      "དཀའ་ལས་བརྒྱབ་ནས་ཐོབ་པའི་རྒྱལ་ཁབ",
      "དཀའ་ལས་བརྒྱབ་ནས་ཐོབ་པའི་རྒྱལ་ཁ"
  );
  text = text.replaceAll(
      "རྒྱལ་སྤྱིའི་ཚོང་འབྲེལ་ཚོགས་པ",
      "རྒྱ་ནག་རྒྱལ་སྤྱིའི་ཚོང་འབྲེལ་གྱི་སྲི་ཞུའི་ཚོང་འདུས"
  );
  text = text.replaceAll(
      "རྒྱ་ནག་གི་རྒྱལ་སྤྱིའི་ཚོང་འདུས་ཚོགས་པ་ཡུ་རོབ་མཉམ་འབྲེལ་རྒྱལ་ཚོགས་དང་",
      "རྒྱ་ནག་རྒྱལ་སྤྱིའི་ཚོང་འབྲེལ་གྱི་སྲི་ཞུའི་ཚོང་འདུས་དང་"
  );
  text = text.replaceAll("ལག་ཐོགས་ཁ་པར", "ལག་འཁྱེར་ཁ་པར");

  text = text.replaceAll("ཤིན་ཏཱ་ཞིང་ཆེན", "ཧྲན་ཏུང་ཞིང་ཆེན་");
  text = text.replaceAll(
      "བཟོ་ལས་རིག་པས་མིའི་འཕྲུལ་ཆས་ཀྱི",
      "མིས་བཟོས་རིག་ནུས་འཕྲུལ་རིག་གི"
  );
  text = text.replaceAll(
      "རྒྱ་གྲམ་དམར་པོའི་སྲིད་འཛིན་གྱིས",
      "རྒྱ་གྲམ་དམར་པོའི་ཚོགས་གཙོས"
  );
  text = text.replaceAll("བསམ་བློའི་དཔྱད་ཞིབ་ཁང་", "བློ་འདོན་ཁང་");
  text = text.replaceAll("བསམ་བློའི་ཚོགས་ཆུང་གིས", "བློ་འདོན་ཁང་གིས");
  text = text.replaceAll("བསམ་བློའི་ཚོགས་ཆུང་གི", "བློ་འདོན་ཁང་གི");
  text = text.replaceAll(
      "བསམ་བློ་གཏོང་མཁན་གྱི་ཚོགས་པ་དེས",
      "བློ་འདོན་ཁང་གིས"
  );
  text = text.replaceAll(
      "བསམ་བློ་གཏོང་མཁན་གྱི་ཚོགས་པ་དེ",
      "བློ་འདོན་ཁང་གི"
  );
  text = text.replaceAll("དར་གོས་ཀྱི་ལམ", "དར་གོས་ཚོང་ལམ");
  text = text.replaceAll("ཌུན་ཧོང་གི་ཞབས་བྲོ", "ཏུན་ཧོང་གི་ཞབས་བྲོ");
  text = text.replaceAll("ཌུན་ཧོང་གི་སྒྱུ་རྩལ", "ཏུན་ཧོག་གི་སྒྱུ་རྩལ");
  text = text.replaceAll("དར་གོས་ཀྱི", "དར་གོས་ཚོང་ལམ");
  text = text.replaceAll("ཌུན་ཧོང་", "ཏུན་ཧོང་");
  text = text.replaceAll("ཧུ་ཀྲན་ཞིང་ཆེན་", "ཧྥུའུ་ཅན་ཞིང་ཆེན་");
  text = text.replaceAll("ཤིའི་ཅིན་ཕིན", "ཞི་ཅིན་ཕིན");
  text = text.replaceAll("ཤཱི་ཡིས་", "ཞི་ཡིས་");
  text = text.replaceAll("ཤཱི་ཡི་", "ཞི་ཡི་");
  text = text.replaceAll("ཤཱི་ལ་", "ཞི་ལ་");
  text = text.replaceAll("ཞིན་ཧྭ་", "ཤིན་ཧྭ་");
  text = text.replaceAll(
      "མེ་འོན་གཙུག་ལག་སློབ་གྲྭ་ཆེན་མོའི་སློབ་གྲྭའི",
      "མེས་དབོན་གཙུག་ལག་དཔེ་སྟོན་སློབ་གྲྭའི"
  );
  text = text.replaceAll("སོགས་ཀྱིས་རྐྱེན་པས", "སོགས་ཀྱི་རྐྱེན་པས");
  text = text.replaceAll("ཀུན་མཆོག་མིག་དམར", "དཀོན་མཆོག་མིག་དམར");
  text = text.replaceAll(
      "སྨད་གཡོག་དཔེ་སྟོན་སློབ་གྲྭ",
      "མེས་དབོན་གཙུག་ལག་དཔེ་སྟོན་སློབ་གྲྭ"
  );
  text = text.replaceAll(
      "ཤེས་རབ་དགའ་ཚལ་བློ་བཟང་གླིང་",
      "ཤེས་རབ་དགའ་ཚལ་སློབ་གླིང་"
  );
  text = text.replaceAll("སྐྱིད་སྐྱོང་གིས", "སྲིད་སྐྱོང་གིས");
  text = text.replaceAll("རྙིང་སྟོབས་གླིང་", "སྙིང་སྟོབས་གླིང་");
  text = text.replaceAll("རྡ་རམ་ས་ལ", "དྷ་རམ་ས་ལ");
  text = text.replaceAll(
      "རྗེ་རིན་པོ་ཆེར་བསྟོད་པ་མིག་ཏིག་མ",
      "རྗེ་རིན་པོ་ཆེའི་བསྟོད་པ་དམིགས་བརྩེ་མ"
  );
  text = text.replaceAll("ཁག་གཅིག་གིས", "ཁག་ཅིག་གིས");
  text = text.replaceAll("ཁག་གཅིག་གི", "ཁག་ཅིག་གི");
  text = text.replaceAll("ལྷོ་ཤར་ཨེ་ཤི་ཡ", "ལྷོ་ཤར་ཨེ་ཤེ་ཡ");
  text = text.replaceAll("བཀླག་བཞིན་པའི", "ཀློག་བཞིན་པའི");
  text = text.replaceAll("དྷ་རྨ་ཤཱལ", "དྷ་རམ་ས་ལ");
  text = text.replaceAll("ཤིའི་ཅིན་ཕིན་", "ཞི་ཅིན་ཕིན་");
  text = text.replaceAll("ཐེ་ཝན་", "ཐའེ་ཝན་");
  text = text.replaceAll("ཐའི་ཝན་", "ཐའེ་ཝན་");
  text = text.replaceAll(
      "བོད་རང་སྐྱོང་ལྗོངས་གྲ་སྒྲིག་ལྷན་ཁང་གི",
      "བོད་མིའི་སྒྲིག་འཛུགས་ཕྱི་དྲིལ་ལས་ཁུངས་ཀྱི"
  );
  text = text.replaceAll("ཊོག་ཀྱོ", "ཊོཀ་ཁྱོ");
  text = text.replaceAll("ལུའུ་སེ་ཁྲན", "ལུའུ་སི་ཁྲིན");
  text = text.replaceAll("ཨོ་སི་ི་རི་ལི་ཡ", "ཨོ་སི་ཊོ་ལི་ཡ");
  text = text.replaceAll("གོ་ལ་གསར་ཤོག", "གོ་ལའི་དུས་བབ");
  text = text.replaceAll("མང་གཙོའི་ཏང", "མང་གཙོ་ཚོགས་པ");
  text = text.replaceAll("ཤིན་ཧྭ", "ཞིན་ཧྭ");
  text = text.replaceAll("གསར་ཤོག་གོ་ལ་དུས་བབ", "གོ་ལའི་དུས་བབ་གསར་ཤོག");
  text = text.replaceAll("ཧིན་དྷུ་ཉེ་ཤི་ཡ", "ཨིན་ཌོ་ནེ་ཤི་ཡ");
  text = text.replaceAll(
      "སྐེ་རགས་དང་ལམ་བཟོའི་ལས་གཞི",
      "རྒྱུད་གཅིག་ལམ་གཅིག་གི་ལས་གཞི"
  );
  text = text.replaceAll("ཝེ་ཌོ་ཌོ", "ཇོ་ཀོ་ཝི་ཌོ་ཌོ");
  text = text.replaceAll("ཡུ་ཁི་རན", "ཡུག་ཁི་རན");
  text = text.replaceAll("སིང་ག་པོར", "སིང་ག་པུར");
  text = text.replaceAll("བཅོས་མའི་རིག་རྩལ", "མིས་བཟོས་རིག་ནུས");
  text = text.replaceAll("བྱེེད", "བྱེད");
  text = text.replaceAll(
      "སྐེད་རགས་དང་ལམ་གྱི་ལས་འཆར",
      "རྒྱུད་གཅིག་ལམ་གཅིག་གི་ལས་འཆར"
  );
  text = text.replaceAll("ཨེ་ཤི་ཡ", "ཨེ་ཤེ་ཡ");
  text = text.replaceAll("གནས་བབས", "གནས་བབ");
  text = text.replaceAll("ཧོན་ཀོང་", "ཧོང་ཀོང་");
  text = text.replaceAll("རྒྱ་ནག་སྐམ་ས་ཆེན་པོ", "རྒྱ་ནག་སྐམ་ས་ཆེན་མོ");
  text = text.replaceAll("ཧང་སྒོར", "ཧོང་སྒོར");
  text = text.replaceAll("བཅོས་མའི་རིག་ནུས", "མིས་བཟོས་རིག་ནུས");
  text = text.replaceAll(
      "ཨ་ཕོན་བེད་སྤྱོད་བྱེད་མཚམས་འཇོག",
      "ཀུ་ཤུ་ཁ་པར་བེད་སྤྱོད་བྱེད་མཚམས་འཇོག"
  );
  text = text.replaceAll("རྒྱ་ནག་གི་ཧུའུ་ཝེ", "རྒྱ་ནག་གི་ཧྭ་ཝེ");
  text = text.replaceAll("ཧོ་ཝེ", "ཧྭ་ཝེ");
  text = text.replaceAll("ཝ་ཞིན་ཊོན", "ཝ་ཤིན་ཊོན");
  text = text.replaceAll("ཧཱ་ཝེ་བཟོ་ལས", "ཧྭ་ཝེ་བཟོ་ལས");
  text = text.replaceAll("ཧུའུ་ཝེ", "ཧྭ་ཝེ");
  text = text.replaceAll("ཀུ་ཤུ་ཡི་ཁ་པར", "ཀུ་ཤུ་ཁ་པར");
  text = text.replaceAll("ཧོ་ཝེ་དང་འབྲེལ་ཡོད", "ཧྭ་ཝེ་དང་འབྲེལ་ཡོད");
  text = text.replaceAll("ཧའོ་ཝེ", "ཧྭ་ཝེ");
  text = text.replaceAll("ཕུ་ཁུ་ཤི་མ", "ཧྥུ་ཀུ་ཤི་མ");
  text = text.replaceAll("ཧུ་ཁུ་ཤི་མ", "ཧྥུ་ཀུ་ཤི་མ");
  text = text.replaceAll("ཧུའུ་ཁུ་ཤི་མ", "ཧྥུ་ཀུ་ཤི་མ");
  text = text.replaceAll(
      "ཉེན་རྟོག་ལས་ཁུངས་ཀྱི་ཀྲུའུ་རེན",
      "ཉེན་རྟོག་ལས་ཁུངས་ཀྱི་འགན་འཛིན"
  );
  text = text.replaceAll("རྒྱལ་སྲུང་པུའུ", "རྒྱལ་སྲུང་ལྷན་ཁང་");
  text = text.replaceAll("དགའ་བསུ་ཞུ་གི་ཡོད་", "དགའ་བསུ་ཞུ་ཡི་ཡོད་");
  text = text.replaceAll("ཧུའུ་ཝེ་བཟོ་ལས", "ཧྭ་ཝེ་བཟོ་ལས");
  text = text.replaceAll("ཧི་ལི་ཕིན", "ཧྥི་ལི་པིན");
  text = text.replaceAll("མ་ལེ་ཤི་ཡ", "མ་ལེ་ཞི་ཡ");
  text = text.replaceAll("མ་ལེ་ཤི་ཡས", "མ་ལེ་ཞི་ཡས");
  text = text.replaceAll(" སིང་གྷ་ཕོ", "སིངྒ་པུར");
  text = text.replaceAll("ཧིན་དྷུ་ཉེ་ཤི་ཡ", "ཧིན་དྷུ་ཉི་ཞི་ཡ");
  text = text.replaceAll("མཉམ་སྦྲེལ་རྒྱལ་ཚོགས", "མཉམ་འབྲེལ་རྒྱལ་ཚོགས");
  text = text.replaceAll(" ཐེ་ལན", " ཐའེ་ལན");
  text = text.replaceAll(" ཨོ་སི་ཊོ་ལི་ཡ", " ཨོ་སི་ཁྲུ་ལི་ཡ");
  text = text.replaceAll("ཁམ་བྷོ་ཌི་ཡ", "ཀམ་བྷོ་ཌི་ཡ");
  text = text.replaceAll("ལོ་སི", "ལའོ་སི");
  text = text.replaceAll("མེན་མར", "འབར་མ");
  text = text.replaceAll(
      "ཨ་རིའི་སྲིད་འཛིན་ཇོའེ་བའེ་ཌེན",
      "ཨ་རིའི་སྲིད་འཛིན་རྗོ་བྷེ་ཌེན"
  );
  text = text.replaceAll("ཀོ་རོ་ན་ཝའི་ནད་ཡམས", "ཀོ་རོ་ནའི་ནད་ཡམས");
  text = text.replaceAll("ཤིའི་ཅིན་ཕིང", "ཞིས་ཅིན་ཕིང");

  text = text.replaceAll("གྲོང་ཁྱེར་པུ་རག", "གྲོང་ཁྱེར་པ་རག");
  text = text.replaceAll(
      "པུ་རག་རྒྱལ་སྤྱིའི་ཚོགས་འདུ",
      "པ་རག་རྒྱལ་སྤྱིའི་ཚོགས་འདུ"
  );

  text = text.replaceAll("ཨོ་སི་ཊོ་ལི་ཡ", "ཨོ་སི་ཊི་ལི་ཡ");
  text = text.replaceAll("ཨོ་སི་ཁྲུ་ལི་ཡ", "ཨོ་སི་ཊི་ལི་ཡ");
  text = text.replaceAll("མི་དམངས", "མི་མང་");
  text = text.replaceAll("རྒྱ་ནག་དམར་ཕྱོགས", "རྒྱ་ནག་དམར་ཤོག");
  text = text.replaceAll(
      "རྒྱ་གྲམ་དམར་པོའི་སྲིད་འཛིན",
      "རྒྱ་གྲམ་དམར་པོའི་ཚོགས་གཙོ"
  );
  text = text.replaceAll("སྲིད་འཛིན་ཤིའི་ཅིན་ཕིན", "སྲིད་འཛིན་ཞི་ཅིན་ཕིན");
  text = text.replaceAll("ཤཱི་ཡིས་བཤད", "ཞི་ཡིས་བཤད");
  text = text.replaceAll("ཤཱི་ཡིས", "ཞི་ཡིས");
  text = text.replaceAll("མེལ་ཝིན་གོལ་ཌ་སི་ཊེན", "མེལ་ཝིན་སི་གྷོལྜ་སི་ཊེན");
  text = text.replaceAll("ཟི་དགའ་ཟེ", "གཞིས་ཀ་རྩེ");
  text = text.replaceAll("རི་བོ་རྩེ་ལྔའི་དམག་སྒར", "ཇོ་མོ་གླང་མའི་སྒར་ས");
  text = text.replaceAll("ཤིན་ཅང་", "ཤར་ཏུར་ཀི་སི་ཐན");
  text = text.replaceAll("ཉན་ཚང་", "ནན་ཁྲང་");
  text = text.replaceAll("ནན་ཅང་", "ནན་ཁྲང་");
  text = text.replaceAll("ཨེ་ཤི་ཡ", "ཨེ་ཤ་ཡ");
  text = text.replaceAll("ཀྲི་ཅ་ཀྲང་", "ཧྲི་ཅ་ཀྲང་");
  text = text.replaceAll("ཤིས་ཅ་ཀྲང་", "ཧྲི་ཅ་ཀྲང་");
  text = text.replaceAll("ཧེ་བེ་ཞིང་ཆེན", "ཧེ་པེ་ཞིང་ཆེན");
  text = text.replaceAll("༦ཤིན་ཧ།", "ཕྱི་ཟླ་དགུ་པའི་ཚེས་དྲུག ཤིན་ཧྭ།");
  text = text.replaceAll("ཨེ་ཤི་ཡ", "ཨེ་ཤ་ཡ");
  text = text.replaceAll("ཨོ་སི་ཊོ་ལི་ཡས", "ཨོ་སི་ཀྲོ་ལི་ཡས");
  text = text.replaceAll("ཨོ་སི་ཊོ་ལི་ཡའི", "ཨོ་སི་ཀྲོ་ལི་ཡའི");
  text = text.replaceAll("པྲི་མུའུ་ལ", "པི་རི་མུའུ་ལ");
  text = text.replaceAll("པི་རི་མུ་ལ", "པི་རི་མུའུ་ལ");
  text = text.replaceAll("ཕི་རི་མུ་ལ", "པི་རི་མུའུ་ལ");
  text = text.replaceAll("པྲ་མོ་ལ", "པི་རི་མུའུ་ལ");
  text = text.replaceAll("ཟི་ནུའུ།", "ཤིན་ཧྭ།");
  text = text.replaceAll("ལན་ཀྲོའུ་", "ལན་ཀྲུའུ་");
  text = text.replaceAll("ཧེ་ཅང་ཞིང་ཆེན་", "ཧེ་ལུང་ཅང་ཞིང་ཆེན་");
  text = text.replaceAll(
      "ཞི་ལུང་ཆུ་ལོག་གིས་རྒྱ་ནག་གི་ཧེ་ཅང་ཞིང་ཆེན་གྱི་གྲོང་གསེབ་མང་པོར་ཤུགས་རྐྱེན་ཐེབས་ཡོད།",
      "ཞི་ཅིན་ཕིན་གྱིས་རྒྱ་ནག་གི་བྱང་ཤར་ཧེ་ལུང་ཅང་ཞིང་ཆེན་གྱི་ཆུ་ལོག་གི་གནོད་འཚེ་ཐེབས་པའི་སྡེ་དམངས་ལ་གཟིགས་ཞིབ་མཛད།"
  );
  text = text.replaceAll("ཀྲུང་དབྱང་", "དབུས་");
  text = text.replaceAll("ཤཱི་ཅིན་ཕིང་", "ཞི་ཅིན་ཕིན་");
  text = text.replaceAll(
      "ལོང་ཝང་རྨོའོ་གྲོང་ཚོའི་ནང་དུ་ཤཱི་ཡས་མཆུས་འབྲས་ཞིང་སྟེང་དུ་ཆུ་ལོག་བྱུང་ནས་འབྲས་ཀྱི་ལོ་ཏོག་ལ་ཤུགས་རྐྱེན་གང་འདྲ་ཐེབས་མིན་ལྟ་བར་འགྲོ་གི་ཡོད།",
      "ཞི་ཅིན་ཕིན་གྱིས་ལུའུ་ཝང་མེའོ་གྲོང་སྡེའི་ཞིང་ཁར་ཕེབས་ཆུ་ལོག་གིས་ལོ་ཏོག་ལ་ཐེབས་པའི་ཤུགས་རྐྱེན་ལ་ལྟ་ཞིབ་གནང་བ་རེད།"
  );
  text = text.replaceAll(
      "ཀྲུང་གུང་དམག་དོན་ལྷན་ཁང་གི་གཙོ་འཛིན་ཡིན་པའི་ཤཱི་ཅིན་ཕིང་",
      "རྒྱ་ནག་དམར་ཤོག་དབུས་དམག་དོན་ལྷན་ཁང་གི་གཙོ་འཛིན་ཡིན་པའི་ཞི་ཅིན་ཕིན་"
  );
  text = text.replaceAll(
      "རྒྱ་ནག་གུང་ཁྲན་ཏང་རྒྱ་ནག་དབུས་དམར་ཤོག་གཞུང་ལྷན་ཁང་གི་དྲུང་ཡིག་ཆེན་མོ་ཞིའི་ཅིན་ཕིན།",
      "རྒྱ་ནག་དམར་ཤོག་དབུས་གཞུང་གི་སྤྱི་ཁྱབ་དྲུང་ཆེ་ཞི་ཅིན་ཕིན།"
  );
  text = text.replaceAll(
      "རྒྱ་ནག་གི་སྲིད་འཛིན་དང་ཀྲུང་དབྱང་དམག་དོན་ལྷན་ཁང་གི་ཚོགས་གཙོ།",
      "རྒྱ་ནག་གི་སྲིད་འཛིན་དང་དབུས་དམག་དོན་ལྷན་ཁང་གི་ཚོགས་གཙོ།"
  );
  text = text.replaceAll("ཞིན་ཧྭ", "ཤིན་ཧྭ");
  text = text.replaceAll(
      "སྲིད་འཛིན་ཞིའི་ཅིན་ཕིང་",
      "སྲིད་འཛིན་ཞི་ཅིན་ཕིན་"
  );
  text = text.replaceAll(
      "རྒྱ་ནག་གི་སྲིད་བློན་ལི་ཆེང་",
      "རྒྱ་ནག་གི་སྲིད་བློན་ལི་ཆང་"
  );
  text = text.replaceAll("ཨེ་ཤེ་ཡ", "ཨེ་ཤ་ཡ");
  text = text.replaceAll("ཤར་ཨེ་ཤེ་ཡ", "ཤར་ཨེ་ཤེ་ཡ");
  text = text.replaceAll("ཕྱེ་བྲལ་", "གྱེས་བྲལ་");
  text = text.replaceAll(
      "རྒྱལ་ཁབ་༩༠ ལྷག་གི་སྐུ་ཚབ་ཀྱིས་རྒྱལ་སྤྱིའི་མཉམ་ལས་སྐོར་གྱི་ཚོགས་འདུ་ཐེངས་གསུམ་པའི་ནང་དུ་ཞུགས་རྒྱུ་གཏན་འཁེལ་བྱས་ཡོད། མགྲིན་ཚབ་པ།",
      "རྒྱལ་ཁབ་༩༠ལྷག་གི་སྐུ་ཚབ་ཀྱིས་རྒྱུད་གཅིག་ལམ་གཅིག་གི་མཉམ་ལས་གླེང་སྟེགས་སྐབས་གསུམ་པར་ཞུགས་རྒྱུར་གཏན་འཁེལ་བྱས། མགྲིན་ཚབ་པ།"
  );
  text = text.replaceAll(
      "རྒྱ་ནག་མི་མང་སྤྱི་མཐུན་རྒྱལ་ཁབ་ཀྱི་རྩ་ཁྲིམས།",
      "རྒྱ་ནག་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ་ཀྱི་རྩ་ཁྲིམས།"
  );
  text = text.replaceAll(
      "མི་མང་འཐུས་མིའི་ཚོགས་ཆེན་",
      "མི་དམངས་འཐུས་མི་ཚོགས་ཆེན་"
  );
  text = text.replaceAll(
      "རྒྱ་ནག་མི་མང་སྤྱི་མཐུན་རྒྱལ་ཁབ་",
      "རྒྱ་ནག་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ་"
  );
  text = text.replaceAll("ཀྲུའུ་ཞི་མའོ་ཙེ་ཏུང་", "ཚོགས་གཙོ་མའོ་ཙེ་ཏུང་");
  text = text.replaceAll("རྒྱ་ནག་གུང་ཁྲན་ཚོགས་པ", "རྒྱ་ནག་དམར་ཤོག་ཚོགས་པ");
  text = text.replaceAll("རྒྱ་ནག་མི་མང་", "རྒྱ་ནག་མི་དམངས་");
  text = text.replaceAll("འཐུས་མི་གསུམ་གྱི་ལྟ་བ།", "མཚོན་བྱེད་གསུམ།");
  text = text.replaceAll(
      "མའོ་ཙེ་ཏུང་གི་བསམ་བློ།",
      "མའོ་ཙེ་ཏུང་གི་དགོངས་པ།"
  );
  text = text.replaceAll(
      "ཏེང་ཞའོ་ཕིང་གི་ལྟ་བ།",
      "ཏེང་ཞའོ་ཕིང་གི་རིགས་པའི་གཞུང་ལུགས།"
  );
  text = text.replaceAll(
      "ཡར་རྒྱས་ཀྱི་ཚན་རིག་གི་ལྟ་ཚུལ་",
      "ཚན་རིག་དང་མཐུན་པའི་འཕེལ་རྒྱས་ལྟ་བ་"
  );
  text = text.replaceAll("ཚན་རིག་ཚན་རྩལ་", "ཚན་རིག་ལག་རྩལ་");
  text = text.replaceAll("མི་མང་ཀྱིས་", "མི་དམངས་ཀྱིས་");
  text = text.replaceAll("རྒྱ་ནག་གུང་ཁྲན་ཚོགས་པ", "རྒྱ་ནག་དམར་ཤོག་ཚོགས་པ");
  text = text.replaceAll(
      "རྒྱ་ནག་མི་མང་སྤྱི་མཐུན་རྒྱལ་ཁབ་",
      "རྒྱ་ནག་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ་"
  );
  text = text.replaceAll(
      "འབྲེལ་ལམ་བཙུགས་དང་མུ་མཐུད་སྲ་བརྟན་དུ་གཏོང་ངེས།",
      "འབྲེལ་ལམ་འཛུགས་པ་དང་མུ་མཐུད་སྲ་བརྟན་དུ་གཏོང་ངེས།"
  );
  text = text.replaceAll("ཆའོ་ཝི་ནོ་རིང་ལུགས་", "མི་རིགས་རིང་ལུགས་");
  text = text.replaceAll(
      "ཆའོ་ཝི་ནི་གཙོ་ཆེར་ཧན་ཆའོ་ཝི་ནོ་རིང་ལུགས་དང་ས་གནས་མི་རིགས་ཀྱི་ཆའོ་ཝི་ནོ་རིང་ལུགས་ལ་གོ་དགོས།",
      "མི་རིགས་རིང་ལུགས་ནི་གཙོ་ཆེར་རྒྱ་མི་རིགས་རིང་ལུགས་དང་ས་གནས་ཀྱི་མི་རིགས་རིང་ལུགས་ལ་གོ་དགོས།"
  );
  text = text.replaceAll(
      "རྒྱ་ནག་གུང་ཁྲན་ཚོགས་པའི་སྤྱི་ཁྱབ་དྲུང་ཆེན།",
      "རྒྱ་ནག་དམར་ཤོག་ཚོགས་པའི་སྤྱི་ཁྱབ་དྲུང་ཆེ།"
  );
  text = text.replaceAll(
      "རྒྱ་ནག་གུང་ཁྲན་ཏང་རྒྱ་ནག་དབུས་དམར་ཤོག་གཞུང་ལྷན་ཁང་གི་དྲུང་ཡིག་ཆེན་མོ།",
      "རྒྱ་ནག་དབུས་དམར་ཤོག་ཚོགས་པའི་སྤྱི་ཁྱབ་དྲུང་ཆེ།"
  );
  text = text.replaceAll(
      "ཨེ་ཤེ་ཡའི་རྒྱལ་ཁབ་རྣམས་",
      "ལྷོ་ཤར་ཨེ་ཤ་ཡའི་རྒྱལ་ཁབས་རྣམས་"
  );
  text = text.replaceAll("ཆབ་སྲིད་ཀྱི", "ས་ཁམས་ཆབ་སྲིད་ཀྱི");
  text = text.replaceAll(
      "རྒྱ་ནག་དང་ཨེ་ཤེ་ཡ་གཉིས་ཀྱིས་",
      "རྒྱ་ནག་དང་ལྷོ་ཤར་ཨེ་ཤེ་ཡའི་མནའ་འབྲེལ་མཐུན་ཚོགས་གཉིས་ཀྱིས་"
  );
  text = text.replaceAll("སྲིད་བློན་ལི་ཁྲེང་", "སྲིད་བློན་ལི་ཆང་");
  text = text.replaceAll(
      "རྒྱ་ནག་དང་ཨེ་ཤེ་ཡའི་རྒྱལ་ཁབ་གཉིས་ཀྱིས་",
      "རྒྱ་ནག་དང་ལྷོ་ཤར་ཨེ་ཤེ་ཡའི་མནའ་འབྲེལ་མཐུན་ཚོགས་གཉིས་ཀྱིས་"
  );
  text = text.replaceAll(
      "ཕན་ཚུན་རྟེན་ཅིང་འབྲེལ་བར་འབྱུང་བ་ནི་གོ་སྐབས་ཤིག་ཡིན།",
      "ཕན་ཚུན་བརྒྱུད་སྦྲེལ་རང་བཞིན་ཇེ་ལེགས་སུ་གཏོང་དགོས།"
  );
  text = text.replaceAll("གོས་ཆེན་ལྕགས་ལམ", "དར་གོས་ཚོང་ལམ");
  text = text.replaceAll("ཁུ་རན་གསུང་རབ", "ཀོ་རན་གསུང་རབ");
  text = text.replaceAll("གཤན་ཏུང", "ཧྲན་ཏུང");
  text = text.replaceAll(
      "བསྟན་སེལ་སྤྱི་གཉེར་ཁང་འི་Tencent",
      "ཊེན་སེན་ཊི་སྤྱི་གཉེར་ཁང་གི"
  );

  text = text.replaceAll("མེར་པོ་ུའུ་", "མེར་པོའུ་");
  text = text.replaceAll("ལྷོ་ཁོ་རེ་ཡ", "ལྷོ་ཀོ་རེ་ཡ");
  text = text.replaceAll("བྱང་ཁོ་རེ་ཡ", "བྱང་ཀོ་རེ་ཡ");
  text = text.replaceAll("ཁོ་རེ་ཡ་ལྷོ་བྱང་གཉིས", "ཀོ་རེ་ཡ་ལྷོ་བྱང་གཉིས");
  text = text.replaceAll("ཀྲུང་དབྱང་ལྷན་ཁང་", "དབུས་གཞུང་ལྷན་ཁང་");
  text = text.replaceAll("ཀྲུང་དབྱང་མི་དམངས", "དབུས་གཞུང་མི་དམངས");
  text = text.replaceAll("ཧ་རན་སུ", "ཧྥ་རན་སི");
  text = text.replaceAll("ཤིན་ཅིན་ཕིན", "ཞིས་ཅིན་ཕིན");
  text = text.replaceAll("མའོ་སི་ཁཱོ", "མོ་སི་ཁཱོ");
  text = text.replaceAll("པེ་ཅིན་གྱི", "པེ་ཅིང་གི");
  text = text.replaceAll("ཧཱ་ཝེ", "ཧྭ་ཝེ");
  text = text.replaceAll("ཆབ་སྲིད་པུའུ", "ཆབ་སྲིད་ལྷན་ཁང");
  text = text.replaceAll(" བྱང་ཨ་མེ་རི་ཁ", " བྱང་ཨ་མེ་རི་ཀ");
  text = text.replaceAll(
      "རྒྱ་ནག་ལྷོ་ཕྱོགས་ཀྱི་ཞོགས་པའི་སྦྲག་ཁང",
      "རྒྱ་ནག་ལྷོ་ཕྱོགས་ཞོགས་པའི་ཚགས་པར"
  );
  text = text.replaceAll("ཨ་ལ་བྷ་བྷ་དྲྭ་ཚིགས", "ཨ་ལི་བྷ་བྷ་དྲྭ་ཚིགས");
  text = text.replaceAll("ཡོ་རོབ", "ཡུ་རོབ");
  text = text.replaceAll("ཨ་ལ་བྷ་བྷ", "ཨ་ལི་བྷ་བྷ");
  text = text.replaceAll("ཨ་ལི་བྷ་བྷཱ་", "ཨ་ལི་བྷ་བྷ");
  text = text.replaceAll("ཡོ་རོབ་ནུབ་མ", "ཡུ་རོབ་ནུབ་མ");
  text = text.replaceAll("ཨོ་སི་ཊི་ལི་ཡ", "ཨོ་སི་ཁྲུ་ལི་ཡ");
  text = text.replaceAll(
      "རིག་གནས་གསར་བརྗེའི་སྐབས་སུ་གྲགས་ཆེ་བའི་མིག་དཔེར་འོས་པའི་ལྷ་མོའི་འཁྲབ་གཞུང་བརྒྱད",
      "རིག་གནས་གསར་བརྗེའི་སྐབས་སུ་གྲགས་ཆེ་བའི་མིག་དཔེར་འོས་པའི་ཟློས་གར་འཁྲབ་གཞུང་བརྒྱད"
  );
  text = text.replaceAll("སྲིད་བློན་ལི་ཁྲེང", "སྲིད་བློན་ལི་ཆང་");
  text = text.replaceAll(
      "ཀྲུང་དབྱང་དམག་དོན་ལྷན་ཁང",
      "དབུས་གཞུང་དམག་དོན་ལྷན་ཁང"
  );
  text = text.replaceAll("ཊོག་ཀྱེ", "ཊོག་ཀྱོ");
  text = text.replaceAll(" པེ་ཅིན་ན་ཡོད", " པེ་ཅིང་ན་ཡོད");
  text = text.replaceAll("ཕ་རེ་སིའི་གྲོས་མཐུན", "ཕེ་རེ་སིའི་གྲོས་མཐུན");
  text = text.replaceAll("འབགས་བཙོག", "འབག་བཙོག");
  text = text.replaceAll("ཨེ་ཤ་ཡའི", "ཨེ་ཤེ་ཡའི");

  text = text.replaceAll("་པོ་ས་", "་པོས་");
  text = text.replaceAll(
      "བསམ་ལམ་ཨང་ཏ་རིག་པའི་ཞིབ་འཇུག་ལྟེ་གནས་",
      "སྨོན་ལམ་བརྡ་འཕྲིན་ཞིག་འཇུག་ཁང་"
  );
  text = text.replaceAll("རྩིས་འཁོར", "གློག་ཀླད");
  text = text.replace(
      "།དེ་ནས་བཅོམ་ལྡན་འདས་ཀྱིས་འཇམ་དཔལ་གཞོན་ནུར་གྱུར་པ་ལ་འདི་སྐད་ཅེས་བཀའ་སྩལ་ཏོ། །འཇམ་དཔལ་གཞོན་ནུར་གྱུར་པ་འདིས་དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས་རིག་པ་དང་ཞབས་སུ་ལྡན་པ། བདེ་བར་གཤེགས་པ། འཇིག་རྟེན་མཁྱེན་པ། སྐྱེས་བུ་འདུལ་བའི་ཁ་ལོ་སྒྱུར་བ། བླ་ན་མེད་པ། ལྷ་དང་མི་རྣམས་ཀྱི་སྟོན་པ་སངས་རྒྱས་བཅོམ་ལྡན་འདས་ཤཱཀྱ་ཐུབ་པ་ཞེས་བྱ་བ་ཞིག་འཇིག་རྟེན་དུ་བྱུང་སྟེ།",
      ""
  );
  text = text.replaceAll("རྩིས་འཁོར", "གློག་ཀླད");
  text = text.replaceAll(
      "བསམ་ལམ་ཨང་ཏ་རིག་པའི་ཞིབ་འཇུག་ལྟེ་གནས་",
      "སྨོན་ལམ་བརྡ་འཕྲིན་ཞིག་འཇུག་ཁང་"
  );
  text = text.replaceAll(
      "བྱང་ཆུབ་སེམས་དཔའི་སྤྱོད་པ་ལ་འཇུག་པ་ཞེས་བྱ་བ་སྟེ་ལེའུ་དང་པོའོ་༑༑",
      ""
  );
  //data: "
  text = text.replaceAll('data: "', "");
  text = text.replaceAll('"\n', "\n");
  text = text.replaceAll("ལྷོ་ཁོ་རེ་ཡ", "ལྷོ་ཀོ་རེ་ཡ");
  text = text.replaceAll("བྱང་ཁོ་རེ་ཡ", "བྱང་ཀོ་རེ་ཡ");
  text = text.replaceAll("ལས་ཆས", "མཉེན་ཆས");
  //text = text.replaceAll("\n\n", "\n");
  text = text.replaceAll("པོ་འི་", "པོའི");
  text = text.replaceAll("་་", "་");
  text = text.replaceAll("བ་འི", "་བའི");
  text = text.replaceAll("མཉམཉམཉེན", "མཉེན");
  text = text.replaceAll("མཎལ", "མཎྜལ");
  text = text.replaceAll("ཨ་ཧི་གྷ་ནི་སི་ཐན", "ཨ་ཧྥི་གྷ་ནི་སི་ཐན");
  text = text.replaceAll("ཨཕ་གྷ་ནི་སི་ཐན", "ཨ་ཧྥི་གྷ་ནི་སི་ཐན");
  text = text.replaceAll(
      "གྷི་ཨེན་ཨེམཊ",
      "གྷུས་གྷལ་དབང་རྩའི་ཡིག་སྒྱུར་རིག་ནུས"
  );
  text = text.replaceAll(
      "རྒྱ་ནག་དམར་ཤོག་ཚོགས་པ་དབུ་བརྙེས་ནས་ལོ་ངོ་བརྒྱ་དང་དྲུག་ཅུ",
      "རྒྱ་གྲམ་དམར་པོའི་ཚོགས་པ་དབུ་བརྙེས་ནས་ལོ་ངོ་བརྒྱ་དང་དྲུག་ཅུ"
  );
  text = text.replaceAll(
      "རྒྱ་ནག་དམར་ཤོག་ཚོགས་པ་དབུ་བརྙེས་པ་ནས་བཟུང་འདས་པའི་ལོ་ངོ་༡༦༠ རིང",
      "རྒྱ་གྲམ་དམར་པོའི་ཚོགས་པ་དབུ་བརྙེས་པ་ནས་བཟུང་འདས་པའི་ལོ་ངོ་ ༡༦༠ རིང"
  );
  text = text.replaceAll(
      "བཀའ་ཤག་སྐུ་ཕྲེང་བཅུ་དྲུག་པ",
      "བཀའ་ཤག་སྐབས་བཅུ་དྲུག་པ"
  );
  text = text.replaceAll("གཞིས་ལེན་གཟབ་རྒྱས", "གཞིས་ལེན་གཟབ་རྒྱས");
  text = text.replaceAll("སྐེད་རགས་དང་གཞུང་ལམ", "རྒྱུད་གཅིག་ལམ་གཅིག");
  text = text.replaceAll("ཨང་ཀིའི་ཞབས་ཞུ", "གྲངས་འཛིན་ཞབས་ཞུ");
  text = text.replaceAll("ཨང་ཀིའི་སྤྱི་ཚོགས", "གྲངས་འཛིན་སྤྱི་ཚོགས");
  text = text.replaceAll("ཨང་ཀིའི་འགྱུར་ལྡོག", "གྲངས་འཛིན་འགྱུར་ལྡོག");
  //སྤྱིར་བཚོགས
  text = text.replaceAll("ཨང་ཀི་ཅན", "གྲངས་འཛིན");
  text = text.replaceAll("སྤྱིར་བཚོགས", "སྤྱིར་ཚོགས");
  text = text.replaceAll("༑་", "། ");
  text = text.replaceAll("་༑", "། ");
  text = text.replaceAll("༑༑", "།། ");
  text = text.replaceAll("་།", "།");
  text = text.replaceAll("ང།", "ང་།");

  text = text.replaceAll("༑", "།");

  text = text.replaceAll("་༠", "་ ༠");
  text = text.replaceAll("་༡", "་ ༡");
  text = text.replaceAll("་༢", "་ ༢");
  text = text.replaceAll("་༣", "་ ༣");
  text = text.replaceAll("་༤", "་ ༤");
  text = text.replaceAll("་༥", "་ ༥");
  text = text.replaceAll("་༦", "་ ༦");
  text = text.replaceAll("་༧", "་ ༧");
  text = text.replaceAll("་༨", "་ ༨");
  text = text.replaceAll("་༩", "་ ༩");

  text = text.replaceAll("༠་", "༠ ");
  text = text.replaceAll("༡་", "༡ ");
  text = text.replaceAll("༢་", "༢ ");
  text = text.replaceAll("༣་", "༣ ");
  text = text.replaceAll("༤་", "༤ ");
  text = text.replaceAll("༥་", "༥ ");
  text = text.replaceAll("༦་", "༦ ");
  text = text.replaceAll("༧་", "༧ ");
  text = text.replaceAll("༨་", "༨ ");
  text = text.replaceAll("༩་", "༩ ");

  text = text.replaceAll("འདུག", "འདུག ");
  text = text.replaceAll("འདུག ་", "འདུག་");
  // text = text.replaceAll(
  //   "ཆོས་སྲིད་ལྷན་ཁང་",
  //   "ཆོས་རིག་ལྷན་ཁང་"
  // );
  text = text.replaceAll("གོང་ས་", "༸གོང་ས་");
  text = text.replaceAll("སྐྱབས་མགོན", "༸སྐྱབས་མགོན");
  text = text.replaceAll("༸༸", "༸");
  text = text.replaceAll("ཧིན་དྷུ་ཉི་ཞི་ཡ", "ཧིན་དྷུ་ནེ་ཤི་ཡ");
  text = text.replaceAll("ཇུ་ལཱི་པིས་ཞ་ཕུ", "ཇུ་ལེའུ་བྷིས་ཞིབ");
  text = text.replaceAll(
      "ཨན་ཊོ་ནི་ཨེལ་བྷན་ནེ་སི",
      "ཨན་ཐོ་ནི་ཨེལ་བྷན་ནེ་སི"
  );
  text = text.replaceAll("ཧོ་ཝེ་མེ་ཊེ", "ཧྭ་ཝི་མེ་ཊེ");
  text = text.replaceAll("འཛམ་གླིང་དུས་བབ་ཚགས་པར", "གོ་ལའི་དུས་བབ་གསར་ཤོག");
  text = text.replaceAll("ཧུའུ་ཝེ", "ཧྭ་ཝི");
  text = text.replaceAll("ཧུ་མེ་ཨོ་ཀི་ཤི་ཌ", "ཧྥུ་མོའི་ཀི་ཤི་ད");
  text = text.replaceAll("ཀི་ཤི་ཌ", "ཀི་ཤི་ད");
  text = text.replaceAll("ཀི་ཞ་དྷ", "ཀི་ཤི་ད");
  text = text.replaceAll("ཕུའུ་ཁུ་ཤི་མ", "ཕུ་ཁུ་ཞི་མ");
  text = text.replaceAll("ཧིན་རྡུ་ཉི་ཞི་ཡ", "ཨིན་ཌོ་ནེ་ཤི་ཡ");
  text = text.replaceAll("ཧིན་རྡུ་ཉི་ཞི་ཡའི", "ཨིན་ཌོ་ནེ་ཤི་ཡའི");
  text = text.replaceAll("ཨ་ཧེ་རི་ཀ", "ཨ་ཧྥི་རི་ཀ");
  text = text.replaceAll("ཨན་ཐོ་ནེ་ཤི་ཨལ་བྷན", "ཨན་ཐོ་ནི་ཨེལ་བྷན་ནེ་སི");
  text = text.replaceAll("ཨལ་བྷན་ཉི", "ཨེལ་བྷན་ནེ་སི");
  text = text.replaceAll("ཁི་རེག་ཨེ་མིར་སོན", "ཁི་རེ་གྷན་ཨེ་མིར་སོན");
  text = text.replaceAll("ཇུ་ལེ་པིས་ཞ་ཕུ", "ཇུ་ལེའུ་བྷིས་ཞིབ");
  text = text.replaceAll("ཨན་ཐོ་ཉི་ཨལ་བྷན་ནེ་སི", "ཨན་ཐོ་ནི་ཨེལ་བྷན་ནེ་སི");
  text = text.replaceAll("ཁ་ལི་ཧྥོར་ནི་ཡ", "ཁཱ་ལེ་ཧྥོར་ནི་ཡ");
  text = text.replaceAll("ཁེན", "ཁིང");
  text = text.replaceAll("ཧོར་དྷོ", "བྷོར་དྷོ");
  text = text.replaceAll("གོ་ལ་གསར་འགྱུར་ཁང", "གོ་ལའི་དུས་བབ་གསར་ཤོག");
  text = text.replaceAll("འཛམ་གླིང་དུས་བབ་གསར་ཁང", "གོ་ལའི་དུས་བབ་གསར་ཤོག");
  text = text.replaceAll(
      "གནམ་གཤིས་སྔོན་བརྟག་པུའུ",
      "གནམ་གཤིས་བརྟག་དཔྱད་ཁང"
  );
  text = text.replaceAll("ཧྲེན་ཀྲེན", "ཧྲིན་ཀྲིན");
  text = text.replaceAll("ཤཱི་ཅིན་ཕིན", "ཞི་ཅིན་ཕིན");
  text = text.replaceAll("སྲིད་འཛིན་ཤཱི", "སྲིད་འཛིན་ཞི");
  text = text.replaceAll(
      "ཟི་ལིང་ཡུ་གུར་རང་སྐྱོང་ཁུལ",
      "ཤིན་ཅིང་ཡུ་གུར་རང་སྐྱོང་ཁུལ"
  );
  text = text.replaceAll("ཨུ་ཁི་རེན", "ཡུག་ཁི་རན");
  text = text.replaceAll("འཛམ་གླིང་དུས་བབ་ཚགས་པར", "གོ་ལའི་དུས་བབ་གསར་ཤོག");
  text = text.replaceAll("ཧིན་དྷུ་ཉི་ཞི་ཡ", "ཨིན་ཌོ་ནེ་ཤི་ཡ");
  text = text.replaceAll("ེག་ས་སི", "ཌེག་ས་སི");
  text = text.replaceAll("འཇོར་ཇི་བྷོ་ཤི", "འཇོར་ཇི་བྷུ་ཤུ");
  text = text.replaceAll("ཞིས་ཅིན་ཕིང", "ཞི་ཅིན་ཕིན");
  text = text.replaceAll("ཌོ་ནོལ་ི་ཁྲེམ་ཕུ", "ཌོ་ནལ་ཋོམ་ཕུ");

  text = text.replaceAll("ཊུ་ཝི་ཊར", "ཋི་ཊར");
  text = text.replaceAll("ཨིན་སི་ཊ་ཊར", "ཨིན་སི་གྷ་རམ");
  text = text.replaceAll("ཡུ་ཊུ་བཱོག", "ཡུ་ཊུབ");

  text = text.replaceAll("ཨིན་སི་ཀྲ་རམ", "ཨིན་སི་གྷ་རམ");
  text = text.replaceAll("ཡུ་ཊོ་སྦེར", "ཡུ་ཊུབ");

  text = text.replaceAll("ཏང་མི", "ཚོགས་མི");
  text = text.replaceAll("ཏང་ཡོན", "ཚོགས་མི");
  text = text.replaceAll("ཏང་གི", "ཚོགས་པའི");
  text = text.replaceAll("ཏང་གིས", "ཚོགས་པས");
  text = text.replaceAll("བྷང་ག་ལ་ཤ", "བྷང་ལ་དྷེ་ཤི");

  text = text.replaceAll("ཨར་ཨེན་ཨེའི", "རིག་ནུས་ཀྱི");
  text = text.replaceAll("ཨར་ཨེན་ཨེས", "རིག་ནུས་ཀྱི");

  text = text.replaceAll("ཨེ་ལོན་མཱས་ཁི", "ཨེ་ལོན་མཱ་སི་ཁི");
  text = text.replaceAll("མའེ་ཁོ་སཱཊ", "མེག་རོ་སོ་ཧྥི");
  text = text.replaceAll("བྷིལ་གྷལ་ཚི", "བྷིལ་གྷེ་ཚི");
  text = text.replaceAll("གྷོ་གྷལ", "གྷུས་གྷུལ");
  text = text.replaceAll("མཱས་ཁི", "མཱ་སི་ཁི");
  text = text.replaceAll("ས་གྱི", "ས་ཀྱི");
  text = text.replaceAll("མའེ་ཁུ་སི་ཀྲོ", "མེག་རོ་སོ་ཧྥི");
  text = text.replaceAll("མེག་རོ་སོ་ཧྥི་ཧུ", "མེག་རོ་སོ་ཧྥི");
  text = text.replaceAll(
      "གྷུས་གྷུལ་གྱི་འཁྲིག་ལྡན་མ",
      "གྷུས་གྷུལ་གྱི་ཇ་མན་ནཱཡེ"
  );
  text = text.replaceAll("འཆར་འགོད་པར་ཌི", "བྷར་ཌི་ཁ་བརྡ");
  text = text.replaceAll("ཡོ་ཊོ་ཀླད་ཀྱི་བརྙན་ཐག", "ཡུས་ཊུབ་བརྙན་རིས");
  text = text.replaceAll("ཨ་ཧོ་ནེ", "ཀུ་ཤུ་ཁ་པར");
  text = text.replaceAll(
      "སྨོན་ལམ་རིག་གནས་ཞིབ་འཇུག་ཁང་",
      "སྨོན་ལམ་བརྡ་འཕྲིན་ཞིབ་འཇུག་ཁང་"
  );
  text = text.replaceAll("༠ཡི", "༠ ཡི");
  text = text.replaceAll("༠པའི", "༠ པའི");
  text = text.replaceAll("རྟགས་ཅན་ ༡༦", "༡༦ རྟགས་ཅན་");
  text = text.replaceAll("མའོ་ཙེ་ཏུང་གིས", "མའོ་ཡིས");
  text = text.replaceAll("ཝུར་ཏོ", "ཨུར་དྷུའུ");
  text = text.replaceAll("ཨེབ་ཨའེ", "ཨེ་པི་ཨེ་ (API) ");
  text = text.replaceAll(" ་", " ");
  text = text.replaceAll("ཁ་རྩང", "ཁ་སང");
  text = text.replaceAll("པན་པ་ཚེ་རིང", "སྤེན་པ་ཚེ་རིང");
  text = text.replaceAll("ཌ་རམ་ས་ལ", "དྷ་རམ་ས་ལ");
  text = text.replaceAll("ཨོག་སི་ཧོར་ཌི", "ཨོག་སི་ཧྥོར་ཌི");
  text = text.replaceAll("དབྱི་ལང", "ཨི་རན");
  text = text.replaceAll("ཨཧ་གྷ་ནི་སི་ཐན", "ཨ་ཧྥི་གྷ་ནི་སི་ཐན");
  text = text.replaceAll("དགེ་སྦྱོང་ག་ཏ་མ", "དགེ་སྦྱོང་གཽ་ཏ་མ");
  //text = text.replaceAll("དགེ་སྦྱོང་ག་ཏ་མ", "དགེ་སྦྱོང་གཽ་ཏ་མ");
  //དགེ་སྦྱོང་ག་ཏ་མ
  text = text.replaceAll(
      "བོད་ལྗོངས་སློབ་གྲྭ་ཆེན་མོའི་བོད་ཀྱི་སྲིད་བྱུས་ཞིབ་འཇུག་ཁང་",
      "བོད་ཀྱི་སྲིད་བྱུས་ཞིབ་འཇུག་ཁང་"
  );
  text = text.replaceAll("སྤན་པ་ཚེ་རིང", "སྤེན་པ་ཚེ་རིང");

  text = text.replaceAll("ཚིག་མཛོད་ཆུང་བའི", "དམའ་རིམ་ཚིག་མཛོད་ཀྱི");
  text = text.replaceAll("ཨན་ཌ་རོ་ཡེ་སི", "ཨན་ཌོར་ཌི། ཨ་ཡེ་ཨོ་ཨེ་སི");
  text = text.replaceAll("ཨན་ཌ་རོ་ཡེ་སི", "ཨན་ཌོར་ཌི། ཨ་ཡེ་ཨོ་ཨེ་སི");
  text = text.replaceAll(
      "ལྷ་ས་ལྷོ་བྱང་ལྷན་ཁང",
      "ལ་དྭགས་རང་སྐྱོང་རི་ལྗོངས་ཡར་རྒྱས་ལྷན་ཚོགས་གླེ"
  );
  text = text.replaceAll("ཉེན་ཁ་གྱིས་", "ཉེན་ཁ་ཡིས་");
  
  text = text.replaceAll("ཙུང་ཐུང", "སྲིད་འཛིན");
  text = text.replaceAll("ཉུང་ཟད་", "ཅུང་ཟད་");
  text = text.replaceAll("ཇ་ཝིཊ", "ཇ་ཝ་སི་ཁི (JavaScript)");
  //ཇ་ཝིཊ


  text = text.replaceAll("པ་འོ། །", "པའོ།།");


  text = text.replaceAll("བང་རྩིས", "རིམ་ལྡན་རྩིས་ཐབས");
  text = text.replaceAll("ཨང་རྩིས་སྒྲིག་འཛུགས", "རིག་ནུས་གལ་གནད");
  text = text.replaceAll("ཨང་རྩིས་ལ་སྟངས་འཛིན", "རིག་ནུས་སྟངས་འཛིན");

  text = text.replaceAll("སྐྱེ་འཕེལ་གྱི་ཨང་ཨད", "སྐྱེ་འཕེལ་རིག་ནུས");
  text = text.replaceAll("ཨང་ཨད", "རིག་ནུས");
  text = text.replaceAll("སྐྱེ་འཕེལ་གྱི་ཨང་ཨེས", "སྐྱེ་འཕེལ་རིག་ནུས");
  text = text.replaceAll("སྐྱེ་འཕེལ་གྱི་ཨིས་ཨིས", "སྐྱེ་འཕེལ་རིག་ནུས");
  text = text.replaceAll("ཨར་ཨེན་ཨེའམ", "རིག་ནུས་སམ");
  text = text.replaceAll("བསྐྱེད་པའི་ཨིས་ཨིས", "སྐྱེ་འཕེལ་རིག་ནུས");
  text = text.replaceAll("བསྐྱེད་པའི་ཨིས་ཨིས", "སྐྱེ་འཕེལ་རིག་ནུས");
  text = text.replaceAll("སྐྱེ་འཕེལ་གྱི་ཨང་ཨིས", "སྐྱེ་འཕེལ་རིག་ནུས");
  text = text.replaceAll("མིས་བཟོས་རིག་སྟོབས", "མིས་བཟོས་རིག་ནུས");
  text = text.replaceAll("བསྐྱེད་རྫས་ཀྱི་རིག་ནུས", "སྐྱེ་འཕེལ་རིག་ནུས");
  text = text.replaceAll("སན་ཧ་རན་སེ་སི་ཁོ", "སན་ཧྥན་སེ་སི་ཁོ");
  text = text.replaceAll("བཅོས་མའི་རིག་སྟོབས", "མིས་བཟོས་རིག་ནུས");
  text = text.replaceAll("པ་འམ", "པའམ");
  text = text.replaceAll("སྤྱི་མཐུན་ཏང་ཁག་གི", "སྤྱི་མཐུན་ཚོགས་པའི");
  text = text.replaceAll("རྣམ་པ་ཉུང་ཟད་ཅིག", "རྣམ་པ་ཅུང་ཟད་ཅིག");
  text = text.replaceAll("བ་འོ།", "བའོ།");
  text = text.replaceAll("༎", "།། ");
  text = text.replaceAll("།", "། ");
  text = text.replaceAll("  ", " ");
  text = text.replaceAll("་་", "་");
  text = text.replaceAll("་།", "།");
  text = text.replaceAll("ང།", "ང་།");
  text = text.replaceAll("བཟོ་བཅོས་རིག་སྟོབས", "མིས་བཟོས་རིག་ནུས");
  text = text.replaceAll("ཏང་ཁག", "ཚོགས་ཁག");
  text = text.replaceAll("ཧེ་ལི་ཕིན", "ཧྥི་ལིས་པིན");
  text = text.replaceAll(
      "སི་ཀོང་སྤེན་པ་ཚེ་རིང",
      "སྲིད་སྐྱོང་སྤེན་པ་ཚེ་རིང"
  );
  text = text.replaceAll("ཚིན་ཧྭ", "ཆིན་ཧ");
  text = text.replaceAll("ཨེད་ཁུ་སི", "ཨེག་སི");
  text = text.replaceAll(
      "ས་ཡ་མང་པོ་བོད་གཞུང་གི་དབང་སྒྱུར",
      "ས་ཡ་མང་པོ་རྒྱ་གཞུང་གི་དབང་སྒྱུར"
  );
  text = text.replaceAll("༄༅། ། ", "");
  text = text.replaceAll("༄༅། །", "");
  text = text.replaceAll("མཐོ་སྒང་ཨིན་ཆི་ཐེ་རུ", "ཨེིན་ཤོན་མཐོ་སྒང་དུ");
  text = text.replaceAll("དབྱི་སི་ལན", "ཨི་སི་ལམ");

  text = text.replaceAll("གྷ་ཟ", "གྷ་ཛ");
  text = text.replaceAll("གྷ་སའི", "གྷ་ཛའི");
  text = text.replaceAll("དབྱི་སི་རལ", "ཨི་སི་རལ");
  text = text.replaceAll(
      "ཞི་ཅིན་ཕིན་གསར་འགྱུར་ཁང་",
      "ཤིན་ཧྭ་གསར་འགྱུར་ཁང་"
  );
  text = text.replaceAll("བསམ་སྡོང་རིན་པོ་ཆེ", "ཟམ་གདོང་རིན་པོ་ཆེ");
  text = text.replaceAll("བསམ་སྡོང་བསམ་བློ", "ཟམ་གདོང་བསམ་བློ");
  text = text.replaceAll("བསམ་རྡོང་རིན་པོ་ཆེ", "ཟམ་གདོང་རིན་པོ་ཆེ");
  text = text.replaceAll("བསམ་རྡོང་གི་ལྟ་བ", "ཟམ་གདོང་གི་ལྟ་བ");
  text = text.replaceAll("བྷ་རཱ་ཁཱ་ཨོ་བྷ་མ", "བྷ་རག་ཨོ་བྷ་མ");
  text = text.replaceAll("བྷ་རཱ་ཁེ་ཨོ་བྷ་མ", "བྷ་རག་ཨོ་བྷ་མ");
  text = text.replaceAll(
      "སྲིད་འཛིན་སྐུ་ཕྲེང་བཞི་བཅུ་ང་གསུམ",
      "སྲིད་འཛིན་ཞེ་གསུམ"
  );
  text = text.replaceAll(
      "སྲིད་འཛིན་སྐུ་ཕྲེང་བཞི་བཅུ་ང་བཞི",
      "སྲིད་འཛིན་ཞེ་བཞི"
  );
  text = text.replaceAll(
      "སྲིད་འཛིན་སྐུ་ཕྲེང་བཞི་བཅུ་ང་ལྔ",
      "སྲིད་འཛིན་ཞེ་ལྔ"
  );
  text = text.replaceAll("ཐོག་མའི་ལྕམ", "ལྕམ་སྐུ་དང་པོ");
  text = text.replaceAll(
      "བུད་མེད་སྐུ་ཕྲེང་དང་པོ་གཉིས་པ",
      "ལྕམ་སྐུ་དང་པོ་གཉིས་པ"
  );

  text = text.replaceAll("འཁོར་ཐག་དང་ལམ་གྱི", "རྒྱུད་གཅིག་ལམ་གཅིག་གི");
  text = text.replaceAll("འཁོར་ཐག་དང་རྒྱ་ལམ་གྱི", "རྒྱུད་གཅིག་ལམ་གཅིག་གི");
  text = text.replaceAll("སྐ་རགས་དང་རྒྱ་ལམ་གྱི", "རྒྱུད་གཅིག་ལམ་གཅིག་གི");
  text = text.replaceAll("གཞུང་ལམ་དང་སྐེ་རགས་ཀྱི", "རྒྱུད་གཅིག་ལམ་གཅིག་གི");
  text = text.replaceAll("ཨ་ཀེན་ཊི་ནེ་ཡ", "ཨར་རྗིན་ཊི་ན");
  text = text.replaceAll("འཛམ་གླིང་ལྗོངས་ཉི་ཤུ", "འཛམ་གླིང་རྒྱལ་ཁབ་ཉི་ཤུ");
  text = text.replaceAll("དབྱི་རན", "ཨི་རན");
  text = text.replaceAll("པེ་ལི་སི་ཐན", "པ་ལི་སི་ཐན");
  text = text.replaceAll("ཕ་ལི་སི་ཐན", "པ་ལི་སི་ཐན");
  text = text.replaceAll("ཞེས་པ་ས་བསྟན།", "ཞེས་པས་བསྟན།");
  text = text.replaceAll("ལྕམ་སྐུ་ཞབས་རྣམ་པ།", "ལྕམ་དང་སྐུ་ཞབས་རྣམ་པ།");
  text = text.replaceAll("ལུང་དུ་མ་བསྟན་པ་", "ལུང་དུ་མ་བསྟན་པ་");
  //
  text = text.replaceAll("ཅིག་གྱི", "ཅིག་གི");
  //text = text.replaceAll("ཏཱ་ལའི་བླ་མ་མཆོག་གིས", "ཁོང་གིས");
  text = text.replaceAll("བོད་དབུས་ཤར་ཁུལ", "དབུས་ཤར་ཁུལ");
  text = text.replaceAll("ཨིན་ཇིའི་རྒྱལ་ཁབ་མང་པོ", "རྒྱལ་ཁབ་མང་པོ");
  text = text.replaceAll("ཨིན་ཅི་གྲོས་ཚོགས", "གྲོས་ཚོགས");
  text = text.replaceAll("ངོས་རང་", "ང་རང་");
  text = text.replaceAll(
      "བྱང་གི་སྒྲ་མི་སྙན་གྱི་བར་གྱི་ལམ་པོ་ཆེ",
      "ནཱ་ལནྡཱ་བར་གྱི་ལམ་པོ་ཆེ"
  );
  text = text.replaceAll("བྱང་གི་སྒྲ་མི་སྙན", "ནཱ་ལནྡཱ");
  text = text.replaceAll(
      "བསྟོད་བསྔགས་མི་འདྲ་བ་མང་དུ་བྱས་ཀྱང",
      "བསྔགས་པ་མ་ཡིན་པ་མང་དུ་བྱས་ཀྱང"
  );
  text = text.replaceAll("བོད་མིའི་རྩ་འཛིན་ལས་ཁུངས", "རྩ་འཛིན་ལས་ཁུངས");
  text = text.replaceAll("ཕྱི་ལོ་ ༢༠༠༨ ལོའི་ཟླ", "ཟླ");
  text = text.replaceAll("ཕྱི་ལོ་ ༢༠༠༨ ལོར", "");
  text = text.replaceAll("ཕྱི་ལོ་ ༢༠༠༨ ལོའི་", "");
  text = text.replaceAll("ཕྱི་ལོ་༢༠༠༨ ལོའི་", "");
//   text = text.replaceAll("༸ཏཱ་ལའི་བླ་མ།", "");
  text = text.replaceAll("ངོས་ཀྱིས་", "ངས་");
  text = text.replaceAll("ངོས་ཀྱི་", "ང་རང་གི་");
  text = text.replaceAll("ལམ་སྲང་དང་སྐ་རགས", "རྒྱུད་གཅིག་ལམ་གཅིག");
  text = text.replaceAll("ལམ་དང་སྐེ་རགས་", "རྒྱུད་གཅིག་ལམ་གཅིག");
  text = text.replaceAll("ཨིན་ཅི་", "");
  text = text.replaceAll("གུ་གལ་", "གྷུས་གྷལ");
  text = text.replaceAll("མེད་མིན་གྱི་", "ཡོད་མེད་ཀྱི་");
//   text = text.replaceAll("ཏཱ་ལའི་བླ་མ་མཆོག་གིས", "ཁོང་གིས");
  text = text.replaceAll("བོད་དབུས་ཤར་ཁུལ", "དབུས་ཤར་ཁུལ");
  text = text.replaceAll("ཨིན་ཇིའི་རྒྱལ་ཁབ་མང་པོ", "རྒྱལ་ཁབ་མང་པོ");
  text = text.replaceAll("ཨིན་ཅི་གྲོས་ཚོགས", "གྲོས་ཚོགས");
  text = text.replaceAll("ངོས་རང་", "ང་རང་");
  text = text.replaceAll("བོད་མིའི་རྩ་འཛིན་ལས་ཁུངས", "རྩ་འཛིན་ལས་ཁུངས");
  text = text.replaceAll("ཕྱི་ལོ་ ༢༠༠༨ ལོའི་ཟླ", "ཟླ");
  text = text.replaceAll("ཕྱི་ལོ་ ༢༠༠༨ ལོར", "");
  text = text.replaceAll("ཕྱི་ལོ་ ༢༠༠༨ ལོའི་", "");
  text = text.replaceAll("ཕྱི་ལོ་༢༠༠༨ ལོའི་", "");
  text = text.replaceAll("ཕྱི་ལོ་༡༩༥༩ ལོའི་", "");
//   text = text.replaceAll("༸ཏཱ་ལའི་བླ་མ།", "");
  text = text.replaceAll("ངོས་ཀྱིས་", "ངས་");
  text = text.replaceAll("ངོས་ཀྱི་", "ང་རང་གི་");
  text = text.replaceAll("ལམ་སྲང་དང་སྐ་རགས", "རྒྱུད་གཅིག་ལམ་གཅིག");
  text = text.replaceAll("ལམ་དང་སྐེ་རགས་", "རྒྱུད་གཅིག་ལམ་གཅིག");
  text = text.replaceAll("ཨིན་ཅི་", "");
  text = text.replaceAll("གུ་གལ་", "གྷུས་གྷལ");
  text = text.replaceAll("མེད་མིན་གྱི་", "ཡོད་མེད་ཀྱི་");

  text = text.replaceAll("ཨིན་ཆི་ཐེ་", "");
  text = text.replaceAll("ཨིན་ཆི་", "");
  text = text.replaceAll("ཨིན་ཆུ་ཐེ་", "");
  text = text.replaceAll("ཨིན་ཆུ་", "");
  text = text.replaceAll("ཨིན་ཆ་ཐེ་", "");
  text = text.replaceAll("ཨིན་ཆ་", "");
  text = text.replaceAll("ཨེན་ཅི་ཐེ་", "");
  text = text.replaceAll("ཨེན་ཅི་", "");
  text = text.replaceAll("ཨིན་ཌི་ཊེ་", "");

  text = text.replaceAll("ཨིན་ཆི་ཐེ་རུ་", "ལ་");
  text = text.replaceAll("ཟས་སྦྱོར་གྱི་ཕྲ་ཕུང་", "ཕྲ་ཕུང་");

  text = text.replaceAll("བརྡ་བཚོགས་", "བརྡ་བཏང་");
  text = text.replaceAll("སྒ་ཟ", "སྒ་ཛ");
  text = text.replaceAll("སྒ་ས", "སྒ་ཛ");
  text = text.replaceAll("དགྲང་ངར་ཆེ་བ", "ནར་འགྱངས་ཆེ་བ");
  text = text.replaceAll(
      "༸ཏཱ་ལའི་བླ་མ་སྐུ་ཕྲེང་བཅུ་བཞི་པ་ཆེན་པོ། ཕྱི་ལོ་༡༩༨༩ ལོའི་ཟླ་༡༠ ཚེས་༡༥ ཉིན།",
      ""
  );
  //༸ཏཱ་ལའི་བླ་མ་སྐུ་ཕྲེང་བཅུ་བཞི་པ་ཆེན་པོ། ཕྱི་ལོ་༡༩༨༩ ལོའི་ཟླ་༡༠ ཚེས་༡༥ ཉིན།
  text = text.replaceAll("་མཉན་དུ་ཡོད་པ་ན་", "་མཉན་ཡོད་དུ་");
  text = text.replaceAll(
      "ཆེན་པོ་མ་ངེས་པ་དང་ཐབས་ཅིག་",
      "ཆེན་པོ་དང་ཐབས་ཅིག་"
  );
  text = text.replaceAll("མ་ངེས་པའི་", "");
  text = text.replaceAll("ཨིན་ཇིའི་དམག་འཁྲུག་དང་།", "");
  text = text.replaceAll("དབུས་ཤར་ཨེན་ཊེ་ཡ", "དཀྱིལ་ཤར་ཨེ་ཤ་ཡ");
  text = text.replaceAll("ང་ཀྱི་", "ང་གི་");
  text = text.replaceAll("སྟོང་ཉིས་བརྒྱ་ལྔ་བཅུ", "ཉིས་སྟོང་ལྔ་བརྒྱ");
  text = text.replaceAll("ཁྲེན་སྣ་ཁུག་གི", "ཁྲེན་གྱི");
  //ཁྲེན་སྣ་ཁུག་གི
  text = text.replaceAll("བརྡ་བཚོགས་", "བརྡ་བཏང་");
  text = text.replaceAll("སྒ་ཟ", "སྒ་ཛ");
  text = text.replaceAll("སྒ་ས", "སྒ་ཛ");
  text = text.replaceAll("དགྲང་ངར་ཆེ་བ", "ནར་འགྱངས་ཆེ་བ");
  text = text.replaceAll(
      "༸ཏཱ་ལའི་བླ་མ་སྐུ་ཕྲེང་བཅུ་བཞི་པ་ཆེན་པོ། ཕྱི་ལོ་༡༩༨༩ ལོའི་ཟླ་༡༠ ཚེས་༡༥ ཉིན།",
      ""
  );
  //༸ཏཱ་ལའི་བླ་མ་སྐུ་ཕྲེང་བཅུ་བཞི་པ་ཆེན་པོ། ཕྱི་ལོ་༡༩༨༩ ལོའི་ཟླ་༡༠ ཚེས་༡༥ ཉིན།
  text = text.replaceAll("་མཉན་དུ་ཡོད་པ་ན་", "་མཉན་ཡོད་དུ་");
  text = text.replaceAll(
      "ཆེན་པོ་མ་ངེས་པ་དང་ཐབས་ཅིག་",
      "ཆེན་པོ་དང་ཐབས་ཅིག་"
  );
  text = text.replaceAll("མཚན་ཉིད་ངེས་གསལ་མེད་པའི་སྒོ་ནས་", "");
  text = text.replaceAll("མ་ངེས་པའི་", "");
  text = text.replaceAll("ཨིན་ཇིའི་དམག་འཁྲུག་དང་།", "");
  text = text.replaceAll("དབུས་ཤར་ཨེན་ཊེ་ཡ", "དཀྱིལ་ཤར་ཨེ་ཤ་ཡ");
  text = text.replaceAll("ང་ཀྱི་", "ང་གི་");
  text = text.replaceAll("སྟོང་ཉིས་བརྒྱ་ལྔ་བཅུ", "ཉིས་སྟོང་ལྔ་བརྒྱ");
  text = text.replaceAll("༸ཏཱ་ལའི་བླ་མ་དགོངས་པ་རྫོགས", "སྐུ་གཤེགས");
  text = text.replaceAll("༸ཏཱ་ལའི་བླ་མ་གཤེགས", "སྐུ་གཤེགས");
  text = text.replaceAll("མཚན་ཉིད་ངེས་གསལ་མེད་པའི་", "");
  text = text.replaceAll("མཚན་ཉིད་མ་ཚང་བའི་", "");
  text = text.replaceAll(
      "༸ཏཱ་ལའི་བླ་མ་དྲན་གསོའི་དུས་དྲན་",
      "དྲན་གསོའི་དུས་དྲན་"
  );
  text = text.replaceAll("ངེས་གཏན་བྲལ་བའི་", "");
  text = text.replaceAll("༡༩༥༩ ལོའི་", "");
  text = text.replaceAll("ཧ་རན་སི", "ཧྥ་རན་སི");
  text = text.replaceAll("རྟེན་འབུལ་འབུལ་འབུལ་ཆེད", "རྟེན་འབུལ་འབུལ་ཆེད");
  text = text.replaceAll("ཕྱི་ལོ་༢༠༠༨", "");
  text = text.replaceAll("མ་ངེས་པ་", "");
  text = text.replaceAll("ཨིན་ཆས་ཐི་ཡིས་", "");
  text = text.replaceAll("ངེས་མེད་", "");
  text = text.replaceAll("གསལ་ཁ་མེད་པའི་", "");
  text = text.replaceAll("ངེས་མེད་ཀྱི་", "");
  text = text.replaceAll("ངེས་གཏན་མེད་པའི་", "");
  text = text.replaceAll("གཏན་འཁེལ་མེད་པའི་", "");
  text = text.replaceAll(
      "བེེངྒ་ལོར་རྒྱལ་བའི་བླ་མ་མཐོ་རིམ་སློབ་གཉེར་ཁང་",
      "བྷེན་ལོར་ཏཱ་ལའི་བླ་མ་མཐོ་རིམ་སློབ་གཉེར་ཁང་"
  );
  text = text.replaceAll("མ་ངེས་", "");
  text = text.replaceAll("ངེས་ཚིག་མ་བཀོད་པའི་", "");
  text = text.replaceAll("ཨུ་ཡོན་གཞོན་པ", "དྲུང་ཆེ་གཞོན་པ");
  text = text.replaceAll("ཨུ་ཡོན་ཀྲང་", "ཚོགས་གཙོ་");
  text = text.replaceAll("ཨུ་ཡོན་", "འཐུས་མི་");
  text = text.replaceAll("ཀྲུའུ་ཞི", "ཁྲི་བ");
  text = text.replaceAll("ངེས་ཚིག་མ་གཏུགས་པའི་", "");
  text = text.replaceAll("ངེས་ཚིག་མ་གཏུགས་པ་", "");
  text = text.replaceAll("འཕན་པ་ཚེ་རིང་", "སྤེན་པ་ཚེ་རིང་");
  text = text.replaceAll("དབྱི་རན", "ཨི་རན");
  text = text.replaceAll("སྤྱི་མཐུན་ཏང་གི", "སྤྱི་མཐུན་ཚོགས་པའི");
  text = text.replaceAll("སྤྱི་མཐུན་ཏང་གིས", "སྤྱི་མཐུན་ཚོགས་པས");
  text = text.replaceAll("ལུང་མ་བསྟན་གྱི་", "");
  text = text.replaceAll("དྲུག་ཅུ་གྱ་ལྔ་", "དྲུག་ཅུ་རེ་ལྔ་");
  text = text.replaceAll("སྤྱི་མཐུན་ཏང་གི་", "སྤྱི་མཐུན་ཚོགས་པའི་");
  text = text.replaceAll("སྤྱི་མཐུན་ཏང་གིས་", "སྤྱི་མཐུན་ཚོགས་པས་");
  text = text.replaceAll("མི་དམངས་ཏང་གི་", "མི་དམངས་ཚོགས་པའི་");
  text = text.replaceAll("མི་དམངས་ཏང་གིས", "མི་དམངས་ཚོགས་པས་");
  //སྤྱི་མཐུན་ཏང་

  text = text.replaceAll(
      "༸ཏཱ་ལའི་བླ་མའི་དགོངས་པ་རྫོགས་ཚུལ་",
      "ཁོ་སྐུ་གཤེགས་པའི་སྐོར་"
  );
  text = text.replaceAll("MITRA", "Monlam AI");
  text = text.replaceAll("སྡིངས་ཆ་རྫོད་པ་", "སྤྱི་ཚོགས་དཀྲུགས་པ་");
  text = text.replaceAll("རྫོད་པ", "སྐྱོན་གཏོང་བ");
  text = text.replaceAll("བརྫད་པ", "སྐྱོན་བཏང་བ");
  text = text.replaceAll("སྡིངས་ཆ", "གར་སྟེགས");
  text = text.replaceAll("བོད་ཀྱི་གཙུག་ལག་གཅེས་བཏུས་པོད་ཕྲེང་ཉི་ཤུ་རྩ་བརྒྱད་པ་སྨན་གཞུང་།", "བོད་ཀྱི་སྲིད་བཤུས་ཉམས་ཞིབ་ཁང་།");

  text = text.replaceAll("རྒྱ་གར་དུ་བྲོས་བྱོལ་དུ་", "རྒྱ་གར་དུ་བཙན་བྱོལ་དུ་");
  text = text.replaceAll("བཙན་བྱོལ་དུ་སྲིད་གཞུང་", "བཙན་བྱོལ་དུ་གཞུང་");
  text = text.replaceAll("བདག་གིས་དེ་རིང་ཇི་ལྟར་གྲོགས་བྱ་ཞེས། །", "གུས་པས་ཁྱེད་ལ་རོགས་རམ་ཅི་ཞིག་བྱེད་ཐུབ་བམ།");

  text = text.replaceAll("བོད་ནི་རྒྱ་ནག་གི་རང་སྐྱོང་ལྗོངས་ཤིག་ཡིན", "བོད་ནི་རྒྱ་ནག་གིས་དབ་སྒྱུར་བྱས་པའི་ཡུལ་ལུང་ཞིག་ཡིན");

  text = text.replaceAll("། ། ། །", "།།");
  text = text.replaceAll("ཡུལ་གྱར་", "བཙན་བྱོལ་");
  text = text.replaceAll("དྲྭ་", "དྲ་");
  text = text.replaceAll("༔", "།");
  text = text.replaceAll("ག། །", "ག །");
  text = text.replaceAll("ག། ", "ག");
  text = text.replaceAll("འོན་ལམ་", "སྨོན་ལམ་");
  text = text.replaceAll("ཨོན་ལམ་", "སྨོན་ལམ་");
  text = text.replaceAll("མིས་བཟོས་ཤེས་པ་དང་", "མིས་བཟོས་རིག་ནུས་དང་");
  text = text.replaceAll("བློ་བཟང་འཕྲིན་ལམ་", "བློ་བཟང་སྨོན་ལམ་");
  text = text.replaceAll("དགེ་བཤེས་བློ་བཟང་དོན་ལྡན་", "བློ་བཟང་སྨོན་ལམ་");
  text = text.replaceAll("བཅོས་མའི་མིའི་རྣམ་དཔྱོད", "མིས་བཟོས་རིག་ནུས");
  text = text.replaceAll("བཅོས་མའི་མིའི་ཀུན་སྤྱོད་", "མིས་བཟོས་རིག་ནུས་ཀྱི་ཀུན་སྤྱོད");
  text = text.replaceAll("བཅོས་མའི་ཤེས་པའི་", "མིས་བཟོས་རིག་ནུས་ཀྱི་");
  text = text.replaceAll("བཅོས་མའི་མིས་བཟོས་རིག་རྩལ་", "མིས་བཟོས་རིག་ནུས་");
  text = text.replaceAll("ས་གྱི་", "ས་ཀྱི་");
  text = text.replaceAll("བློ་བཟང་གི་མཁྱེན་ཡོན་", "བློ་བཟང་སྨོན་ལམ་");
  text = text.replaceAll("བཅོས་མའི་མིས་བཟོས་ཤེས་པ", "མིས་བཟོས་རིག་ནུས");
  text = text.replaceAll("ཇོ་མོ་གླང་ཆེན", "ཇོ་མོ་གླང་མ");
  text = text.replaceAll("ཇོ་མོ་གླང་མ་གྱི་རི་ཡིན", "ཇོ་མོ་གླང་མ་ཡིན");
  text = text.replaceAll("བློ་བཟང་དོན་ལམ", "བློ་བཟང་སྨོན་ལམ");
  text = text.replaceAll("བློ་བཟང་དབོན་ལམ", "བློ་བཟང་སྨོན་ལམ");
  text = text.replaceAll('༡ ཉན་ཐོས་ཀྱི་སྡོམ་པ།', '');
  text = text.replaceAll('ཉན་ཐོས་ཀྱི་སྡོམ་པ།', '');
  

  text = text.replaceAll('ཨེེ།', '');
  text = text.replaceAll('ཀུ་གུལ', 'གྷུས་གྷུལ');
  text = text.replaceAll('ཨེེ།', '');
  text = text.replaceAll('༡༠ ཉན་རྣ་བྱེད་པའི་ལྟུང་བྱེད་འབའ་ཞིག་པ།', '');
  text = text.replaceAll('་ཧཱུྃ་བཛྲ་གུ་རུ་པདྨ་སིདྡྷི་ཧཱུྃ། །', '');
  text = text.replaceAll('་ཧཱུྃ་བཛྲ་གུ་རུ་པདྨ་སིདྡྷི་ཧཱུྃ།།', '');
  text = text.replaceAll('ཨཱཏྨ་ཀོ྅ཧཾ།', '');
  text = text.replaceAll('ཕོ་ཆའི', 'བོད་ཇའི');
  text = text.replaceAll('ཕོ་ཆ་', 'བོད་ཇ་');
  text = text.replaceAll('འབྲིའི་མར་ཇ', 'འབྲི་མར་གྱིས་བཟོས་པའི་ཇ');

  text = text.replaceAll('རྩམ་པ་སྲེག་མ་ལས', 'ནས་བརྔོས་མ་ལས');
  text = text.replaceAll('གཡག་ཞོ་', 'འབྲི་ཞོ་');
  text = text.replaceAll('གཡག་འོ་མ་', 'འབྲིའི་འོ་མ་');
  text = text.replaceAll('བསྲེས་ཏེ་ཀྱང་ཟ', 'བསྲེས་ཏེ་ཟ');
  text = text.replaceAll('ལྷན་ཅིག་ཏུ་འབྱར་ཡང་ལྷུང་བཟེད་ལ་མི་འབྱར་བར་བྱའོ།', '');
  text = text.replaceAll('བོད་ཀྱི་མར་འཐུང་ཇ', 'བོད་ཀྱི་དཀྲུགས་ཇ');
  text = text.replaceAll('ཕོ་ཆང་', 'བོད་ཇ་');
  text = text.replaceAll('མར་འཐུང་', 'དཀྲུགས་ཇ་');
  text = text.replaceAll('ཨཱཾ། ', '');
  
 
  text = text.replaceAll(/M/g, "");
  
  
  
  text = text.replaceAll(/༡ /g, "\n༡ ");
  text = text.replaceAll(/༢ /g, "\n༡ ");
  text = text.replaceAll(/༣ /g, "\n༣ ");
  text = text.replaceAll(/༤ /g, "\n༤ ");
  text = text.replaceAll(/༥ /g, "\n༥ ");
  text = text.replaceAll(/༦ /g, "\n༦ ");
  text = text.replaceAll(/༧ /g, "\n༧ ");
  text = text.replaceAll(/ཨཱཿ/g, "");


  return text.replace(/oldWord/g, "newWord");
}
