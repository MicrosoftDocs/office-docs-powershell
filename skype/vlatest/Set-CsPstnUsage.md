---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsPstnUsage

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Modifies a set of strings that identify the allowed public switched telephone network (PSTN) usages.
This cmdlet can be used to add usages to the list of PSTN usages or remove usages from the list.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Modifies a set of strings that identify the allowed public switched telephone network (PSTN) usages.
This cmdlet can be used to add usages to the list of PSTN usages or remove usages from the list.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsPstnUsage [[-Identity] <XdsIdentity>] [-Usage <PSListModifier>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Set-CsPstnUsage [-Instance <PSObject>] [-Usage <PSListModifier>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

PSTN usages are string values that are used for call authorization.
A PSTN usage links a voice policy to a route.
The Set-CsPstnUsage  cmdlet is used to add or remove phone usages to or from the usage list.
This list is global so it can be used by policies and routes throughout the Microsoft Lync Server 2010 deployment.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsPstnUsage cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsPstnUsage"}

Below Content Applies To: Lync Server 2013

PSTN usages are string values that are used for call authorization.
A PSTN usage links a voice policy to a route.
The Set-CsPstnUsage cmdlet is used to add or remove phone usages to or from the usage list.
This list is global so it can be used by policies and routes throughout the Lync Server deployment.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsPstnUsage cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsPstnUsage"}

Below Content Applies To: Skype for Business Server 2015

PSTN usages are string values that are used for call authorization.
A PSTN usage links a voice policy to a route.
The Set-CsPstnUsage cmdlet is used to add or remove phone usages to or from the usage list.
This list is global so it can be used by policies and routes throughout the Skype for Business Server 2015 deployment.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsPstnUsage -Identity global -Usage @{add="International"}
```

This command adds the string "International" to the current list of available PSTN usages.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This command adds the string "International" to the current list of available PSTN usages.

Set-CsPstnUsage -Identity global -Usage @{add="International"}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This command adds the string "International" to the current list of available PSTN usages.

Set-CsPstnUsage -Identity global -Usage @{add="International"}

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Set-CsPstnUsage -Identity global -Usage @{remove="Local"}
```

This command removes the string "Local" from the list of available PSTN usages.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This command removes the string "Local" from the list of available PSTN usages.

Set-CsPstnUsage -Identity global -Usage @{remove="Local"}

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This command removes the string "Local" from the list of available PSTN usages.

Set-CsPstnUsage -Identity global -Usage @{remove="Local"}

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Set-CsPstnUsage -Usage @{remove="Local"}
```

The command in this example performs the exact same action as in Example 2: it removes the "Local" PSTN usage.
This example shows the command without the Identity parameter specified.
The only Identity available to the Set-CsPstnUsage cmdlet is the Global identity; omitting the Identity parameter defaults to Global.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command in this example performs the exact same action as the command in Example 2: it removes the "Local" PSTN usage.
This example shows the command without the Identity parameter specified.
The only Identity available to the Set-CsPstnUsage cmdlet is the Global identity; omitting the Identity parameter defaults to Global.

Set-CsPstnUsage -Usage @{remove="Local"}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command in this example performs the exact same action as the command in Example 2: it removes the "Local" PSTN usage.
This example shows the command without the Identity parameter specified.
The only Identity available to the Set-CsPstnUsage cmdlet is the Global identity; omitting the Identity parameter defaults to Global.

Set-CsPstnUsage -Usage @{remove="Local"}

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Set-CsPstnUsage -Usage @{replace="International","Restricted"}
```

This command replaces everything in the usage list with the values International and Restricted.
All previously existing usages are removed.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

This command replaces everything in the usage list with the values International and Restricted.
All previously existing usages are removed.

Set-CsPstnUsage -Usage @{replace="International","Restricted"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

This command replaces everything in the usage list with the values International and Restricted.
All previously existing usages are removed.

Set-CsPstnUsage -Usage @{replace="International","Restricted"}

## PARAMETERS

### -Identity
The scope at which these settings are applied.
The Identity for this cmdlet is always Global.

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
Below Content Applies To: Lync Server 2010, Lync Server 2013

A reference to a PSTN usage object.
This object must be of type PstnUsages and can be retrieved by calling Get-CsPstnUsage.



Below Content Applies To: Skype for Business Server 2015

A reference to a PSTN usage object.
This object must be of type PstnUsages and can be retrieved by calling the Get-CsPstnUsage cmdlet.



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

### -Usage
Contains a list of allowable usage strings.
These entries can be any string value.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.PstnUsages object.
Accepts pipelined input of PSTN usage objects.

## OUTPUTS

###  
This cmdlet does not return a value or object.
Instead, it configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.PstnUsages object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/ecba9ed6-4845-4035-933e-0c540d530b72(OCS.14).aspx)

[Get-CsPstnUsage]()

[Online Version](http://technet.microsoft.com/EN-US/library/ecba9ed6-4845-4035-933e-0c540d530b72(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/ecba9ed6-4845-4035-933e-0c540d530b72(OCS.16).aspx)

