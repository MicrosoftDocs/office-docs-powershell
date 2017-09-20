---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: New-CsClsSecurityGroup
schema: 2.0.0
---

# New-CsClsSecurityGroup

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Creates a new centralized logging configuration security group.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Creates a new centralized logging configuration security group.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
New-CsClsSecurityGroup [-Identity] <XdsIdentity> -AccessLevel <String> [-Confirm] [-Force] [-InMemory]
 [-WhatIf] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsClsSecurityGroup -AccessLevel <String> -Name <String> -Parent <String> [-Confirm] [-Force] [-InMemory]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Microsoft Lync Server 2013 Preview.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using Windows PowerShell and the Search-CsClsLogging cmdlet.

With the Office 365 version of Lync Server, security groups are used to determine which users have access to the personally-identifiable information that is written to the log files.
Security groups are created by using the New-CsClsSecurityGroup cmdlet and then are added to a collection of centralized logging configuration settings.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsClsSecurityGroup"}

Lync Server Control Panel: The functions carried out by the New-CsClsSecurityGroup cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server 2015.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

With Skype for Business Online, security groups are used to determine which users have access to the personally-identifiable information that is written to the log files.
Security groups are created by using the New-CsClsSecurityGroup cmdlet and then are added to a collection of centralized logging configuration settings.

Skype for Business Server Control Panel: The functions carried out by the New-CsClsSecurityGroup cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new centralized logging security group with the Identity global/HelpDesk.
In this example, the AccessLevel property is set to Tier3.

New-CsClsSecurityGroup -Identity "global/HelpDesk" -AccessLevel "Tier3"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new centralized logging security group with the Identity global/HelpDesk.
In this example, the AccessLevel property is set to Tier3.

New-CsClsSecurityGroup -Identity "global/HelpDesk" -AccessLevel "Tier3"

## PARAMETERS

### -AccessLevel
String value specifying the access level assigned to the group.
Access levels are arbitrary string values assigned by administrators and used to categorize security groups.
For example:

-AccessLevel "Tier3"

Multiple groups can share the same access level.
Currently the only values that have meaning are "Tier3", "Tier2", "Product", "Ops", and "Pii".

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the new security group.
Security group Identities consist of the centralized logging configuration scope where the group will be created plus a unique security group name.
For example, to create a global security group named HelpDesk use this syntax:

-Identity "global/HelpDesk"

If you use the Identity parameter then you cannot use either the name parameter or the Parent parameter in that same command.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Unique name for the new security group.
For example:

-Name "HelpDesk"

If you use the Name parameter you must also use the Parent parameter.
However, you should not use the Identity parameter in the same command as the Name and Parent parameters.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent
Scope of the centralized logging configuration settings where the new security group will be located.
For example, to add the new security group to the global settings, use this syntax:

-Parent "global"

You can return identities for all your centralizing logging "parents" by using this command:

Get-CsCentralizedLoggingConfiguration | Select-Object Identity

If you use the Name parameter you must also use the Parent parameter.
However, you should not use the Identity parameter in the same command as the Name and Parent parameters.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
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

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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
None.
New-CsClsSecurityGroup does not accept pipelined input.

###  
None.
The New-CsClsSecurityGroup cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsClsSecurityGroup creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.SecurityGroup#Decorated object.

###  
The New-CsClsSecurityGroup cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.SecurityGroup#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsClsSecurityGroup]()

[Remove-CsClsSecurityGroup]()

[Set-CsClsSecurityGroup]()

[Online Version](http://technet.microsoft.com/EN-US/library/e42f2d5f-7720-4b69-8563-48172120d8d9(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/e42f2d5f-7720-4b69-8563-48172120d8d9(OCS.16).aspx)

