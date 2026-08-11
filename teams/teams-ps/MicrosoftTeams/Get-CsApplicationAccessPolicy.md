---
applicable: Microsoft Teams
author: frankpeng7
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: zhengni
Module Name: MicrosoftTeams
ms.author: frpeng
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csapplicationaccesspolicy
schema: 2.0.0
title: Get-CsApplicationAccessPolicy
---

# Get-CsApplicationAccessPolicy

## SYNOPSIS

Retrieves information about the application access policy configured for use in the tenant.

## SYNTAX

### Identity (Default)

```powershell
Get-CsApplicationAccessPolicy [[-Identity] <String>] [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

### Filter

```powershell
Get-CsApplicationAccessPolicy [-MsftInternalProcessingMode <String>] [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet retrieves information about the application access policy configured for use in the tenant.

## EXAMPLES

### Retrieve all application access policies

```powershell
PS C:\> Get-CsApplicationAccessPolicy
```

The command shown above returns information of all application access policies that have been configured for use in the tenant.

### Retrieve specific application access policy

```powershell
PS C:\> Get-CsApplicationAccessPolicy -Identity "ASimplePolicy"
```

In the command shown above, information is returned for a single application access policy: the policy with the Identity ASimplePolicy.

## PARAMETERS

### -Filter

A filter that is not expressed in the standard wildcard language.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csapplicationaccesspolicy)

[Grant-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csapplicationaccesspolicy)

[Set-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csapplicationaccesspolicy)

[Remove-CsApplicationAccessPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csapplicationaccesspolicy)
