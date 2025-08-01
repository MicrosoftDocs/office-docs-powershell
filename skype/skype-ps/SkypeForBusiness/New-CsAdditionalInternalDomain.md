---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/new-csadditionalinternaldomain
schema: 2.0.0
title: New-CsAdditionalInternalDomain
---

# New-CsAdditionalInternalDomain

## SYNOPSIS
Creates a new additional internal domain for use in your organization. This cmdlet was introduced in Skype for Business Server 2015 Cumulative Update 6 - December 2017.

## SYNTAX

### Identity (Default)
```
New-CsAdditionalInternalDomain [-Identity] <XdsGlobalRelativeIdentity> [-InMemory] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsAdditionalInternalDomain -Domain <String> [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new additional internal domain for use in your organization.

Additional internal domains are not used locally by internal user or services URIs but must be treated
as internal by hybrid (split-domain) traffic analysis to support purely hosted and cloud appliance
domains.

## EXAMPLES

### Example 1
```
PS C:\> New-CsAdditionalInternalDomain -Identity fabrikam.com
```

The cmdlet shown in Example 1 creates a new additional internal domain, one that has the Identity fabrikam.com.

## PARAMETERS

### -Domain

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Fully qualified domain name (FQDN) for the new additional internal domain.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -Identity

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Fully qualified domain name (FQDN) for the new additional internal domain.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

This parameter is reserved for internal Microsoft use.

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

### -Confirm

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Shows what would happen if the cmdlet runs. The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
[Remove-CsAdditionalInternalDomain](https://learn.microsoft.com/powershell/module/skype/remove-csadditionalinternaldomain?view=skype-ps)

[Get-CsAdditionalInternalDomain](https://learn.microsoft.com/powershell/module/skype/get-csadditionalinternaldomain?view=skype-ps)
