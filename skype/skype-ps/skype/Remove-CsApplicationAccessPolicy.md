---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/remove-csapplicationaccesspolicy
applicable: Skype for Business Online
title: Remove-CsApplicationAccessPolicy
schema: 2.0.0
manager: zhengni
author: frankpeng7
ms.author: frpeng
ms.reviewer:
---

# Remove-CsApplicationAccessPolicy

## SYNOPSIS

Deletes an existing application access policy.

## SYNTAX

### Identity

```
Remove-CsApplicationAccessPolicy [-Identity <XdsIdentity>]
```

## DESCRIPTION

This cmdlet deletes an existing application access policy.

## EXAMPLES

### Remove an application access policy

```
PS C:\> Remove-CsApplicationAccessPolicy -Identity "ASimplePolicy"
```

The command shown above deletes the application access policy ASimplePolicy.

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
[Get-CsApplicationAccessPolicy](Get-CsApplicationAccessPolicy.md)
[Set-CsApplicationAccessPolicy](Set-CsApplicationAccessPolicy.md)
