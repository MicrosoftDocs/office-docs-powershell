---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version:
applicable: Microsoft Teams
title: Remove-CSOnlinePSTNGateway
schema: 2.0.0
---

# Remove-CSOnlinePSTNGateway

## SYNOPSIS
Removes the configuration of the previously defined Session Border Controller(s) (SBC(s))  that describes the settings for the peer entity. This cmdlet was introduced with Microsoft Phone System Direct Routing.

## SYNTAX
```
Remove-CSOnlinePSTNGateway -Identity <SBCFQDN> 
```

## DESCRIPTION
Use this cmdlet to remove the configuration of the previously created Session Border Controller(s) (SBC(s)) configuration. Note the SBC must be removed from all voice routes before executing this cmdlet

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CSOnlinePSTNGateway -Identity sbc.contoso.com
```

This example removes SBC with Identity (and FQDN) sbc.contoso.com

### Example 2
```powershell
PS C:\> Removes-CsOnlinePSTNGateway | ?{$_.Identity -like "*.contoso.com"}
```

This example removes the SBC with identities (and FQDNs) matching the pattern *.contoso.com. For example: sbc1.contoso.com, sbc2.contoso.com etc

## PARAMETERS

### -Identity
The parameter is mandatory for the cmdlet. The Identity is the same as the SBC FQDN.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:
Applicable: Microsoft Teams
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsGlobalRelativeIdentity


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CSOnlinePSTNGateway](Set-CSOnlinePSTNGateway.md)

[New-CSOnlinePSTNGateway](New-CSOnlinePSTNGateway.md)

[Get-CSOnlinePSTNGateway](Get-CSOnlinePSTNGateway.md)