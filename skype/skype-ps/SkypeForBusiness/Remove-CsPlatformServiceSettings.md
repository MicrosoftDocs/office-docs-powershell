---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/remove-csplatformservicesettings
schema: 2.0.0
title: Remove-CsPlatformServiceSettings
---

# Remove-CsPlatformServiceSettings

## SYNOPSIS
Reset Skype for Business on Mac global settings in your organization. This cmdlet was introduced in Skype for Business Server 2015 Cumulative Update 6 (December 2017).

## SYNTAX

```
Remove-CsPlatformServiceSettings [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server 2015 Cumulative Update 6 introduces new features for Skype for Business on Mac users like support for E-911 calls, send files in peer-to-peer chats, block external access by policy and more.

The `Remove-CsPlatformServiceSettings` cmdlet reset the global configuration in your organization.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> Remove-CsPlatformServiceSettings -Identity Global
```

This example reset the global configuration to default value. Global configuration cannot be removed.

## PARAMETERS

### -Force

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Suppresses any confirmation prompts that would otherwise be displayed before testing.

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

### -Identity

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Indicates the Identity of the Platform Service Settings to be removed.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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

### -WhatIf

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsIdentity


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsPlatformServiceSettings](https://learn.microsoft.com/powershell/module/skypeforbusiness/new-csplatformservicesettings?view=skype-ps)

[Get-CsPlatformServiceSettings](https://learn.microsoft.com/powershell/module/skypeforbusiness/get-csplatformservicesettings?view=skype-ps)

[Set-CsPlatformServiceSettings](https://learn.microsoft.com/powershell/module/skypeforbusiness/set-csplatformservicesettings?view=skype-ps)
