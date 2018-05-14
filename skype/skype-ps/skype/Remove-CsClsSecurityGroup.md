---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsClsSecurityGroup
schema: 2.0.0
---

# Remove-CsClsSecurityGroup

## SYNOPSIS
Removes a centralized logging configuration security group.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Remove-CsClsSecurityGroup [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server.
Centralized logging enables administrators to stop, start and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the `Search-CsClsLogging` cmdlet.

With Skype for Business Online, security groups are used to determine which users have access to the personally-identifiable information that is written to the log files.
Security groups are created by using the `New-CsClsSecurityGroup` cmdlet and then are added to a collection of centralized logging configuration settings.
These groups can later be removed by using the `Remove-CsClsSecurityGroup` cmdlet.

Skype for Business Server Control Panel: The functions carried out by the `Remove-CsClsSecurityGroup` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsClsSecurityGroup -Identity "global/HelpDesk"
```

The command shown in Example 1 deletes the centralized logging security group with the Identity Global/HelpDesk.


### -------------------------- Example 2 --------------------------
```
Get-CsClsSecurityGroup | Remove-CsClsSecurityGroup
```

In Example 2, all the centralized logging security groups currently in use in the organization are deleted.
To do this, the command first calls the `Get-CsClsSecurityGroup` cmdlet without any parameters; this returns a collection of all the centralized logging security groups.
That collection is then piped to the `Remove-CsClsSecurityGroup` cmdlet, which deletes each group in the collection.


### -------------------------- Example 3 --------------------------
```
Get-CsClsSecurityGroup | Where-Object {$_.AccessLevel -eq "Tier3"} | Remove-CsClsSecurityGroup
```

Example 3 shows how you can delete all the centralized logging security groups that have the access level RedmondSupport.
To carry out this task, the command first uses the `Get-CsClsSecurityGroup` cmdlet to return a collection of all the available centralized logging security groups.
That collection is then piped to the `Where-Object` cmdlet, which selects only those groups where the AccessLevel property is set to Tier3.
In turn, those groups are piped to and removed by, the `Remove-CsClsSecurityGroup` cmdlet.


## PARAMETERS

### -Identity
Unique identifier for the centralized logging security group to be removed.
A security group identity consists of the scope where the group was created followed by the group name.
For example, to remove a group named HelpDesk created at the global scope, use the following syntax:

`-Identity "global/HelpDesk"`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
The `Remove-CsClsSecurityGroup` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.SecurityGroup#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsClsSecurityGroup` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.SecurityGroup#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsClsSecurityGroup](Get-CsClsSecurityGroup.md)

[New-CsClsSecurityGroup](New-CsClsSecurityGroup.md)

[Set-CsClsSecurityGroup](Set-CsClsSecurityGroup.md)
