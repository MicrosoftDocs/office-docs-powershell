---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
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

### -------------------------- Example 1 --------------------------
```
Remove-CSOnlinePSTNGateway -Identity sbc.contoso.com
```

This example removes SBC with Identity (and FQDN) sbc.contoso.com

### -------------------------- Example 2 --------------------------
```
Removes-CsOnlinePSTNGateway | ?{$_.Identity -like "*.contoso.com"}
```

This example removes the SBC with identities (and FQDNs) matching the pattern *.contoso.com. For example: sbc1.contoso.com, sbc2.contoso.com etc


## PARAMETERS

### -Identity
The parameter is mandatory for the cmdlet. The Identity is the same as the SBC FQDN.

```yaml
Required: True
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Set-CSOnlinePSTNGateway](Set-CSOnlinePSTNGateway.md)

[New-CSOnlinePSTNGateway](New-CSOnlinePSTNGateway.md)

[Get-CSOnlinePSTNGateway](Get-CSOnlinePSTNGateway.md)