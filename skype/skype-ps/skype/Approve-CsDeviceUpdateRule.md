---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Approve-CsDeviceUpdateRule
schema: 2.0.0
---

# Approve-CsDeviceUpdateRule

## SYNOPSIS
Approves a device update rule that has been imported to the system.
After a device update rule has been approved, the corresponding update will automatically be downloaded and installed by client devices affected by the update.
This cmdlet was introduced in Lync Server 2010.

## SYNTAX

### Identity
```
Approve-CsDeviceUpdateRule [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Approve-CsDeviceUpdateRule [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server uses device update rules as a way to provide firmware updates to devices that run Skype for Business Phone Edition.
Periodically, administrators upload a set of device update rules to Skype for Business Server; after those rules have been tested and approved, they are automatically downloaded and applied to the appropriate devices as those devices connect to the system.
By default, devices check for new update rules each time they turn on and connect to Skype for Business Server.
Devices also check for updates every 24 hours after that initial sign on.

Each new device update rule added to the system is marked as "Pending." That means that the update will be downloaded and installed by the appropriate test devices; however, it will not be downloaded and installed by client devices in general.
This gives you an opportunity to test the updates and ensure that there are no adverse effects before you make this update widely available.
As soon as you are convinced that the update has passed your tests and will work for your organization, you can then use the Approve-CsDeviceUpdateRule cmdlet to approve the update.

When you approve an update, the PendingVersion of the associated update rule is assigned to the ApprovedVersion, and the PendingVersion property is cleared.
For example, suppose the PendingVersion of a new update rule is version 1.0.0.1.
After you run the Approve-CsDeviceUpdateRule cmdlet, the PendingVersion will be set to a null value, and the ApprovedVersion will be set to 1.0.0.1.
The next time a client device logs on, the device will automatically check to see if there are any newly-approved updates applicable for that device.
If so, the update will automatically be downloaded and installed.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Approve-CsDeviceUpdateRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Approve-CsDeviceUpdateRule"}`


## EXAMPLES
### -------------------------- Example 1 --------------------------
```
Approve-CsDeviceUpdateRule -Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9
```

The command shown in Example 1 approves the device update rule d5ce3c10-2588-420a-82ac-dc2d9b1222ff9 found on the service WebServer:atl-cs-001.litwareinc.com.


### -------------------------- Example 2 --------------------------
```
Get-CsDeviceUpdateRule -Filter service:WebServer:atl-cs-001.litwareinc.com* | Approve-CsDeviceUpdateRule
```

Example 2 approves all the device update rules that have been configured for the service WebServer:atl-cs-001.litwareinc.com.
To do this, the command first calls the Get-CsDeviceUpdateRule cmdlet along with the Filter parameter; the filter value "service:WebServer:atl-cs-001.litwareinc.com*" ensures that only those rules that have an Identity that begins with the string value "service:WebServer:atl-cs-001.litwareinc.com" will be returned.
(By definition, these are all the device update rules that have been assigned to the service WebServer:atl-cs-001.litwareinc.com.) This filtered collection is then piped to the Approve-CsDeviceUpdateRule cmdlet, which approves each rule in the collection.


### -------------------------- Example 3 --------------------------
```
Get-CsDeviceUpdateRule | Where-Object {$_.Brand -eq "LG-Nortel"} | Approve-CsDeviceUpdateRule
```

The command shown in Example 3 approves all the device update rules for the specified brand (LG-Nortel).
To do this, the command first calls the Get-CsDeviceUpdateRule cmdlet to return a collection of all the device update rules currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those rules where the Brand property is equal to LG-Nortel.
The filtered collection is then piped to the Approve-CsDeviceUpdateRule cmdlet, which approves each rule in the collection.



## PARAMETERS

### -Identity
Unique identifier for the device update rule being approved.
The Identity for a device update rule consists of two parts: the service where the device update rule has been assigned (for example, service:WebServer:atl-cs-001.litwareinc.com) and a globally unique identifier (GUID).
Consequently, a device update rule configured for the Redmond site will have an Identity similar to this: service:WebServer:atl-cs-001.litwareinc.com /d5ce3c10-2588-420a-82ac-dc2d9b1222ff9.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdate.Rule object.
The Approve-CsDeviceUpdateRule cmdlet accepts pipelined instances of the device update rule object.

## OUTPUTS

###  
None.
Instead, the Approve-CsDeviceUpdateRule cmdlet approves instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdate.Rule object.

## NOTES

## RELATED LINKS

[Get-CsDeviceUpdateRule](Get-CsDeviceUpdateRule.md)

[Remove-CsDeviceUpdateRule](Remove-CsDeviceUpdateRule.md)

[Reset-CsDeviceUpdateRule](Reset-CsDeviceUpdateRule.md)

[Restore-CsDeviceUpdateRule](Restore-CsDeviceUpdateRule.md)