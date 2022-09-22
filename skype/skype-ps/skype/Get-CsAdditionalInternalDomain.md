---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/get-csadditionalinternaldomain
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsAdditionalInternalDomain
schema: 2.0.0
manager: rogupta
author: hirenshah1
ms.author: hirshah
ms.reviewer:
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
Enables you to limit the returned data.

```yaml
Type: String
Parameter Sets: Filter
Aliases:
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the additional SIP domain to be returned.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves from the local replica of the Central Management store, rather than the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
