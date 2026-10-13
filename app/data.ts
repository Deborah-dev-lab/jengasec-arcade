export type Question={image?:string;prompt:string;answer:string;choices:string[];explanation?:string};
const logo=(file:string,answer:string,others:string[]):Question=>({image:`/logos/${encodeURIComponent(file)}`,prompt:'Which brand or technology is this?',answer,choices:[answer,...others]});
export const games:{[key:string]:{title:string;subtitle:string;day:number;seconds:number;questions:Question[]}}={
 recon:{title:'Logo Recon',subtitle:'Recognize the tech. Trust your instincts.',day:1,seconds:20,questions:[
 logo('Google.png','Google',['Meta','Microsoft','Amazon']),logo('Github.png','GitHub',['GitLab','Bitbucket','Git']),logo('Vscode.png','Visual Studio Code',['Visual Studio','Cursor','IntelliJ IDEA']),logo('Docker.png','Docker',['Kubernetes','Podman','Jenkins']),logo('Slack.png','Slack',['Discord','Teams','Zoom']),logo('reddit.png','Reddit',['Pinterest','Quora','Tumblr']),logo('Mpesa.png','M-Pesa',['Airtel Money','PayPal','Pesapal']),logo('Tesla.png','Tesla',['SpaceX','Rivian','BYD']),logo('Chat.png','ChatGPT',['Claude','Gemini','Perplexity']),logo('Claude.png','Claude',['ChatGPT','Gemini','Copilot'])]},
 blitz:{title:'Logo Blitz',subtitle:'A harder challenge. Only 10 seconds per logo.',day:1,seconds:10,questions:[
 logo('Cursor.png','Cursor',['VS Code','Windsurf','Replit']),logo('Hugging Face.png','Hugging Face',['OpenAI','Anthropic','Replicate']),logo('Kafka.png','Apache Kafka',['RabbitMQ','Redis','Apache Spark']),logo('Kiro.png','Kiro',['Cursor','Zed','Windsurf']),logo('Kubernetes.png','Kubernetes',['Docker','Terraform','OpenShift']),logo('PostgreSQL.png','PostgreSQL',['MySQL','MongoDB','SQLite']),logo('git.png','Git',['GitHub','GitLab','Mercurial']),logo('Octocat.png','GitHub Octocat',['GitLab Tanuki','Linux Tux','Docker Whale']),logo('Spacex.png','SpaceX',['NASA','Blue Origin','Rocket Lab']),logo('mets.png','Meta',['Google','Microsoft','OpenAI'])]},
 phishing:{title:'Phishing Hunter',subtitle:'Spot the scam before it spots you.',day:2,seconds:25,questions:[
 {prompt:'A message says: “Your account will close in 10 minutes. Click this link now.” What is the biggest warning sign?',answer:'Urgency and pressure',choices:['Urgency and pressure','The message is short','It uses punctuation','It mentions an account']},
 {prompt:'Which URL is the safest match for an official example.com login?',answer:'https://example.com/login',choices:['https://example.com/login','https://examp1e.com/login','http://example-login.net','https://example.com.login-check.net']},
 {prompt:'A coworker requests your one-time login code over chat. What should you do?',answer:'Never share the code',choices:['Never share the code','Share it if they know your name','Send a screenshot','Post it in the team channel']},
 {prompt:'An unexpected attachment ends in .exe and claims to be an invoice. Best action?',answer:'Do not open; verify with sender',choices:['Do not open; verify with sender','Open it quickly','Forward to everyone','Disable antivirus first']},
 {prompt:'Which email detail is most useful for checking impersonation?',answer:'The full sender address and domain',choices:['The full sender address and domain','The display name only','The font color','The signature image']},
 {prompt:'You receive a QR code for a surprise giveaway. What should you do?',answer:'Check the destination before entering data',choices:['Check the destination before entering data','Enter your password immediately','Trust it because it is a QR code','Share it with all friends']},
 {prompt:'A caller claiming to be IT asks for your password. Your response?',answer:'Refuse and contact IT through a known channel',choices:['Refuse and contact IT through a known channel','Give a partial password','Share it if they sound professional','Read it aloud quietly']},
 {prompt:'Which is a strong sign a login page might be fake?',answer:'The domain is a lookalike',choices:['The domain is a lookalike','It has a padlock icon','It uses a blue button','It has a logo']}]},
 code:{title:'Crack the Code',subtitle:'Decrypt, deduce, and defend.',day:3,seconds:30,questions:[
 {prompt:'In binary, what is 01000001 in ASCII?',answer:'A',choices:['A','B','1','Z']},
 {prompt:'What does ROT13 turn “URYYB” into?',answer:'HELLO',choices:['HELLO','WORLD','HAPPY','HACKS']},
 {prompt:'Which HTTP status code means “Not Found”?',answer:'404',choices:['404','200','301','500']},
 {prompt:'Which principle means giving users only the access they need?',answer:'Least privilege',choices:['Least privilege','Open access','Security by obscurity','Maximum trust']},
 {prompt:'What is the hexadecimal representation of decimal 15?',answer:'F',choices:['F','E','10','A']},
 {prompt:'Which protocol is normally used to securely browse websites?',answer:'HTTPS',choices:['HTTPS','FTP','Telnet','HTTP']},
 {prompt:'What is the output of 2 ** 3 in Python?',answer:'8',choices:['8','6','9','5']},
 {prompt:'What does MFA stand for?',answer:'Multi-Factor Authentication',choices:['Multi-Factor Authentication','Managed Firewall Access','Mainframe File Authorization','Multiple Format Algorithm']}]}
};
// Edit these values to change when games unlock. +03:00 is East Africa Time.
export const unlocks:{[key:number]:string}={1:'2026-10-14T00:00:00+03:00',2:'2026-10-15T09:00:00+03:00',3:'2026-10-16T09:00:00+03:00'};
