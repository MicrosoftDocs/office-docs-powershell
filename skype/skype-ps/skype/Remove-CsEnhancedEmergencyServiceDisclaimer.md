---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Remove-CsEnhancedEmergencyServiceDisclaimer
schema: 2.0.0
---

# Remove-CsEnhancedEmergencyServiceDisclaimer

## SYNOPSIS
Removes the disclaimer text that is used globally to prompt for location information for an Enhanced 9-1-1 (E9-1-1) implementation.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsEnhancedEmergencyServiceDisclaimer [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
In order for an Enterprise Voice implementation to provide E9-1-1 service, locations must be mapped to ports, subnets, switches and wireless access points to identify the caller's location.
When the caller is connecting from outside one of these mapped points, he must enter his location manually for it to be received by emergency services.
This cmdlet removes the text string that will be displayed to users who choose not to enter their location information.
This message will be displayed only if the LocationRequired property of the user's location policy is set to Disclaimer.
(You can retrieve location policy settings by calling the `Get-CsLocationPolicy` cmdlet.) After calling this cmdlet, a blank message will be displayed to users in this case.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsEnhancedEmergencyServiceDisclaimer -Identity global
```

This command removes the text of the enhanced emergency service disclaimer.
Note that this does not remove the global disclaimer; it still exists.
It simply sets the Body property to an empty string.


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

[Set-CsEnhancedEmergencyServiceDisclaimer]()

[Get-CsEnhancedEmergencyServiceDisclaimer]()

[Get-CsLocationPolicy]()
