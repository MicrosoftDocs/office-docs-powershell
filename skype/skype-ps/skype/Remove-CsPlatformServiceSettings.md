---
external help file:Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsPlatformServiceSettings
schema: 2.0.0
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

### -------------------------- EXAMPLE 1 --------------------------
```
PS C:\> Remove-CsPlatformServiceSettings -Identity Global
```

This example reset the global configuration to default value. Global configuration cannot be removed.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before testing.

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

### -Identity
Indicates the Identity of the Platform Service Settings to be removed.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsIdentity


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsPlatformServiceSettings](https://docs.microsoft.com/en-us/powershell/module/skype/new-csplatformservicesettings?view=skype-ps)

[Get-CsPlatformServiceSettings](https://docs.microsoft.com/en-us/powershell/module/skype/get-csplatformservicesettings?view=skype-ps)

[Set-CsPlatformServiceSettings](https://docs.microsoft.com/en-us/powershell/module/skype/set-csplatformservicesettings?view=skype-ps)
