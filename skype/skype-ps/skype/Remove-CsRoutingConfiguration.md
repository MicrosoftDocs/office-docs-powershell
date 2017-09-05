---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsRoutingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Resets the routing configuration to its default settings.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Resets the routing configuration to its default settings.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsRoutingConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Voice routes contain instructions that tell Microsoft Lync Server 2010 how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet removes the global (and only) routing configuration, which is a container for all voice routes defined for a Lync Server 2010 deployment.
"Removing" the routing configuration doesn't actually remove it; the Global (and only) instance is still there.
However, it does set the list of voice routes to the default settings.

WARNING: Removing the routing configuration (in other words, setting the list of voice routes to the default) deletes all defined voice routes for a Lync Server 2010 deployment and replaces them with a single route with default settings.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsRoutingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsRoutingConfiguration"}

**Below Content Applies To:** Lync Server 2013

Voice routes contain instructions that tell Lync Server how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet removes the global (and only) routing configuration, which is a container for all voice routes defined for a Lync Server deployment.
"Removing" the routing configuration doesn't actually remove it; the Global (and only) instance is still there.
However, it does set the list of voice routes to the default settings.

WARNING: Removing the routing configuration (in other words, setting the list of voice routes to the default) deletes all defined voice routes for a Lync Server deployment and replaces them with a single route with default settings.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsRoutingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsRoutingConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Voice routes contain instructions that tell Skype for Business Server 2015 how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet removes the global (and only) routing configuration, which is a container for all voice routes defined for a Skype for Business Server 2015 deployment.
"Removing" the routing configuration doesn't actually remove it; the Global (and only) instance is still there.
However, it does set the list of voice routes to the default settings.

WARNING: Removing the routing configuration (in other words, setting the list of voice routes to the default) deletes all defined voice routes for a Skype for Business Server 2015 deployment and replaces them with a single route with default settings.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsRoutingConfiguration -Identity Global -Confirm
```

This example resets the Global (and only) routing configuration to the default settings.
This action deletes all defined voice routes, so we added the Confirm parameter in order to receive a prompt asking whether we really want to perform this action before the removal takes place.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example resets the Global (and only) routing configuration to the default settings.
This action deletes all defined voice routes, so we added the Confirm parameter in order to receive a prompt asking whether we really want to perform this action before the removal takes place.

Remove-CsRoutingConfiguration -Identity Global -Confirm

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example resets the Global (and only) routing configuration to the default settings.
This action deletes all defined voice routes, so we added the Confirm parameter in order to receive a prompt asking whether we really want to perform this action before the removal takes place.

Remove-CsRoutingConfiguration -Identity Global -Confirm

## PARAMETERS

### -Identity
The scope of the routing configuration to remove.
This value must be Global.

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
Microsoft.Rtc.Management.Policy.Voice.PSTNRoutingSettings object.
Accepts pipelined input of a routing configuration object.

## OUTPUTS

###  
This cmdlet removes (resets) an object of type Microsoft.Rtc.Management.Policy.Voice.PSTNRoutingSettings.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/80239fed-89ef-4ccc-be9b-d9149182d0c3(OCS.14).aspx)

[New-CsRoutingConfiguration]()

[Set-CsRoutingConfiguration]()

[Get-CsRoutingConfiguration]()

[Remove-CsVoiceRoute]()

[Get-CsVoiceRoute]()

[Online Version](http://technet.microsoft.com/EN-US/library/80239fed-89ef-4ccc-be9b-d9149182d0c3(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/80239fed-89ef-4ccc-be9b-d9149182d0c3(OCS.16).aspx)

