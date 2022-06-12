"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Etudiant",
    embedded: false
  },
  {
    name: "Specialite",
    embedded: false
  },
  {
    name: "Departement",
    embedded: false
  },
  {
    name: "Rapport",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/lecalviniste-4a6974/formulaire-develop/dev`
});
exports.prisma = new exports.Prisma();
