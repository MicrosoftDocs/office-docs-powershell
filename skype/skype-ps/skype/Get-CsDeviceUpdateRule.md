---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsDeviceUpdateRule
schema: 2.0.0
---

# Get-CsDeviceUpdateRule

## SYNOPSIS
Returns information about the device update rules configured for use in your organization.
Device update rules are used to associate firmware updates with devices that run Skype for Business Phone Edition.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsDeviceUpdateRule [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsDeviceUpdateRule [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server uses device update rules as a way to provide firmware updates to devices that run Skype for Business Phone Edition.
Periodically, administrators upload a set of device update rules to Skype for Business Server; after those rules have been tested and approved, they are automatically downloaded and applied to the appropriate devices as those devices connect to the system.
By default devices check for new update rules each time they turn on and connect to Skype for Business Server.
Devices also check for updates every 24 hours after that initial sign on.

Device update rules can be imported (and applied to) the Web Services service.
The Get-CsDeviceUpdateRule cmdlet enables you to return information about the device update rules that have been imported for use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsDeviceUpdateRule
```

The command in Example 1 returns information about all the device update rules that have been applied in your organization.
Calling the Get-CsDeviceUpdateRule cmdlet without any additional parameters always returns the complete collection of device update rules.

### -------------------------- Example 2 --------------------------
```
Get-CsDeviceUpdateRule -Identity service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9
```

The command shown in Example 2 returns information about the device update rule with the Identity "WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9".

### -------------------------- Example 3 --------------------------
```
Get-CsDeviceUpdateRule -Filter service:WebServer:atl-cs-001.litwareinc.com*
```

Example 3 returns information about all the device update rules configured for the service WebServer:atl-cs-001.litwareinc.com.
To accomplish this task, the Filter parameter is used along with the filter value "WebServer:atl-cs-001.litwareinc.com*".
That filter limits the returned data to device update rules that have an Identity that begins with the string value "service:WebServer:atl-cs-001.litwareinc.com."

### -------------------------- Example 4 --------------------------
```
Get-CsDeviceUpdateRule | Where-Object {$_.Brand -eq "LG-Nortel"}
```

Example 4 returns all the device update rules where the Brand property is equal to "LG-Nortel".
To do this, the Get-CsDeviceUpdateRule cmdlet is called in order to return a collection of all the device update rules in the organization.
That collection is then piped to the Where-Object cmdlet, which selects only those rules where the Brand is equal to "LG-Nortel".

### -------------------------- Example 5 --------------------------
```
Get-CsDeviceUpdateRule | Where-Object {$_.ApprovedVersion -eq $Null}
```

Example 5 returns a collection of all the device update rules that have not been approved.
This is done by using the Get-CsDeviceUpdateRules cmdlet to return a collection of all the rules and then piping that collection to the Where-Object cmdlet.
In turn, the Where-Object cmdlet selects only those rules where the Approved property is equal to a null value.
If the Approved property is null, it means that these rules are not approved.

### -------------------------- Example 6 --------------------------
```
Get-CsDeviceUpdateRule | Where-Object {$_.ApprovedVersion -ne $Null -and $_.Brand -eq "LG-Nortel"}
```

This command returns a collection of all the device update rules that meet two criteria: the rule has been approved and the rule relates to LG-Nortel devices.
To accomplish this task, the Get-CsDeviceUpdateRule cmdlet is first called to return a collection of all the device update rules in the organization.
That collection is then piped to the Where-Object cmdlet, which filters the collection on two criteria: the Approved property must not be null (that is, this property must have a value of some kind); and the Brand must be equal to "LG-Nortel".


## PARAMETERS

### -Identity
Unique identifier for the device update rule.
The Identity of a device update rule is composed of two parts: the service scope where the rule has been applied (for example, service:WebServer:atl-cs-001.litwareinc.com) and the globally unique identifier (GUID) that was pre-assigned to the rule (for example, d5ce3c10-2588-420a-82ac-dc2d9b1222ff9).
Based on this, the Identity for a given device update rule will look something like this: 

`"service:WebServer:atl-cs-001.litwareinc.com/d5ce3c10-2588-420a-82ac-dc2d9b1222ff9 "`

Wildcards are not allowed when specifying an Identity.
Use the Filter parameter if you want to use wildcards when specifying a rule.

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

### -Filter
Enables you to use wildcards when specifying the Identity of a device update rule or set of rules.
For example, to return all the device update rules for WebServer:atl-cs-001.litwareinc.com use this filter value: 

`"service:WebServer:atl-cs-001.litwareinc.com*"`

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the device update rule data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdate.Rule


## NOTES


## RELATED LINKS

[Approve-CsDeviceUpdateRule](Approve-CsDeviceUpdateRule.md)

[Remove-CsDeviceUpdateRule](Remove-CsDeviceUpdateRule.md)

[Reset-CsDeviceUpdateRule](Reset-CsDeviceUpdateRule.md)

[Restore-CsDeviceUpdateRule](Restore-CsDeviceUpdateRule.md)
