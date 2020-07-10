---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-csipphonepolicy
applicable: Skype for Business Online, Skype for Business Server 2019
title: Get-CsIPPhonePolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsIPPhonePolicy

## SYNOPSIS
Use the Get-CsIPPhonePolicy cmdlet to get all the settings of the Skype for Business Online and Skype for Business Server 2019 global IP phone policy. IP phone policies define the Skype for Business features that are available to users.

## SYNTAX

```
Get-CsIPPhonePolicy [[-Identity] <XdsIdentity>] [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
IP phone policies are applied each time a user accesses the system via an IP phone device. The Get-CsIPPhonePolicy cmdlet retrieves the global IP phone policy that has been configured in your organization along with all their settings.

## EXAMPLES

### -------------------------- Example 1 ------------------------
```
PS C:\> Get-CsIPPhonePolicy
```

This example returns the global IP phone policy along with all their settings.

## PARAMETERS

### -Filter
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
This parameter is reserved for internal Microsoft use.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object


## NOTES


## RELATED LINKS
[Grant-CsIPPhonePolicy](https://docs.microsoft.com/powershell/module/skype/grant-csipphonepolicy?view=skype-ps)

[Set-CsIPPhonePolicy](https://docs.microsoft.com/powershell/module/skype/set-csipphonepolicy?view=skype-ps)
