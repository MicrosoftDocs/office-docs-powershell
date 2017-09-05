---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsDeviceUpdateRule

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes a device update rule configured for use in your organization.
Device update rules are used to associate firmware updates with devices that run Microsoft Lync 2010 Phone Edition.

**Below Content Applies To:** Lync Server 2013

Removes a device update rule configured for use in your organization.
Device update rules are used to associate firmware updates with devices that run Lync Phone Edition.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Removes a device update rule configured for use in your organization.
Device update rules are used to associate firmware updates with devices that run Skype for Business Phone Edition.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsDeviceUpdateRule [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Microsoft Lync Server 2010 uses device update rules as a way to provide firmware updates to devices that run Lync 2010 Phone Edition.
Periodically, administrators upload a set of device update rules to Lync Server 2010; after those rules have been tested and approved, they are then automatically downloaded and applied to the appropriate devices as those devices connect to the system.
By default devices check for new update rules each time they turn on and connect to Lync Server.
Devices also check for updates every 24 hours after that initial sign on.

Administrators cannot create their own device update rules; update rules can be created only by downloading and importing rule sets from Microsoft.com.
This means that, over time, you are likely to collect rules that are outdated or are of no use in your organization.
(For example, if your organization no longer uses LG-Nortel phones, then you no longer need the firmware updates for those devices.) Although these unneeded rules do not create any problems, they can complicate administration: it can be confusing to run the Get-CsDeviceUpdateRule cmdlet to return a collection of all your device update rules, only to discover that many of those rules are not applicable in your organization.
To help lessen this confusion, Remove-CsDeviceUpdateRule can be used to remove any device update rule (or set of rules) that has been imported for use.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsDeviceUpdateRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsDeviceUpdateRule"}

**Below Content Applies To:** Lync Server 2013

Lync Server uses device update rules as a way to provide firmware updates to devices that run Lync Phone Edition.
Periodically, administrators upload a set of device update rules to Lync Server; after those rules have been tested and approved, they are then automatically downloaded and applied to the appropriate devices as those devices connect to the system.
By default devices check for new update rules each time they turn on and connect to Lync Server.
Devices also check for updates every 24 hours after that initial sign on.

Administrators cannot create their own device update rules; update rules can be created only by downloading and importing rule sets from the Microsoft website.
This means that, over time, you are likely to collect rules that are outdated or are of no use in your organization.
(For example, if your organization no longer uses LG-Nortel phones, then you no longer need the firmware updates for those devices.) Although these unneeded rules do not create any problems, they can complicate administration: it can be confusing to run the Get-CsDeviceUpdateRule cmdlet to return a collection of all your device update rules, only to discover that many of those rules are not applicable in your organization.
To help lessen this confusion, Remove-CsDeviceUpdateRule can be used to remove any device update rule (or set of rules) that has been imported for use.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsDeviceUpdateRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsDeviceUpdateRule"}

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 uses device update rules as a way to provide firmware updates to devices that run Skype for Business Phone Edition.
Periodically, administrators upload a set of device update rules to Skype for Business Server 2015; after those rules have been tested and approved, they are then automatically downloaded and applied to the appropriate devices as those devices connect to the system.
By default devices check for new update rules each time they turn on and connect to Skype for Business Server 2015.
Devices also check for updates every 24 hours after that initial sign on.

Administrators cannot create their own device update rules; update rules can be created only by downloading and importing rule sets from the Microsoft website.
This means that, over time, you are likely to collect rules that are outdated or are of no use in your organization.
(For example, if your organization no longer uses LG-Nortel phones, then you no longer need the firmware updates for those devices.) Although these unneeded rules do not create any problems, they can complicate administration: it can be confusing to run the Get-CsDeviceUpdateRule cmdlet to return a collection of all your device update rules, only to discover that many of those rules are not applicable in your organization.
To help lessen this confusion, the Remove-CsDeviceUpdateRule cmdlet can be used to remove any device update rule (or set of rules) that has been imported for use.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsDeviceUpdateRule -Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9
```

The preceding command deletes the device update rule with the Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9.
After the rule has been deleted, the corresponding firmware update will no longer be available for use.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 deletes the device update rule with the Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9.
After the rule has been deleted, the corresponding firmware update will no longer be available for use.

Remove-CsDeviceUpdateRule -Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 deletes the device update rule with the Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9.
After the rule has been deleted, the corresponding firmware update will no longer be available for use.

Remove-CsDeviceUpdateRule -Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsDeviceUpdateRule | Remove-CsDeviceUpdateRule
```

The command shown in Example 2 removes all the device update rules that have been configured for use in your organization.
This is done by calling Get-CsDeviceUpdateRule (without any parameters) in order to return a collection of all the device update rules currently in use.
That collection is then piped to Remove-CsDeviceUpdateRule, which, in turn, deletes each rule in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 removes all the device update rules that have been configured for use in your organization.
This is done by calling Get-CsDeviceUpdateRule (without any parameters) in order to return a collection of all the device update rules currently in use.
That collection is then piped to Remove-CsDeviceUpdateRule, which, in turn, deletes each rule in the collection.

Get-CsDeviceUpdateRule | Remove-CsDeviceUpdateRule

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 removes all the device update rules that have been configured for use in your organization.
This is done by calling the Get-CsDeviceUpdateRule cmdlet (without any parameters) in order to return a collection of all the device update rules currently in use.
That collection is then piped to the Remove-CsDeviceUpdateRule cmdlet, which, in turn, deletes each rule in the collection.

Get-CsDeviceUpdateRule | Remove-CsDeviceUpdateRule

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsDeviceUpdateRule -Filter service:WebServer:atl-cs-001.litwareinc.com* | Remove-CsDeviceUpdateRule
```

In Example 3, all the device update rules that have been imported to the service WebServer:atl-cs-001.litwareinc.com are removed.
To do this, the command first uses Get-CsDeviceUpdateRule and the Filter parameter to retrieve all the device update rules that have an Identity that begins with the string value "service:WebServer:atl-cs-001.litwareinc.com".
This collection is then piped to Remove-CsDeviceUpdateRule, which deletes each rule in that collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the device update rules that have been imported to the service WebServer:atl-cs-001.litwareinc.com are removed.
To do this, the command first uses Get-CsDeviceUpdateRule and the Filter parameter to retrieve all the device update rules that have an Identity that begins with the string value "service:WebServer:atl-cs-001.litwareinc.com".
This collection is then piped to Remove-CsDeviceUpdateRule, which deletes each rule in that collection.

Get-CsDeviceUpdateRule -Filter service:WebServer:atl-cs-001.litwareinc.com* | Remove-CsDeviceUpdateRule

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the device update rules that have been imported to the service WebServer:atl-cs-001.litwareinc.com are removed.
To do this, the command first uses the Get-CsDeviceUpdateRule cmdlet and the Filter parameter to retrieve all the device update rules that have an Identity that begins with the string value "service:WebServer:atl-cs-001.litwareinc.com".
This collection is then piped to the Remove-CsDeviceUpdateRule cmdlet, which deletes each rule in that collection.

Get-CsDeviceUpdateRule -Filter service:WebServer:atl-cs-001.litwareinc.com* | Remove-CsDeviceUpdateRule

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsDeviceUpdateRule | Where-Object {$_.Brand -eq "LG-Nortel"} | Remove-CsDeviceUpdateRule
```

The preceding command deletes all the device update rules that have a Brand equal to "LG-Nortel".
To do this, the cmdlet calls Get-CsDeviceUpdateRule without any parameters in order to retrieve a collection of all the device update rules in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those rules where the Brand is equal to "LG-Nortel".
The filtered collection is then piped to Remove-CsDeviceUpdateRule, which removes each rule in the collection.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 deletes all the device update rules that have a Brand equal to "LG-Nortel".
To do this, the cmdlet calls Get-CsDeviceUpdateRule without any parameters in order to retrieve a collection of all the device update rules in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those rules where the Brand is equal to "LG-Nortel".
The filtered collection is then piped to Remove-CsDeviceUpdateRule, which removes each rule in the collection.

Get-CsDeviceUpdateRule | Where-Object {$_.Brand -eq "LG-Nortel"} | Remove-CsDeviceUpdateRule

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 deletes all the device update rules that have a Brand equal to "LG-Nortel".
To do this, the cmdlet calls the Get-CsDeviceUpdateRule cmdlet without any parameters in order to retrieve a collection of all the device update rules in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those rules where the Brand is equal to "LG-Nortel".
The filtered collection is then piped to the Remove-CsDeviceUpdateRule cmdlet, which removes each rule in the collection.

Get-CsDeviceUpdateRule | Where-Object {$_.Brand -eq "LG-Nortel"} | Remove-CsDeviceUpdateRule

## PARAMETERS

### -Identity
Unique identifier for the device update rule.
The Identity of a device update rule is composed of two parts: The service scope where the rule has been applied (for example, service:WebServer:atl-cs-001.litwareinc.com) and the globally unique identifier (GUID) that was pre-assigned to the rule (for example, d5ce3c10-2588-420a-82ac-dc2d9b1222ff9).
Based on this, the Identity for a given device update rule will look something like this: "service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9".

Wildcards are not allowed when specifying an Identity.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Remove-CsDeviceUpdateRule accepts pipelined instances of the device update rule object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdate.Rule object.
The Remove-CsDeviceUpdateRule cmdlet accepts pipelined instances of the device update rule object.

## OUTPUTS

###  
Remove-CsDeviceUpdateRule does not return a value or object.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.Rule object.

###  
The Remove-CsDeviceUpdateRule cmdlet does not return a value or object.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.Rule object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/42b0bcd5-d567-4867-841e-0d35ac05c09f(OCS.14).aspx)

[Approve-CsDeviceUpdateRule]()

[Get-CsDeviceUpdateRule]()

[Reset-CsDeviceUpdateRule]()

[Restore-CsDeviceUpdateRule]()

[Online Version](http://technet.microsoft.com/EN-US/library/42b0bcd5-d567-4867-841e-0d35ac05c09f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/42b0bcd5-d567-4867-841e-0d35ac05c09f(OCS.16).aspx)

