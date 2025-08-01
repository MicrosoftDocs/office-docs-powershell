---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/get-csadditionalinternaldomain
schema: 2.0.0
title: Get-CsAdditionalInternalDomain
---

# Get-CsAdditionalInternalDomain

## SYNOPSIS
Returns existing additional SIP domain names present in the topology.

## SYNTAX

### Identity (Default)
```
Get-CsAdditionalInternalDomain [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsAdditionalInternalDomain [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Returns existing additional SIP domain names present in the topology.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsAdditionalInternalDomain -LocalStore
```

Gets additional SIP domain names from LocalStore

## PARAMETERS

### -Filter

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Enables you to limit the returned data.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Unique identifier for the additional SIP domain to be returned.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Retrieves from the local replica of the Central Management store, rather than the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
