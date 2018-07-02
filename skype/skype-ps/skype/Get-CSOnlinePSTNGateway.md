---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CSOnlinePSTNGateway
schema: 2.0.0
---

# Get-CSOnlinePSTNGateway

## SYNOPSIS
Shows the configuration of the previously defined Session Border Controller(s) (SBC(s))  that describes the settings for the peer entity. This cmdlet was introduced with Microsoft Phone System Direct Routing.

## SYNTAX

```
Get-CSOnlinePSTNGateway -Identity <SBCFQDN>
```

## DESCRIPTION
Use this cmdlet to show the configuration of the previously created Session Border Controller(s) (SBC(s)) configuration. Each configuration contains specific settings for an SBC. These settings configure such entities as SIP signaling port, whether media bypass is enabled on this SBC, will the SBC send SIP options, specify the limit of maximum concurrent sessions, The cmdlet also let drain the SBC by setting parameter -Enabled to true or false state. When the Enabled parameter set to $false, the SBC will continue existing calls, bit all new calls routed to another SBC in a route (if exists).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CSOnlinePSTNGateway
```

This example shows all SBCs paired with the tenant

### -------------------------- Example 2 --------------------------
```
Get-CsOnlinePSTNGateway | ?{$_.Identity -like "*.contoso.com"}
```

This example selects all SBC with names matching the pattern *.contoso.com. For example: sbc1.contoso.com, sbc2.contoso.com etc


## PARAMETERS

### -Identity
The parameter is optional for the cmdlet. If not set all SBC paired to the tenant are listed.

```yaml
Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Set-CSOnlinePSTNGateway](Set-CSOnlinePSTNGateway.md)
[New-CSOnlinePSTNGateway](New-CSOnlinePSTNGateway.md)
[Remove-CSOnlinePSTNGateway](Remove-CSOnlinePSTNGateway.md)