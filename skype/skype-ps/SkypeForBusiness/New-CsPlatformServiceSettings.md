---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/new-csplatformservicesettings
schema: 2.0.0
title: New-CsPlatformServiceSettings
---

# New-CsPlatformServiceSettings

## SYNOPSIS
Creates a new Skype for Business on Mac configuration in your organization. This cmdlet was introduced in Skype for Business Server 2015 Cumulative Update 6 (December 2017).

## SYNTAX

```
New-CsPlatformServiceSettings [-EnableDelegateManagement <Boolean>] [-EnableExternalAccessCheck <Boolean>]
 [-EnablePushNotifications <Boolean>] [-UseLegacyPushNotifications <Boolean>] [-EnableE911 <Boolean>]
 [-EnableFileTransfer <Boolean>] [-EnableCORS <Boolean>] [-EnableUcwaScopeCheck <Boolean>]
 [-MaxRegistrationsPerPublicApplication <Int32>] [-Identity] <XdsIdentity> [-InMemory] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server 2015 Cumulative Update 6 introduces new features for Skype for Business on Mac users like support for E-911 calls, send files in peer-to-peer chats, block external access by policy and more.

The `New-CsPlatformServiceSettings` cmdlet gives you the ability to create a new configuration for these settings.

## EXAMPLES

### EXAMPLE 1
```
PS C:\> New-CsPlatformServiceSettings -Identity NewPSS -EnableDelegateManagement $True -EnableExternalAccessCheck $True
```

This example creates a new Platform Service Settings configuration and enables delegate management and external access check.

## PARAMETERS

### -EnableCORS

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

This parameter is reserved for Microsoft internal use only.

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

### -EnableDelegateManagement

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Enables the ability to manage delegates from the Skype for Business on Mac client.

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

### -EnableE911

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Allows Skype for Business on Mac users to call 911.

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

### -EnableExternalAccessCheck

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Enables administrators to use external access policies to block external access to Skype for Business on Mac users.

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

### -EnableFileTransfer

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Enables Skype for Business on Mac users send files in peer-to-peer chats.

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

### -EnablePushNotifications

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Enables Skype for Business on Mac clients to use push notifications.

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

### -EnableUcwaScopeCheck

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

This parameter is reserved for Microsoft internal use only.

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

Unique identifier of the Platform Service Settings to be created.

To create a new collection of settings at the site scope, use syntax similar to this:

`-Identity site:Redmond`

To create new settings at the service scope, use syntax like this:

`-Identity service:WebServer:atl-cs-001.litwareinc.com`

Privacy settings can only be created for the WebServer service.
An error will occur if you try to apply these settings to any other service.

Note that your command will fail if Platform Service Settings already exist for the specified site or service.
Likewise, your command will fail if you attempt to create a new collection of global settings.

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

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-CsPlatformServiceSettings.

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

### -MaxRegistrationsPerPublicApplication

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

This parameter is reserved for Microsoft internal use only.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseLegacyPushNotifications

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

This parameter is reserved for Microsoft internal use only.

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

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Set-CsPlatformServiceSettings](https://learn.microsoft.com/powershell/module/skypeforbusiness/set-csplatformservicesettings?view=skype-ps)

[Get-CsPlatformServiceSettings](https://learn.microsoft.com/powershell/module/skypeforbusiness/get-csplatformservicesettings?view=skype-ps)

[Remove-CsPlatformServiceSettings](https://learn.microsoft.com/powershell/module/skypeforbusiness/remove-csplatformservicesettings?view=skype-ps)
