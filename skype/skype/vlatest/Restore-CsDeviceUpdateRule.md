---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Restore-CsDeviceUpdateRule

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Enables you to "roll back" a device update rule that has been approved for use in the organization.
When you restore a device update rule, the approved version of that rule is reset to reflect the update that was in use before the rule was approved.
In turn, client devices that log on to the system will automatically uninstall the most recent update, and then download and reinstall the previous version of that update.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables you to "roll back" a device update rule that has been approved for use in the organization.
When you restore a device update rule, the approved version of that rule is reset to reflect the update that was in use before the rule was approved.
In turn, client devices that log on to the system will automatically uninstall the most recent update, and then download and reinstall the previous version of that update.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Restore-CsDeviceUpdateRule [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Restore-CsDeviceUpdateRule [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Microsoft Lync Server 2010 uses device update rules as a way to provide firmware updates to devices that run Lync 2010 Phone Edition.
Periodically, administrators upload a set of device update rules to Lync Server 2010; after those rules have been tested and approved, they are automatically downloaded and applied to the appropriate devices the next time those devices connect to the system.
By default devices check for new update rules each time they turn on and connect to Lync Server, Devices also check for updates every 24 hours after that initial sign-on.

Each new device update rule added to the system is marked as "Pending." That means that the update will be downloaded and installed by the appropriate test devices; however, it will not be downloaded and installed by client devices in general.
This gives you an opportunity to test the updates and ensure that there are no adverse effects before they make the update widely available.
As soon as you are convinced that the update has passed your tests and will work for your organization, you can then use the Approve-CsDeviceUpdateRule to approve the update.

When you approve an update, the PendingVersion of the associated update rule is assigned to the ApprovedVersion, and the PendingVersion property is cleared.
For example, suppose the PendingVersion of a new update rule is version 1.0.0.1.
After you run Approve-CsDeviceUpdateRule, the PendingVersion will be set to a null value, and the ApprovedVersion will be set to 1.0.0.1.
The next time a client device checks for updates, the update will automatically be downloaded and installed.

In addition to this, any previous version of the update (for example, version 1.0.0.0) will be marked as the RestoreVersion.
This version of the update will remain on the system and will be used if the new update needs to be rolled back.
If problems begin to crop up, administrators can use the Restore-CsDeviceUpdateRule cmdlet to roll back the update.
When that happens, the next time a client device checks for updates the device will automatically uninstall the new update (version 1.0.0.1) and reinstall the previous update (1.0.0.0).

Note that this happens only if there is a previous update to be installed.
If there is no such previous version then the update being rolled back will simply be uninstalled.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Restore-CsDeviceUpdateRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Restore-CsDeviceUpdateRule"}

**Below Content Applies To:** Lync Server 2013

Lync Server uses device update rules as a way to provide firmware updates to devices that run Lync Phone Edition.
Periodically, administrators upload a set of device update rules to Lync Server; after those rules have been tested and approved, they are automatically downloaded and applied to the appropriate devices the next time those devices connect to the system.
By default devices check for new update rules each time they turn on and connect to Lync Server, Devices also check for updates every 24 hours after that initial sign-on.

Each new device update rule added to the system is marked as "Pending." That means that the update will be downloaded and installed by the appropriate test devices; however, it will not be downloaded and installed by client devices in general.
This gives you an opportunity to test the updates and ensure that there are no adverse effects before they make the update widely available.
As soon as you are convinced that the update has passed your tests and will work for your organization, you can then use the Approve-CsDeviceUpdateRule to approve the update.

When you approve an update, the PendingVersion of the associated update rule is assigned to the ApprovedVersion, and the PendingVersion property is cleared.
For example, suppose the PendingVersion of a new update rule is version 1.0.0.1.
After you run Approve-CsDeviceUpdateRule, the PendingVersion will be set to a null value, and the ApprovedVersion will be set to 1.0.0.1.
The next time a client device checks for updates, the update will automatically be downloaded and installed.

In addition to this, any previous version of the update (for example, version 1.0.0.0) will be marked as the RestoreVersion.
This version of the update will remain on the system and will be used if the new update needs to be rolled back.
If problems begin to crop up, administrators can use the Restore-CsDeviceUpdateRule cmdlet to roll back the update.
When that happens, the next time a client device checks for updates the device will automatically uninstall the new update (version 1.0.0.1) and reinstall the previous update (1.0.0.0).

Note that this happens only if there is a previous update to be installed.
If there is no such previous version then the update being rolled back will simply be uninstalled.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Restore-CsDeviceUpdateRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Restore-CsDeviceUpdateRule"}

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 uses device update rules as a way to provide firmware updates to devices that run Skype for Business Phone Edition.
Periodically, administrators upload a set of device update rules to Skype for Business Server 2015; after those rules have been tested and approved, they are automatically downloaded and applied to the appropriate devices the next time those devices connect to the system.
By default devices check for new update rules each time they turn on and connect to Skype for Business Server 2015.
Devices also check for updates every 24 hours after that initial sign-on.

Each new device update rule added to the system is marked as "Pending." That means that the update will be downloaded and installed by the appropriate test devices; however, it will not be downloaded and installed by client devices in general.
This gives you an opportunity to test the updates and ensure that there are no adverse effects before they make the update widely available.
As soon as you are convinced that the update has passed your tests and will work for your organization, you can then use the Approve-CsDeviceUpdateRule cmdlet to approve the update.

When you approve an update, the PendingVersion of the associated update rule is assigned to the ApprovedVersion, and the PendingVersion property is cleared.
For example, suppose the PendingVersion of a new update rule is version 1.0.0.1.
After you run the Approve-CsDeviceUpdateRule cmdlet, the PendingVersion will be set to a null value, and the ApprovedVersion will be set to 1.0.0.1.
The next time a client device checks for updates, the update will automatically be downloaded and installed.

In addition to this, any previous version of the update (for example, version 1.0.0.0) will be marked as the RestoreVersion.
This version of the update will remain on the system and will be used if the new update needs to be rolled back.
If problems begin to crop up, administrators can use the Restore-CsDeviceUpdateRule cmdlet to roll back the update.
When that happens, the next time a client device checks for updates the device will automatically uninstall the new update (version 1.0.0.1) and reinstall the previous update (1.0.0.0).

Note that this happens only if there is a previous update to be installed.
If there is no such previous version then the update being rolled back will simply be uninstalled.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Restore-CsDeviceUpdateRule -Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9
```

The command shown in Example 1 restores the device update rule d5ce3c10-2588-420a-82ac-dc2d9b1222ff9 found on the service WebServer:atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 restores the device update rule d5ce3c10-2588-420a-82ac-dc2d9b1222ff9 found on the service WebServer:atl-cs-001.litwareinc.com.

Restore-CsDeviceUpdateRule -Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 restores the device update rule d5ce3c10-2588-420a-82ac-dc2d9b1222ff9 found on the service WebServer:atl-cs-001.litwareinc.com.

Restore-CsDeviceUpdateRule -Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsDeviceUpdateRule -Filter service:WebServer:atl-cs-001.litwareinc.com* | Restore-CsDeviceUpdateRule
```

The preceding command restores all the device update rules that have been configured for the service WebServer:atl-cs-001.litwareinc.com.
To do this, the command first calls Get-CsDeviceUpdateRule along with the Filter parameter; the filter value "WebServer:atl-cs-001.litwareinc.com*" ensures that only those rules that have an Identity that begins with the string value "WebServer:atl-cs-001.litwareinc.com" will be returned.
(By definition, these are all the device update rules that have been assigned to the service WebServer:atl-cs-001.litwareinc.com.) This filtered collection is then piped to the Restore-CsDeviceUpdateRule cmdlet, which restores each rule in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 restores all the device update rules that have been configured for the service WebServer:atl-cs-001.litwareinc.com.
To do this, the command first calls Get-CsDeviceUpdateRule along with the Filter parameter; the filter value "WebServer:atl-cs-001.litwareinc.com*" ensures that only those rules that have an Identity that begins with the string value "WebServer:atl-cs-001.litwareinc.com" will be returned.
(By definition, these are all the device update rules that have been assigned to the service WebServer:atl-cs-001.litwareinc.com.) This filtered collection is then piped to the Restore-CsDeviceUpdateRule cmdlet, which restores each rule in the collection.

Get-CsDeviceUpdateRule -Filter service:WebServer:atl-cs-001.litwareinc.com* | Restore-CsDeviceUpdateRule

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 restores all the device update rules that have been configured for the service WebServer:atl-cs-001.litwareinc.com.
To do this, the command first calls the Get-CsDeviceUpdateRule cmdlet along with the Filter parameter; the filter value "WebServer:atl-cs-001.litwareinc.com*" ensures that only those rules that have an Identity that begins with the string value "WebServer:atl-cs-001.litwareinc.com" will be returned.
(By definition, these are all the device update rules that have been assigned to the service WebServer:atl-cs-001.litwareinc.com.) This filtered collection is then piped to the Restore-CsDeviceUpdateRule cmdlet, which restores each rule in the collection.

Get-CsDeviceUpdateRule -Filter service:WebServer:atl-cs-001.litwareinc.com* | Restore-CsDeviceUpdateRule

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsDeviceUpdateRule | Where-Object {$_.Brand -eq "LG-Nortel"} | Restore-CsDeviceUpdateRule
```

Example 3 shows how you can restore all the device update rules for a specified brand (LG-Nortel).
To do this, the command first calls Get-CsDeviceUpdateRule without any parameters in order to return a collection of all the device update rules currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those rules where the Brand property is equal to LG-Nortel.
The filtered collection is then piped to Restore-CsDeviceUpdateRule, which restores all the rules in the filtered collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 shows how you can restore all the device update rules for a specified brand (LG-Nortel).
To do this, the command first calls Get-CsDeviceUpdateRule without any parameters in order to return a collection of all the device update rules currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those rules where the Brand property is equal to LG-Nortel.
The filtered collection is then piped to Restore-CsDeviceUpdateRule, which restores all the rules in the filtered collection.

Get-CsDeviceUpdateRule | Where-Object {$_.Brand -eq "LG-Nortel"} | Restore-CsDeviceUpdateRule

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 shows how you can restore all the device update rules for a specified brand (LG-Nortel).
To do this, the command first calls the Get-CsDeviceUpdateRule cmdlet without any parameters in order to return a collection of all the device update rules currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those rules where the Brand property is equal to LG-Nortel.
The filtered collection is then piped to the Restore-CsDeviceUpdateRule cmdlet, which restores all the rules in the filtered collection.

Get-CsDeviceUpdateRule | Where-Object {$_.Brand -eq "LG-Nortel"} | Restore-CsDeviceUpdateRule

## PARAMETERS

### -Identity
Unique identifier for the device update rule being restored.
The Identity for a device update rule consists of two parts: the service where the device update rule has been assigned (for example, service:WebServer:atl-cs-001.litwareinc.com) and a globally unique identifier (GUID).
Consequently, a device update rule configured for the Redmond site will have an Identity similar to this: service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9.

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
Restore-CsDeviceUpdateRule accepts pipelined instances of the device update rule object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdate.Rule object.
The Restore-CsDeviceUpdateRule cmdlet accepts pipelined instances of the device update rule object.

## OUTPUTS

###  
None.
Instead, Restore-CsDeviceUpdateRule restores instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdate.Rule object.

###  
None.
Instead, the Restore-CsDeviceUpdateRule cmdlet restores instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdate.Rule object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/4c89d529-23fc-470e-9006-f15a18ed13fd(OCS.14).aspx)

[Approve-CsDeviceUpdateRule]()

[Get-CsDeviceUpdateRule]()

[Remove-CsDeviceUpdateRule]()

[Reset-CsDeviceUpdateRule]()

[Online Version](http://technet.microsoft.com/EN-US/library/4c89d529-23fc-470e-9006-f15a18ed13fd(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/4c89d529-23fc-470e-9006-f15a18ed13fd(OCS.16).aspx)

