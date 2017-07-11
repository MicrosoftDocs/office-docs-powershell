---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Reset-CsDeviceUpdateRule

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Rejects a device update rule that has been imported to the system.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Rejects a device update rule that has been imported to the system.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Reset-CsDeviceUpdateRule [[-Identity] <XdsIdentity>] [-WhatIf] [-Confirm] [-Force] [<CommonParameters>]
```

### Instance
```
Reset-CsDeviceUpdateRule [-Instance <PSObject>] [-WhatIf] [-Confirm] [-Force] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Microsoft Lync Server 2010 uses device update rules as a way to provide firmware updates to devices that run Lync 2010 Phone Edition.
Periodically, administrators upload a set of device update rules to Lync Server 2010.
After those rules have been tested and approved, they are automatically downloaded and applied to the appropriate devices as those devices connect to the system.
By default devices check for new update rules each time they turn on and connect to Lync Server.
Devices also check for updates every 24 hours after that initial sign on.

Each new device update rule added to the system is marked as "Pending." That means that the update will be downloaded and installed by the appropriate test devices; however, it will not be downloaded and installed by client devices in general.
This gives you an opportunity to test the updates and ensure that there are no adverse effects before you make this update widely available.
As soon as you are convinced that the update has passed your tests and will work for your organization, you can then use the Approve-CsDeviceUpdateRule to approve the update.

On the other hand, administrators might conclude that a given update should not be used in the organization (for example, the update might cause a conflict with in-house software).
In that case, administrators can use the Reset-CsDeviceUpdateRule cmdlet to reject the update.
When that happens, the PendingVersion of the update rule is set to a null value.
In turn, that means that test devices that log on to the system will uninstall the update and reinstall the approved version of that update.
And because the update was never approved, that means that the update will never be installed by anything other than those test devices.
As a result, there will be no impact on the general user population.

The Reset-CsDeviceUpdateRule cmdlet can only be used for device update rules in the Pending state.
If a rule has already been approved, you will need to use the Restore-CsDeviceUpdateRule cmdlet to roll back the deployment of the device update.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Reset-CsDeviceUpdateRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Reset-CsDeviceUpdateRule"}

**Below Content Applies To:** Lync Server 2013

Lync Server uses device update rules as a way to provide firmware updates to devices that run Lync Phone Edition.
Periodically, administrators upload a set of device update rules to Lync Server.
After those rules have been tested and approved, they are automatically downloaded and applied to the appropriate devices as those devices connect to the system.
By default devices check for new update rules each time they turn on and connect to Lync Server.
Devices also check for updates every 24 hours after that initial sign on.

Each new device update rule added to the system is marked as "Pending." That means that the update will be downloaded and installed by the appropriate test devices; however, it will not be downloaded and installed by client devices in general.
This gives you an opportunity to test the updates and ensure that there are no adverse effects before you make this update widely available.
As soon as you are convinced that the update has passed your tests and will work for your organization, you can then use the Approve-CsDeviceUpdateRule to approve the update.

On the other hand, administrators might conclude that a given update should not be used in the organization (for example, the update might cause a conflict with in-house software).
In that case, administrators can use the Reset-CsDeviceUpdateRule cmdlet to reject the update.
When that happens, the PendingVersion of the update rule is set to a null value.
In turn, that means that test devices that log on to the system will uninstall the update and reinstall the approved version of that update.
And because the update was never approved, that means that the update will never be installed by anything other than those test devices.
As a result, there will be no impact on the general user population.

The Reset-CsDeviceUpdateRule cmdlet can only be used for device update rules in the Pending state.
If a rule has already been approved, you will need to use the Restore-CsDeviceUpdateRule cmdlet to roll back the deployment of the device update.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Reset-CsDeviceUpdateRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Reset-CsDeviceUpdateRule"}

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 uses device update rules as a way to provide firmware updates to devices that run Skype for Business Phone Edition.
Periodically, administrators upload a set of device update rules to Skype for Business Server 2015.
After those rules have been tested and approved, they are automatically downloaded and applied to the appropriate devices as those devices connect to the system.
By default devices check for new update rules each time they turn on and connect to Skype for Business Server 2015.
Devices also check for updates every 24 hours after that initial sign on.

Each new device update rule added to the system is marked as "Pending." That means that the update will be downloaded and installed by the appropriate test devices; however, it will not be downloaded and installed by client devices in general.
This gives you an opportunity to test the updates and ensure that there are no adverse effects before you make this update widely available.
As soon as you are convinced that the update has passed your tests and will work for your organization, you can then use the Approve-CsDeviceUpdateRule cmdlet to approve the update.

On the other hand, administrators might conclude that a given update should not be used in the organization (for example, the update might cause a conflict with in-house software).
In that case, administrators can use the Reset-CsDeviceUpdateRule cmdlet to reject the update.
When that happens, the PendingVersion of the update rule is set to a null value.
In turn, that means that test devices that log on to the system will uninstall the update and reinstall the approved version of that update.
And because the update was never approved, that means that the update will never be installed by anything other than those test devices.
As a result, there will be no impact on the general user population.

The Reset-CsDeviceUpdateRule cmdlet can only be used for device update rules in the Pending state.
If a rule has already been approved, you will need to use the Restore-CsDeviceUpdateRule cmdlet to roll back the deployment of the device update.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Reset-CsDeviceUpdateRule -Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9
```

The command shown in Example 1 resets the device update rule d5ce3c10-2588-420a-82ac-dc2d9b1222ff9 found on the service WebServer:atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 resets the device update rule d5ce3c10-2588-420a-82ac-dc2d9b1222ff9 found on the service WebServer:atl-cs-001.litwareinc.com.

Reset-CsDeviceUpdateRule -Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 resets the device update rule d5ce3c10-2588-420a-82ac-dc2d9b1222ff9 found on the service WebServer:atl-cs-001.litwareinc.com.

Reset-CsDeviceUpdateRule -Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsDeviceUpdateRule -Filter service:WebServer:atl-cs-001.litwareinc.com*  | Reset-CsDeviceUpdateRule
```

The preceding command resets all the device update rules that have been configured for the service WebServer:atl-cs-001.litwareinc.com.
This is done by first calling Get-CsDeviceUpdateRule along with the Filter parameter; the filter value "WebServer:atl-cs-001.litwareinc.com*" ensures that only rules that have an Identity that begins with the characters "WebServer:atl-cs-001.litwareinc.com" will be returned.
(By definition, these are all the device update rules that have been assigned to the service WebServer:atl-cs-001.litwareinc.com.) The filtered collection is then piped to the Reset-CsDeviceUpdateRule cmdlet, which resets each rule in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 resets all the device update rules that have been configured for the service WebServer:atl-cs-001.litwareinc.com.
This is done by first calling Get-CsDeviceUpdateRule along with the Filter parameter; the filter value "WebServer:atl-cs-001.litwareinc.com*" ensures that only rules that have an Identity that begins with the characters "WebServer:atl-cs-001.litwareinc.com" will be returned.
(By definition, these are all the device update rules that have been assigned to the service WebServer:atl-cs-001.litwareinc.com.) The filtered collection is then piped to the Reset-CsDeviceUpdateRule cmdlet, which resets each rule in the collection.

Get-CsDeviceUpdateRule -Filter service:WebServer:atl-cs-001.litwareinc.com* | Reset-CsDeviceUpdateRule

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 resets all the device update rules that have been configured for the service WebServer:atl-cs-001.litwareinc.com.
This is done by first calling the Get-CsDeviceUpdateRule cmdlet along with the Filter parameter; the filter value "WebServer:atl-cs-001.litwareinc.com*" ensures that only rules that have an Identity that begins with the characters "WebServer:atl-cs-001.litwareinc.com" will be returned.
(By definition, these are all the device update rules that have been assigned to the service WebServer:atl-cs-001.litwareinc.com.) The filtered collection is then piped to the Reset-CsDeviceUpdateRule cmdlet, which resets each rule in the collection.

Get-CsDeviceUpdateRule -Filter service:WebServer:atl-cs-001.litwareinc.com* | Reset-CsDeviceUpdateRule

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsDeviceUpdateRule | Where-Object {$_.Brand -eq "LG-Nortel"} | Reset-CsDeviceUpdateRule
```

The command shown in Example 3 resets all the device update rules for the brand LG-Nortel.
To do this, the command first calls Get-CsDeviceUpdateRule without any parameters in order to return a collection of all the device update rules currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those rules where the Brand property is equal to LG-Nortel.
After that the filtered collection is piped to Reset-CsDeviceUpdateRule, which resets all the rules in the filtered collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 resets all the device update rules for the brand LG-Nortel.
To do this, the command first calls Get-CsDeviceUpdateRule without any parameters in order to return a collection of all the device update rules currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those rules where the Brand property is equal to LG-Nortel.
After that the filtered collection is piped to Reset-CsDeviceUpdateRule, which resets all the rules in the filtered collection.

Get-CsDeviceUpdateRule | Where-Object {$_.Brand -eq "LG-Nortel"} | Reset-CsDeviceUpdateRule

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 resets all the device update rules for the brand LG-Nortel.
To do this, the command first calls the Get-CsDeviceUpdateRule cmdlet without any parameters in order to return a collection of all the device update rules currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those rules where the Brand property is equal to LG-Nortel.
After that the filtered collection is piped to the Reset-CsDeviceUpdateRule cmdlet, which resets all the rules in the filtered collection.

Get-CsDeviceUpdateRule | Where-Object {$_.Brand -eq "LG-Nortel"} | Reset-CsDeviceUpdateRule

## PARAMETERS

### -Identity
Unique identifier for the device update rule being reset.
The Identity for a device update rule consists of a two parts: the service where the device update rule has been assigned (for example, service:WebServer:atl-cs-001.litwareinc.com) and a globally unique identifier (GUID).
Consequently, a device update rule configured for the Redmond site will have an Identity similar to this: "service:WebServer:atl-cs-oo1.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9".

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

### -Force
**Below Content Applies To:** Lync Server 2010

{{Fill Force Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Suppresses any confirmation prompts or non-fatal error messages that might occur when you run the cmdlet.



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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdate.Rule object.
Reset-CsDeviceUpdateRule accepts pipelined instances of the device update rule object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdate.Rule object.
The Reset-CsDeviceUpdateRule cmdlet accepts pipelined instances of the device update rule object.

## OUTPUTS

###  
None.
Instead, Reset-CsDeviceUpdateRule resets instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdate.Rule object.

###  
None.
Instead, the Reset-CsDeviceUpdateRule cmdlet resets instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdate.Rule object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/0de47bcf-da8f-4dae-b293-3adac3c1acdb(OCS.14).aspx)

[Approve-CsDeviceUpdateRule]()

[Get-CsDeviceUpdateRule]()

[Remove-CsDeviceUpdateRule]()

[Restore-CsDeviceUpdateRule]()

[Online Version](http://technet.microsoft.com/EN-US/library/0de47bcf-da8f-4dae-b293-3adac3c1acdb(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0de47bcf-da8f-4dae-b293-3adac3c1acdb(OCS.16).aspx)

