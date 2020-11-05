---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-csapplicationaccesspolicy
applicable: Skype for Business Online
title: Set-CsApplicationAccessPolicy
schema: 2.0.0
manager: zhengni
author: frankpeng7
ms.author: frpeng
ms.reviewer:
---

# Set-CsApplicationAccessPolicy

## SYNOPSIS

Modifies an existing application access policy.

## SYNTAX

### Identity

```
Set-CsApplicationAccessPolicy [-Identity <XdsIdentity>] [-AppIds <PSListModifier>]
```

## DESCRIPTION

This cmdlet modifies an existing application access policy.

## EXAMPLES

### Add new app ID to the policy

```
PS C:\> Set-CsApplicationAccessPolicy -Identity "ASimplePolicy" -AppIds @{Add="5817674c-81d9-4adb-bfb2-8f6a442e4622"}
```

The command shown above adds a new app ID "5817674c-81d9-4adb-bfb2-8f6a442e4622" to the per-user application access policy ASimplePolicy.

### Remove app IDs from the policy

```
PS C:\> Set-CsApplicationAccessPolicy -Identity "ASimplePolicy" -AppIds @{Remove="5817674c-81d9-4adb-bfb2-8f6a442e4622"}
```

The command shown above removes the app ID "5817674c-81d9-4adb-bfb2-8f6a442e4622" from the per-user application access policy ASimplePolicy.

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

### -AppIds

A list of application (client) IDs. For details of application (client) ID, refer to: [Get tenant and app ID values for signing in](https://docs.microsoft.com/azure/active-directory/develop/howto-create-service-principal-portal#get-tenant-and-app-id-values-for-signing-in).

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
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
[Remove-CsApplicationAccessPolicy](Remove-CsApplicationAccessPolicy.md)
