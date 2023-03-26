const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Electronic Medical Records", function() {
    
    let doctor;
    let age;
    let qualifications;

    before(async () => {
        [name, age] = await ethers.getSigners();
        const Doctor = await ethers.getContractFactory("EHR");
        doctor = await Doctor.deploy();
    });


    describe("Doctor", () => {
        it("Should be able to register as a doctor", async () => {
            await doctor.registerNewDoctor(name, age, qualifications);
            await expect(doctor.doctorCount()).to.equal(1);
        });
    })

    describe("Patient", () => {
        it("Should be able to register as a patient", async () => {
            await doctor.registerNewDoctor(name, age, qualifications);
            expect(await doctor.doctorCount()).to.equal(1);
        });
    })
})