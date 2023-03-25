const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Doctor", function() {
    async function createNewDoctor() {
        const [lastName, firstName] = await ethers.getSigners();
        const Doctor = await ethers.getContractFactory("Doctor");
        const littled = await Doctor.deploy();

        return { littled, lastName, firstName};
    }

    async function deployDoctorWith()
    {
        
    }
})