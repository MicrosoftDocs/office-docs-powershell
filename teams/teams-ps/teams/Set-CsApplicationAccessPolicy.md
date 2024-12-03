---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csapplicationaccesspolicy
applicable: Microsoft Teams
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

```powershell
Set-CsApplicationAccessPolicy [-AppIds <Object>] [-Description <String>] [[-Identity] <String>]
 [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet modifies an existing application access policy.

## EXAMPLES

### Add new app ID to the policy

```powershell
PS C:\> Set-CsApplicationAccessPolicy -Identity "ASimplePolicy" -AppIds @{Add="5817674c-81d9-4adb-bfb2-8f6a442e4622"}
```

The command shown above adds a new app ID "5817674c-81d9-4adb-bfb2-8f6a442e4622" to the per-user application access policy ASimplePolicy.

### Remove app IDs from the policy

```powershell
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

### -Confirm
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

### -Description
Free format text.

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

### -MsftInternalProcessingMode
For internal use only.

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/teams/new-csapplicationaccesspolicy)
[Grant-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/teams/new-csapplicationaccesspolicy)
[Get-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/teams/new-csapplicationaccesspolicy)
[Remove-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/teams/new-csapplicationaccesspolicy)
