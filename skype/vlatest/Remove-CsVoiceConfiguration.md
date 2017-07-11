---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsVoiceConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Resets the voice configuration to its default values.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Resets the voice configuration to its default values.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsVoiceConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Voice test configurations are used to test a phone number against a specific voice policy, route, and dial plan.
This cmdlet removes the global (and only) voice configuration, which is a container for all voice test configurations defined for a Microsoft Lync Server 2010 deployment.
"Removing" the voice configuration doesn't actually remove it; the global instance is still there.
However, it does set the list of voice test configurations to the default, which is empty.

WARNING: Removing the voice configuration (which sets the list of voice test configurations to empty) deletes all defined voice test configurations for a Lync Server 2010 deployment.
After calling this cmdlet, a call to Get-CsVoiceTestConfiguration will return no results.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsVoiceConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsVoiceConfiguration"}

Below Content Applies To: Lync Server 2013

Voice test configurations are used to test a phone number against a specific voice policy, route, and dial plan.
This cmdlet removes the global (and only) voice configuration, which is a container for all voice test configurations defined for a Lync Server deployment.
"Removing" the voice configuration doesn't actually remove it; the global instance is still there.
However, it does set the list of voice test configurations to the default, which is empty.

WARNING: Removing the voice configuration (which sets the list of voice test configurations to empty) deletes all defined voice test configurations for a Lync Server deployment.
After calling this cmdlet, a call to Get-CsVoiceTestConfiguration will return no results.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsVoiceConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsVoiceConfiguration"}

Below Content Applies To: Skype for Business Server 2015

Voice test configurations are used to test a phone number against a specific voice policy, route, and dial plan.
This cmdlet removes the global (and only) voice configuration, which is a container for all voice test configurations defined for a Skype for Business Server 2015 deployment.
"Removing" the voice configuration doesn't actually remove it; the global instance is still there.
However, it does set the list of voice test configurations to the default, which is empty.

WARNING: Removing the voice configuration (which sets the list of voice test configurations to empty) deletes all defined voice test configurations for a Skype for Business Server 2015 deployment.
After calling this cmdlet, a call to the Get-CsVoiceTestConfiguration cmdlet will return no results.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsVoiceConfiguration -Identity Global -Confirm
```

This example resets the Global (and only) voice configuration to the default values.
This action deletes all defined voice test configurations, so we added the Confirm parameter in order to receive a prompt asking whether we really want to perform this action before the removal takes place.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example resets the Global (and only) voice configuration to the default values.
This action deletes all defined voice test configurations, so we added the Confirm parameter in order to receive a prompt asking whether we really want to perform this action before the removal takes place.

Remove-CsVoiceConfiguration -Identity Global -Confirm

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example resets the Global (and only) voice configuration to the default values.
This action deletes all defined voice test configurations, so we added the Confirm parameter in order to receive a prompt asking whether we really want to perform this action before the removal takes place.

Remove-CsVoiceConfiguration -Identity Global -Confirm

## PARAMETERS

### -Identity
The scope of the voice configuration to remove.
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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceConfiguration object.
Accepts pipelined input of a voice configuration object.

## OUTPUTS

###  
This cmdlet removes (resets) an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceConfiguration.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/9b173dde-fa8e-4966-aa58-deff34625560(OCS.14).aspx)

[Set-CsVoiceConfiguration]()

[Get-CsVoiceConfiguration]()

[Remove-CsVoiceTestConfiguration]()

[Get-CsVoiceTestConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/9b173dde-fa8e-4966-aa58-deff34625560(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/9b173dde-fa8e-4966-aa58-deff34625560(OCS.16).aspx)

