
class Computers{
    constructor(PCSerialNo,Model,Make,ProcessorDetails,ProcessorClockSpeed,ProcessorCores,ProcessorLogicalProcessor,HardDriveSize,HardDriveSerialNo,TotalRAMSize,AvailableRAMSlot,Slot1Size,Slot1Type,Slot1Speed,Slot2Size,Slot2Type,Slot2Speed,Slot3Size,Slot3Type,Slot3Speed,Slot4Size,Slot4Type,Slot4Speed,Hostname,LanMACID,LanIPv4ADDR,LanIPv6ADDR,LanAdapterName,WiFiMacID,WiFiIPv4ADDR,WiFiIPv6ADDR,WiFiAdapterName,OperatingSystem,OSArch){
        this.PCSerialNo = PCSerialNo; 
        this.Model = Model; 
        this.Make = Make;
        this.ProcessorDetails = ProcessorDetails;
        this.ProcessorClockSpeed = ProcessorClockSpeed;
        this.ProcessorCores = ProcessorCores;
        this.ProcessorLogicalProcessor = ProcessorLogicalProcessor;
        this.HardDriveSize = HardDriveSize;
        this.HardDriveSerialNo = HardDriveSerialNo;
        this.TotalRAMSize = TotalRAMSize;
        this.AvailableRAMSlot = AvailableRAMSlot;
        this.Slot1Size = Slot1Size;
        this.Slot1Type = Slot1Type;
        this.Slot1Speed = Slot1Speed;
        this.Slot2Size = Slot2Size;
        this.Slot2Type = Slot2Type;
        this.Slot2Speed = Slot2Speed;
        this.Slot3Size = Slot3Size;
        this.Slot3Type = Slot3Type;
        this.Slot3Speed = Slot3Speed;
        this.Slot4Size = Slot4Size;
        this.Slot4Type = Slot4Type;
        this.Slot4Speed = Slot4Speed
        this.Hostname = Hostname;
        this.LanMACID = LanMACID;
        this.LanIPv4ADDR = LanIPv4ADDR;
        this.LanIPv6ADDR = LanIPv6ADDR;
        this.LanAdapterName = LanAdapterName;
        this.WiFiMacID = WiFiMacID;
        this.WiFiIPv4ADDR = WiFiIPv4ADDR;
        this.WiFiIPv6ADDR = WiFiIPv6ADDR;
        this.WiFiAdapterName = WiFiAdapterName;
        this.OperatingSystem = OperatingSystem;
        this.OSArch = OSArch;
    }
}

module.exports = Computers;