const Migrations = artifacts.require("Migrations");
const Courier = artifacts.require("Courier");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Manager);
  deployer.deploy(PortAuthority);
  deployer.deploy(Transportation);
  deployer.deploy(Customs);
};
