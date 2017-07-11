---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsEnhancedEmergencyServiceDisclaimer

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes the disclaimer text that is used globally to prompt for location information for an Enhanced 9-1-1 (E9-1-1) implementation.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes the disclaimer text that is used globally to prompt for location information for an Enhanced 9-1-1 (E9-1-1) implementation.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsEnhancedEmergencyServiceDisclaimer [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

In order for an Enterprise Voice implementation to provide E9-1-1 service, locations must be mapped to ports, subnets, switches, and wireless access points to identify the caller's location.
When the caller is connecting from outside one of these mapped points, he must enter his location manually for it to be received by emergency services.
This cmdlet removes the text string that will be displayed to users who choose not to enter their location information.
This message will be displayed only if the LocationRequired property of the user's location policy is set to Disclaimer.
(You can retrieve location policy settings by calling Get-CsLocationPolicy.) After calling this cmdlet, a blank message will be displayed to users in this case.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsEnhancedEmergencyServiceDisclaimer cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsEnhancedEmergencyServiceDisclaimer"}

**Below Content Applies To:** Skype for Business Server 2015

In order for an Enterprise Voice implementation to provide E9-1-1 service, locations must be mapped to ports, subnets, switches, and wireless access points to identify the caller's location.
When the caller is connecting from outside one of these mapped points, he must enter his location manually for it to be received by emergency services.
This cmdlet removes the text string that will be displayed to users who choose not to enter their location information.
This message will be displayed only if the LocationRequired property of the user's location policy is set to Disclaimer.
(You can retrieve location policy settings by calling the Get-CsLocationPolicy cmdlet.) After calling this cmdlet, a blank message will be displayed to users in this case.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsEnhancedEmergencyServiceDisclaimer -Identity global
```

This command removes the text of the enhanced emergency service disclaimer.
Note that this does not remove the global disclaimer; it still exists.
It simply sets the Body property to an empty string.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This command removes the text of the enhanced emergency service disclaimer.
Note that this does not remove the global disclaimer; it still exists.
It simply sets the Body property to an empty string.

Remove-CsEnhancedEmergencyServiceDisclaimer -Identity global

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This command removes the text of the enhanced emergency service disclaimer.
Note that this does not remove the global disclaimer; it still exists.
It simply sets the Body property to an empty string.

Remove-CsEnhancedEmergencyServiceDisclaimer -Identity global

## PARAMETERS

### -Identity
This value is required and must be set to Global.

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
Microsoft.Rtc.Management.WritableConfig.Policy.Location.EnhancedEmergencyServiceDisclaimer object.
Accepts pipelined input of an enhanced emergency service disclaimer object.

## OUTPUTS

###  
This cmdlet does not return a value or an object.
It modifies an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Location.EnhancedEmergencyServiceDisclaimer.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/30a5aa8c-04b8-4c1f-92b3-88c86bf69a52(OCS.14).aspx)

[Set-CsEnhancedEmergencyServiceDisclaimer]()

[Get-CsEnhancedEmergencyServiceDisclaimer]()

[Get-CsLocationPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/30a5aa8c-04b8-4c1f-92b3-88c86bf69a52(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/30a5aa8c-04b8-4c1f-92b3-88c86bf69a52(OCS.16).aspx)

