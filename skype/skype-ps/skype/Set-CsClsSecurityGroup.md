---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsClsSecurityGroup
schema: 2.0.0
---

# Set-CsClsSecurityGroup

## SYNOPSIS
Modifies a centralized logging configuration security group.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsClsSecurityGroup [[-Identity] <XdsIdentity>] [-AccessLevel <String>] [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

### Instance
```
Set-CsClsSecurityGroup [-AccessLevel <String>] [-Confirm] [-Force] [-Instance <PSObject>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server.
Centralized logging enables administrators to stop, start and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the `Search-CsClsLogging` cmdlet.

With Skype for Business Online, security groups are used to determine which users have access to the personally-identifiable information that is written to the log files.
Security groups are created by using the `New-CsClsSecurityGroup` cmdlet and then are added to a collection of centralized logging configuration settings.
After these groups have been created, you can modify their property values by using the `Set-CsClsSecurityGroup` cmdlet.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsClsSecurityGroup` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsClsSecurityGroup -Identity "global/HelpDesk" -AccessLevel "Tier3"
```

The command shown in Example 1 modifies the centralized logging security group that has the Identity global/HelpDesk.
In this example, the AccessLevel property is set to Tier3.


### -------------------------- Example 2 --------------------------
```
Get-CsClsSecurityGroup -Filter "global/*" | Set-CsClsSecurityGroup-AccessLevel "Tier3"
```

In Example 2, the access level is modified for all the centralized logging security groups configured at the global scope.
To do this, the command first calls the `Get-CsClsSecurityGroup` cmdlet along with the Filter parameter; the filter value "global/*" limits the returned data to security groups configured at the global scope.
Those groups are then piped to the `Set-CsClsSecurityGroup` cmdlet, which sets the AccessLevel property of each group to Tier3.


### -------------------------- Example 3 --------------------------
```
Get-CsClsSecurityGroup | Where-Object {$_.AccessLevel -eq "GlobalAccess"} | Set-CsClsSecurityGroup -AccessLevel "Tier3"
```

Example 3 shows how you can use a single command to change the access level for all the centralized logging security groups who share an existing access level.
To carry out this task, the command first calls the `Get-CsClsSecurityGroup` cmdlet without any parameters in order to return a collection of all the centralized logging security groups.
That collection is then piped to the `Where-Object` cmdlet, which selects only those groups where the AccessLevel is equal to (-eq) GlobalAccess.
In turn, those groups are piped to the `Set-CsClsSecurityGroup` cmdlet, which takes each group and changes the AccessLevel to Tier3.


## PARAMETERS

### -AccessLevel
String value specifying the access level assigned to the group.
Access levels are assigned by administrators and used to categorize security groups.
For example:

`-AccessLevel "Tier3"`

Multiple groups can share the same access level.
Currently the only values that have meaning are "Tier3", "Tier2", "Product", "Ops", and "Pii".


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the centralized logging security group to be modified.
A security group identity consists of the scope where the group was created followed by the group name.
For example, to modify a group named HelpDesk created at the global scope, use the following syntax:

`-Identity "global/HelpDesk"`

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Set-CsClsSecurityGroup` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.SecurityGroup#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Set-CsClsSecurityGroup` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.SecurityGroup#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsClsSecurityGroup](Get-CsClsSecurityGroup.md)

[New-CsClsSecurityGroup](New-CsClsSecurityGroup.md)

[Remove-CsClsSecurityGroup](Remove-CsClsSecurityGroup.md)

