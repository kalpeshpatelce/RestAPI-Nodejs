const { request } = require('http');
var config = require('./dbconfig');
const sql = require('mssql');


async function getComputers() {
    try {
        let pool = await sql.connect(config);
        let GetComp = await pool.request().query("SELECT * from Computers");
        return GetComp.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


async function getComputer(sId) {
    try {
        console.log(sId)
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.VarChar(50), sId)
            .query("SELECT * from Computers where PCSerialNo = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

async function DeleteComputer(sId) {
    try {
        console.log(sId)
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.VarChar(50), sId)
            .query("DELETE from Computers where PCSerialNo = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

async function AddComputer(order) {
    console.log("DBOperation Page:",order);
    try {
        let pool = await sql.connect(config);
        let insertComputer = await pool.request()
        
        .input('PCSerialNo', sql.VarChar(50), order.PCSerialNo)
        .input('Model', sql.VarChar(sql.MAX), order.Model)
        .input('Make', sql.VarChar(sql.MAX), order.Make)
        .input('ProcessorDetails', sql.VarChar(sql.MAX), order.ProcessorDetails)
        .input('ProcessorClockSpeed', sql.VarChar(sql.MAX), order.ProcessorClockSpeed)
        .input('ProcessorCores', sql.VarChar(sql.MAX), order.ProcessorCores)
        .input('ProcessorLogicalProcessor', sql.VarChar(sql.MAX), order.ProcessorLogicalProcessor)
        .input('HardDriveSize', sql.VarChar(sql.MAX), order.HardDriveSize)
        .input('HardDriveSerialNo', sql.VarChar(sql.MAX), order.HardDriveSerialNo)
        .input('TotalRAMSize', sql.VarChar(sql.MAX), order.TotalRAMSize)
        .input('AvailableRAMSlot', sql.VarChar(sql.MAX), order.AvailableRAMSlot)
        .input('Slot1Size', sql.VarChar(sql.MAX), order.Slot1Size)
        .input('Slot1Type', sql.VarChar(sql.MAX), order.Slot1Type)
        .input('Slot1Speed', sql.VarChar(sql.MAX), order.Slot1Speed)
        .input('Slot2Size', sql.VarChar(sql.MAX), order.Slot2Size)
        .input('Slot2Type', sql.VarChar(sql.MAX), order.Slot2Type)
        .input('Slot2Speed', sql.VarChar(sql.MAX), order.Slot2Speed)
        .input('Slot3Size', sql.VarChar(sql.MAX), order.Slot3Size)
        .input('Slot3Type', sql.VarChar(sql.MAX), order.Slot3Type)
        .input('Slot3Speed', sql.VarChar(sql.MAX), order.Slot3Speed)
        .input('Slot4Size', sql.VarChar(sql.MAX), order.Slot4Size)
        .input('Slot4Type', sql.VarChar(sql.MAX), order.Slot4Type)
        .input('Slot4Speed', sql.VarChar(sql.MAX), order.Slot4Speed)
        .input('Hostname', sql.VarChar(sql.MAX), order.Hostname)
        .input('LanMACID', sql.VarChar(sql.MAX), order.LanMACID)
        .input('LanIPv4ADDR', sql.VarChar(sql.MAX), order.LanIPv4ADDR)
        .input('LanIPv6ADDR', sql.VarChar(sql.MAX), order.LanIPv6ADDR)
        .input('LanAdapterName', sql.VarChar(sql.MAX), order.LanAdapterName)
        .input('WiFiMacID', sql.VarChar(sql.MAX), order.WiFiMacID)
        .input('WiFiIPv4ADDR', sql.VarChar(sql.MAX), order.WiFiIPv4ADDR)
        .input('WiFiIPv6ADDR', sql.VarChar(sql.MAX), order.WiFiIPv6ADDR)
        .input('WiFiAdapterName', sql.VarChar(sql.MAX), order.WiFiAdapterName)
        .input('OperatingSystem', sql.VarChar(sql.MAX), order.OperatingSystem)
        .input('OSArch', sql.VarChar(sql.MAX), order.OSArch)
        .execute('InsertComputers');
        return insertComputer.recordsets;
    }
    catch (err) {
        console.log(err)
        if (err.errno==2627){
            console.log("Duplicate key From dboperation");
            return ("Duplicate Key");
            }
    }
}

async function UpdateComputer(Serialid,order) {
    try {
        console.log("-----------------------");
        console.log(Serialid)
        let pool = await sql.connect(config);
        let ChangeComputer = await pool.request()
        .input('PCSerialNo', sql.VarChar(50), Serialid)
        .input('Model', sql.VarChar(sql.MAX), order.Model)
        .input('Make', sql.VarChar(sql.MAX), order.Make)
        .input('ProcessorDetails', sql.VarChar(sql.MAX), order.ProcessorDetails)
        .input('ProcessorClockSpeed', sql.VarChar(sql.MAX), order.ProcessorClockSpeed)
        .input('ProcessorCores', sql.VarChar(sql.MAX), order.ProcessorCores)
        .input('ProcessorLogicalProcessor', sql.VarChar(sql.MAX), order.ProcessorLogicalProcessor)
        .input('HardDriveSize', sql.VarChar(sql.MAX), order.HardDriveSize)
        .input('HardDriveSerialNo', sql.VarChar(sql.MAX), order.HardDriveSerialNo)
        .input('TotalRAMSize', sql.VarChar(sql.MAX), order.TotalRAMSize)
        .input('AvailableRAMSlot', sql.VarChar(sql.MAX), order.AvailableRAMSlot)
        .input('Slot1Size', sql.VarChar(sql.MAX), order.Slot1Size)
        .input('Slot1Type', sql.VarChar(sql.MAX), order.Slot1Type)
        .input('Slot1Speed', sql.VarChar(sql.MAX), order.Slot1Speed)
        .input('Slot2Size', sql.VarChar(sql.MAX), order.Slot2Size)
        .input('Slot2Type', sql.VarChar(sql.MAX), order.Slot2Type)
        .input('Slot2Speed', sql.VarChar(sql.MAX), order.Slot2Speed)
        .input('Slot3Size', sql.VarChar(sql.MAX), order.Slot3Size)
        .input('Slot3Type', sql.VarChar(sql.MAX), order.Slot3Type)
        .input('Slot3Speed', sql.VarChar(sql.MAX), order.Slot3Speed)
        .input('Slot4Size', sql.VarChar(sql.MAX), order.Slot4Size)
        .input('Slot4Type', sql.VarChar(sql.MAX), order.Slot4Type)
        .input('Slot4Speed', sql.VarChar(sql.MAX), order.Slot4Speed)
        .input('Hostname', sql.VarChar(sql.MAX), order.Hostname)
        .input('LanMACID', sql.VarChar(sql.MAX), order.LanMACID)
        .input('LanIPv4ADDR', sql.VarChar(sql.MAX), order.LanIPv4ADDR)
        .input('LanIPv6ADDR', sql.VarChar(sql.MAX), order.LanIPv6ADDR)
        .input('LanAdapterName', sql.VarChar(sql.MAX), order.LanAdapterName)
        .input('WiFiMacID', sql.VarChar(sql.MAX), order.WiFiMacID)
        .input('WiFiIPv4ADDR', sql.VarChar(sql.MAX), order.WiFiIPv4ADDR)
        .input('WiFiIPv6ADDR', sql.VarChar(sql.MAX), order.WiFiIPv6ADDR)
        .input('WiFiAdapterName', sql.VarChar(sql.MAX), order.WiFiAdapterName)
        .input('OperatingSystem', sql.VarChar(sql.MAX), order.OperatingSystem)
        .input('OSArch', sql.VarChar(sql.MAX), order.OSArch)
        .execute('UpdateComputers');
        return ChangeComputer.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    getComputers: getComputers,
    getComputer: getComputer,
    DeleteComputer: DeleteComputer,
    AddComputer: AddComputer,
    UpdateComputer: UpdateComputer
}