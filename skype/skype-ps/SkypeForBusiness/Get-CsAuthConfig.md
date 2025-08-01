---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/get-csauthconfig
schema: 2.0.0
title: Get-CsAuthConfig
---

# Get-CsAuthConfig

## SYNOPSIS
Use the Get-CsAuthConfig cmdlet to retrieve the authentication configuration for your organization.

## SYNTAX

```
Get-CsAuthConfig [[-Pool] <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-CsAuthConfig cmdlet to retrieve the authentication configuration for your organization.

This cmdlet gets authentication configuration from two server roles: Registrar and WebServices.

It is meant to only be run at the global level.

If you do run it at the pool level and only one of the roles are present on the pool, the cmdlet will return the setting that corresponds to the role that exists on the pool and the global settings for the role that doesn't exist on the pool.

If neither role is present on the pool, it will return an error.

If both roles are present for the pool, but policies are not defined at the pool level, the cmdlet will return an error.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Pool

> Applicable: Skype for Business Server 2019

{{Fill Pool Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Skype for Business Server 2019

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

> Applicable: Skype for Business Server 2019

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

### System.String

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
