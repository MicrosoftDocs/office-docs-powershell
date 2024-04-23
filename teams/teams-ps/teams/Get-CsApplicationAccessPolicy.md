---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csapplicationaccesspolicy
applicable: Microsoft Teams
title: Get-CsApplicationAccessPolicy
schema: 2.0.0
manager: zhengni
author: frankpeng7
ms.author: frpeng
ms.reviewer:
---

# Get-CsApplicationAccessPolicy

## SYNOPSIS

Retrieves information about the application access policy configured for use in the tenant.

## SYNTAX

### Identity

```
Get-CsApplicationAccessPolicy [-Identity <XdsIdentity>] 
```

## DESCRIPTION

This cmdlet retrieves information about the application access policy configured for use in the tenant.

## EXAMPLES

### Retrieve all application access policies

```
PS C:\> Get-CsApplicationAccessPolicy
```

The command shown above returns information of all application access policies that have been configured for use in the tenant.

### Retrieve specific application access policy

```
PS C:\> Get-CsApplicationAccessPolicy -Identity "ASimplePolicy"
```

In the command shown above, information is returned for a single application access policy: the policy with the Identity ASimplePolicy.


## PARAMETERS

### -Identity

Unique identifier assigned to the policy when it was created.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsApplicationAccessPolicy](New-CsApplicationAccessPolicy.md)
[Grant-CsApplicationAccessPolicy](Grant-CsApplicationAccessPolicy.md)
[Set-CsApplicationAccessPolicy](Set-CsApplicationAccessPolicy.md)
[Remove-CsApplicationAccessPolicy](Remove-CsApplicationAccessPolicy.md)
