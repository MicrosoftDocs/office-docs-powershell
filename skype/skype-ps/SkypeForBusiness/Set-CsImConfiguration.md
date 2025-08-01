---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/set-csimconfiguration
schema: 2.0.0
title: Set-CsImConfiguration
---

# Set-CsImConfiguration

## SYNOPSIS
Use the Set-CsImConfiguration cmdlet to modify an existing Instant Messaging (IM) configuration. This cmdlet was introduced in Skype for Business June 2016 Cumulative Update.

## SYNTAX

### Identity (Default)
```
Set-CsImConfiguration [[-Identity] <XdsIdentity>] [-Confirm] [-EnableOfflineIm <Boolean>] [-Force]
 [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsImConfiguration [-Confirm] [-EnableOfflineIm <Boolean>] [-Force] [-Instance <PSObject>] [-Tenant <Guid>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Set-CsImConfiguration cmdlet to modify an existing Instant Messaging (IM) configuration.

## EXAMPLES

### Example 1
```
Set-CsImConfiguration -Identity "Site:Redmond" -EnableOfflineIm $false
```

This example modifies the existing Redmond site IM configuration to disable the offline IM feature.

## PARAMETERS

### -EnableOfflineIm

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Enables or disables Offline Instant Messaging.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

A unique identifier specifying the scope and, in some cases the name, of the IM configuration.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values. This object must be of type IMConfiguration and can be retrieved by calling the Get-CsImConfiguration cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

Shows what would happen if the cmdlet runs. The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Get-CsImConfiguration](https://learn.microsoft.com/powershell/module/skype/get-csimconfiguration?view=skype-ps)

[New-CsImConfiguration](https://learn.microsoft.com/powershell/module/skype/new-csimconfiguration?view=skype-ps)

[Remove-CsImConfiguration](https://learn.microsoft.com/powershell/module/skype/remove-csimconfiguration?view=skype-ps)
