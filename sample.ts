// This class demoes how to consume the FINOS FO objects
// To check the generated code, open output-samples/model.js
// and model.d.ts

// Target folder is generated by the Travis build,
// check .travis.yml
import { org } from "./target/model.js";

let contact = org.finos.fo.Contact.create({
    name: org.finos.fo.Name.create({name: "maoo@finos.org"}), 
    id: org.finos.fo.Id.create({id: 123456}), 
    email: "maoo@finos.org", 
    twitter: "maoo", 
    phone: "+34 123456" });

console.log(contact);

let country = org.finos.fo.Country.create({
    name: org.finos.fo.Name.create({name: "maoo@finos.org"}), 
    ISOALPHA2: "abc", 
    ISOALPHA3: "def" });
    
console.log(country);