---
applicable: Microsoft Teams
author: frankpeng7
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: zhengni
Module Name: MicrosoftTeams
ms.author: frpeng
online version: https://learn.microsoft.com/powershell/module/teams/new-csapplicationaccesspolicy
schema: 2.0.0
title: New-CsApplicationAccessPolicy
---

# New-CsApplicationAccessPolicy

## SYNOPSIS

Creates a new application access policy. Application access policy contains a list of application (client) IDs. When granted to a user, those applications will be authorized to access online meetings on behalf of that user.

## SYNTAX

### Identity

```
New-CsApplicationAccessPolicy [-Identity <XdsIdentity>] [-AppIds <PSListModifier>] [-Description <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet creates a new application access policy. Application access policy contains a list of application (client) IDs. When granted to a user, those applications will be authorized to access online meetings on behalf of that user.

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

### -AppIds

A list of application (client) IDs. For details of application (client) ID, refer to: [Get tenant and app ID values for signing in](https://learn.microsoft.com/azure/active-directory/develop/howto-create-service-principal-portal#get-tenant-and-app-id-values-for-signing-in).

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

Specifies the description of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Grant-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csapplicationaccesspolicy)
[Get-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csapplicationaccesspolicy)
[Set-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csapplicationaccesspolicy)
[Remove-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csapplicationaccesspolicy)
