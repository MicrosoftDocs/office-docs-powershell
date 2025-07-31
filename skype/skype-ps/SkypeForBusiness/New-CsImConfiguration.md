---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/new-csimconfiguration
schema: 2.0.0
title: New-CsImConfiguration
---

# New-CsImConfiguration

## SYNOPSIS
Use the New-CsImConfiguration cmdlet to create a new Instant Messaging (IM) configuration. This cmdlet was introduced in Skype for Business June 2016 Cumulative Update.


## SYNTAX

```
New-CsImConfiguration [-Identity] <XdsIdentity> [-Confirm] [-EnableOfflineIm <Boolean>] [-Force] [-InMemory]
 [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the New-CsImConfiguration cmdlet to create a new Instant Messaging (IM) configuration.

## EXAMPLES

### Example 1
```
New-CsImConfiguration -Identity "Site:Redmond" -EnableOfflineIm $true
```

This example creates a new Instant Messaging (IM) configuration for the Redmond site and enables the offline IM feature in that new configuration.

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
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Get-CsImConfiguration](https://learn.microsoft.com/powershell/module/skype/get-csimconfiguration?view=skype-ps)

[Set-CsImConfiguration](https://learn.microsoft.com/powershell/module/skype/set-csimconfiguration?view=skype-ps)

[Remove-CsImConfiguration](https://learn.microsoft.com/powershell/module/skype/remove-csimconfiguration?view=skype-ps)
