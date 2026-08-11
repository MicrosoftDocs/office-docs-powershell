---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/get-cscallviaworkpolicy
schema: 2.0.0
title: Get-CsCallViaWorkPolicy
---

# Get-CsCallViaWorkPolicy

## SYNOPSIS
Use the Get-CsCallViaWorkPolicy cmdlet to return call via work policies.
Call via work policies enable and manage the characteristics of outbound calls placed through the Skype for Business client.


## SYNTAX

### Filter
```
Get-CsCallViaWorkPolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Identity
```
Get-CsCallViaWorkPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```


## DESCRIPTION
Use the Get-CsCallViaWorkPolicy cmdlet to return call via work policies.

## EXAMPLES

### Example 1
```
Get-CsCallViaWorkPolicy -Identity Site:Redmond
```

This example returns the properties of the policy currently assigned to the Redmond site.



## PARAMETERS

### -Filter

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Enables you to use wildcard characters when indicating the policy (or policies) to be returned.
For example, to return all the policies configured at the site scope use this syntax: -Filter "site:\*".
To return a collection of all the per-user policies, use this syntax: -Filter "tag:\*"

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

Specifies the identity of the policy to be returned.
Call via work policies can be returned at the global, site, or per-user scope.

Global syntax: -Identity Global

Site syntax: -Identity Site:Redmond

Per-user syntax: -Identity CallviaWorkStandard

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Retrieves the call via work policy data from the local replica of the Central Management store rather than from the Central Management store itself.

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

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.CallViaWork.CallViaWorkPolicy


## NOTES


## RELATED LINKS

[Remove-CsCallViaWorkPolicy](Remove-CsCallViaWorkPolicy.md)

[Set-CsCallViaWorkPolicy](Set-CsCallViaWorkPolicy.md)

[New-CsCallViaWorkPolicy](New-CsCallViaWorkPolicy.md)

[Grant-CsCallViaWorkPolicy](Grant-CsCallViaWorkPolicy.md)
