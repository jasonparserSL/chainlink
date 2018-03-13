var LinkToken = artifacts.require("./node_modules/linktoken/contracts/LinkToken.sol");

module.exports = function(deployer) {
  deployer.deploy(LinkToken);
};

