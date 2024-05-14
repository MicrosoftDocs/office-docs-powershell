---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/remove-csadditionalinternaldomain
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsAdditionalInternalDomain
schema: 2.0.0
manager: rogupta
author: hirenshah1
ms.author: hirshah
ms.reviewer:
---

# Remove-CsAdditionalInternalDomain

## SYNOPSIS
Removes an additional internal domain previously configured for use in your organization. This cmdlet was introduced in Skype for Business Server 2015 Cumulative Update 6 - December 2017.

## SYNTAX

```
Remove-CsAdditionalInternalDomain [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes an additional internal domain previously configured for use in your organization.

Additional internal domains are not used locally by internal user or services URIs but must be treated
as internal by hybrid (split-domain) traffic analysis to support purely hosted and cloud appliance
domains.

## EXAMPLES

### -------------------------- Example 1 ------------------------
```powershell
Remove-CsAdditionalInternalDomain -Identity fabrikam.com
```

Example 1 removes the additional internal domain with the Identity fabrikam.com.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Fully qualified domain name (FQDN) for the new additional internal domain.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results. By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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

### Microsoft.Rtc.Management.Xds.XdsGlobalRelativeIdentity


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsAdditionalInternalDomain](https://learn.microsoft.com/powershell/module/skype/new-csadditionalinternaldomain?view=skype-ps)

[Get-CsAdditionalInternalDomain](https://learn.microsoft.com/powershell/module/skype/get-csadditionalinternaldomain?view=skype-ps)
