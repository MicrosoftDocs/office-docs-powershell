---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version:
applicable: Skype for Business Online
title: Get-CsOnlinePSTNGateway
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsOnlinePSTNGateway

## SYNOPSIS
Shows the configuration of the previously defined Session Border Controller(s) (SBC(s))  that describes the settings for the peer entity. This cmdlet was introduced with Microsoft Phone System Direct Routing.

## SYNTAX

### Identity (Default)
```
Get-CsOnlinePSTNGateway [-Tenant <System.Guid>] [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsOnlinePSTNGateway [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to show the configuration of the previously created Session Border Controller(s) (SBC(s)) configuration. Each configuration contains specific settings for an SBC. These settings configure such entities as SIP signaling port, whether media bypass is enabled on this SBC, will the SBC send SIP options, specify the limit of maximum concurrent sessions, The cmdlet also let drain the SBC by setting parameter -Enabled to true or false state. When the Enabled parameter set to $false, the SBC will continue existing calls, bit all new calls routed to another SBC in a route (if exists).

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsOnlinePSTNGateway
```

This example shows all SBCs paired with the tenant.

### Example 2
```powershell
PS C:\> Get-CsOnlinePSTNGateway | ?{$_.Identity -like "*.contoso.com"}
```

This example selects all SBC with names matching the pattern *.contoso.com. For example: sbc1.contoso.com, sbc2.contoso.com etc

## PARAMETERS

### -Filter

```yaml
Type: String
Parameter Sets: Filter
Aliases:
Applicable: Skype for Business Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The parameter is optional for the cmdlet. If not set all SBCs paired to the tenant are listed.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:
Applicable: Skype for Business Online
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsOnlinePSTNGateway](Set-CsOnlinePSTNGateway.md)

[New-CsOnlinePSTNGateway](New-CsOnlinePSTNGateway.md)

[Remove-CsOnlinePSTNGateway](Remove-CsOnlinePSTNGateway.md)
