---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-csapplicationaccesspolicy
applicable: Skype for Business Online
title: New-CsApplicationAccessPolicy
schema: 2.0.0
manager: zhengni
author: frankpeng7
ms.author: frpeng
ms.reviewer:
---

# New-CsApplicationAccessPolicy

## SYNOPSIS

Creates a new application access policy. Application access policy contains a list of application(client) IDs. When granted to a user, those applications will be authorized to access online meetings on behalf of that user.

## SYNTAX

### Identity

```
New-CsApplicationAccessPolicy [-Identity <XdsIdentity>] [-AppIds <PSListModifier>] [-Description <String>]
```

## DESCRIPTION

<TODO: description>

## EXAMPLES

### Create a new application access policy with one app ID

```
PS C:\> New-CsApplicationAccessPolicy -Identity "ASimplePolicy" -AppIds "d39597bf-8407-40ca-92ef-1ec26b885b7b" -Description "Some description"
```

The command shown above shows how to create a new policy with one app IDs configured.

### Create a new application access policy with multiple app IDs

```
PS C:\> New-CsApplicationAccessPolicy -Identity "ASimplePolicy" -AppIds "d39597bf-8407-40ca-92ef-1ec26b885b71", "57caaef9-5ed0-48d5-8862-e5abfa71b3e1", "dc17674c-81d9-4adb-bfb2-8f6a442e4620" -Description "Some description"
```

The command shown above shows how to create a new policy with a list of (three) app IDs configured.


## PARAMETERS

### -Identity

Unique identifier assigned to the policy when it was created.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppIds

<TODO: description for parameter?> A list of application (client) IDs. For details of application (client) ID, refer to: [Get tenant and app ID values for signing in](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#get-tenant-and-app-id-values-for-signing-in).

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

### -Description

<TODO: description for parameter> Specifies the description of the policy.

```yaml
Type: string
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

[Grant-CsApplicationAccessPolicy](Grant-CsApplicationAccessPolicy.md)
[Get-CsApplicationAccessPolicy](Get-CsApplicationAccessPolicy.md)
[Set-CsApplicationAccessPolicy](Set-CsApplicationAccessPolicy.md)
[Remove-CsApplicationAccessPolicy](Remove-CsApplicationAccessPolicy.md)

